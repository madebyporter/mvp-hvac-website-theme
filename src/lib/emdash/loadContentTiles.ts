import { getEmDashCollection } from 'emdash';
import { asRecord } from './asRecord';
import { mapTileData, type ContentTileProps } from './mapTile';

export type TilePlacementFilter = 'home' | 'services' | 'both';

/** Load `content_tile` entries for a placement; `both` matches any. */
export async function loadContentTiles(placement: TilePlacementFilter): Promise<ContentTileProps[]> {
  const { entries, error } = await getEmDashCollection('content_tile', {
    orderBy: { sort_order: 'asc' },
  });
  if (error) return [];

  const out: ContentTileProps[] = [];
  for (const e of entries) {
    const d = asRecord(e.data);
    const p = typeof d.placement === 'string' ? d.placement : 'both';
    if (p !== 'both' && p !== placement) continue;
    out.push(mapTileData(d));
  }
  return out;
}
