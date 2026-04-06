import type { PortableTextBlock } from 'emdash';
import { getEmDashCollection, getEmDashEntry, getEntryTerms, getTermsForEntries } from 'emdash';
import { asRecord } from './asRecord';

export type BlogPostView = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: PortableTextBlock[];
  imageSrc: string;
  imageAlt: string;
};

export type BlogIndexPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

function formatPostDate(d: Record<string, unknown>): string {
  const pub = d.publishedAt;
  const cre = d.createdAt;
  const raw =
    pub instanceof Date ? pub : cre instanceof Date ? cre : null;
  if (!raw) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(raw);
}

function resolveSlug(e: { id: string; slug?: string | null }, d: Record<string, unknown>): string {
  if ('slug' in e && typeof e.slug === 'string' && e.slug.length > 0) return e.slug;
  if (typeof d.slug === 'string' && d.slug.length > 0) return d.slug;
  return e.id;
}

function featuredImageFromData(d: Record<string, unknown>): { src?: string; alt: string } {
  const img = d.featured_image;
  if (!img || typeof img !== 'object' || Array.isArray(img)) return { alt: '' };
  const r = img as Record<string, unknown>;
  const src = typeof r.src === 'string' ? r.src : undefined;
  const alt = typeof r.alt === 'string' ? r.alt : '';
  return { src, alt };
}

function contentFromData(d: Record<string, unknown>): PortableTextBlock[] {
  const c = d.content;
  if (!Array.isArray(c)) return [];
  return c as PortableTextBlock[];
}

/** Single post for blog detail (404 if null). */
export async function loadBlogPost(
  slug: string,
  fallbackHero: { imageSrc: string; imageAlt: string },
): Promise<BlogPostView | null> {
  const { entry, error } = await getEmDashEntry('posts', slug);
  if (error || !entry) return null;

  const d = asRecord(entry.data);
  const resolvedSlug = resolveSlug(entry, d);
  const terms = await getEntryTerms('posts', entry.id, 'category');
  const category = terms[0]?.label ?? '';

  const { src, alt } = featuredImageFromData(d);
  const imageSrc = src ?? fallbackHero.imageSrc;
  const imageAlt = src ? alt : fallbackHero.imageAlt;

  return {
    slug: resolvedSlug,
    title: typeof d.title === 'string' ? d.title : '',
    excerpt: typeof d.excerpt === 'string' ? d.excerpt : '',
    category,
    date: formatPostDate(d),
    content: contentFromData(d),
    imageSrc,
    imageAlt,
  };
}

/** Blog index rows; empty when CMS has no posts (caller may fall back to static data). */
export async function loadBlogIndexPosts(limit: number): Promise<BlogIndexPost[]> {
  const { entries, error } = await getEmDashCollection('posts', { limit });
  if (error || entries.length === 0) return [];

  const ids = entries.map((e) => {
    const row = asRecord(e.data);
    return typeof row.id === 'string' ? row.id : e.id;
  });

  const termMap = await getTermsForEntries('posts', ids, 'category');

  return entries.map((e, i) => {
    const d = asRecord(e.data);
    const slug = resolveSlug(e, d);
    const terms = termMap.get(ids[i] ?? '') ?? [];
    const category = terms[0]?.label ?? '';

    return {
      slug,
      title: typeof d.title === 'string' ? d.title : '',
      excerpt: typeof d.excerpt === 'string' ? d.excerpt : '',
      category,
      date: formatPostDate(d),
    };
  });
}
