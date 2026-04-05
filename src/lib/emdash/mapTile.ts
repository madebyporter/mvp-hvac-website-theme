export type ContentTileProps = {
  eyebrow: string;
  title: string;
  summary: string;
  linkHref: string;
};

/** Map an EmDash `content_tile` entry `data` record to `BucketGrid` props. */
export function mapTileData(data: Record<string, unknown>): ContentTileProps {
  return {
    eyebrow: typeof data.eyebrow === 'string' ? data.eyebrow : '',
    title: typeof data.title === 'string' ? data.title : '',
    summary: typeof data.summary === 'string' ? data.summary : '',
    linkHref: typeof data.link_href === 'string' ? data.link_href : '#',
  };
}
