import { getEmDashCollection, getTermsForEntries } from 'emdash';
import { asRecord } from './asRecord';

export type HomePostTeaser = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

/** Recent posts for the home teaser (published, default sort). */
export async function loadHomePostTeasers(limit: number): Promise<HomePostTeaser[]> {
  const { entries, error } = await getEmDashCollection('posts', { limit });
  if (error || entries.length === 0) return [];

  const ids = entries.map((e) => {
    const d = asRecord(e.data);
    return typeof d.id === 'string' ? d.id : e.id;
  });

  const termMap = await getTermsForEntries('posts', ids, 'category');

  return entries.map((e, i) => {
    const d = asRecord(e.data);
    const slug =
      'slug' in e && typeof (e as { slug?: string }).slug === 'string'
        ? (e as { slug: string }).slug
        : e.id;
    const terms = termMap.get(ids[i] ?? '') ?? [];
    const category = terms[0]?.label ?? '';

    return {
      slug,
      title: typeof d.title === 'string' ? d.title : '',
      excerpt: typeof d.excerpt === 'string' ? d.excerpt : '',
      category,
    };
  });
}
