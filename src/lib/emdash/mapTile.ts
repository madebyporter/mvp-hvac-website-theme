export type ContentTileProps = {
  eyebrow: string;
  title: string;
  summary: string;
  linkHref: string;
  /** Card image; empty when not set (CMS tile or legacy data). */
  imageSrc: string;
  imageAlt: string;
};

/** Map an EmDash `content_tile` entry `data` record to `BucketGrid` props. */
export function mapTileData(data: Record<string, unknown>): ContentTileProps {
  return {
    eyebrow: typeof data.eyebrow === 'string' ? data.eyebrow : '',
    title: typeof data.title === 'string' ? data.title : '',
    summary: typeof data.summary === 'string' ? data.summary : '',
    linkHref: typeof data.link_href === 'string' ? data.link_href : '#',
    imageSrc: typeof data.image_src === 'string' ? data.image_src : '',
    imageAlt: typeof data.image_alt === 'string' ? data.image_alt : '',
  };
}
