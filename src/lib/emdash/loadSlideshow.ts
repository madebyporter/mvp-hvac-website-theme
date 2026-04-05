import { getEmDashCollection, getEmDashEntry } from 'emdash';
import { asRecord } from './asRecord';
import { mapSlideData, type SlideshowSlideProps } from './mapSlide';

export type TitleHeadingLevel = 'h1' | 'h2' | 'h3';

export type SlideshowBundle = {
  titleHeadingLevel: TitleHeadingLevel;
  slides: SlideshowSlideProps[];
};

function parseHeadingLevel(raw: unknown): TitleHeadingLevel {
  if (raw === 'h2' || raw === 'h3') return raw;
  return 'h1';
}

/** Load a `slideshow` by slug and its slides, ordered by `sort_order`. */
export async function loadSlideshow(slug: string): Promise<SlideshowBundle | null> {
  const { entry: show, error: showErr } = await getEmDashEntry('slideshow', slug);
  if (showErr || !show) return null;

  const data = asRecord(show.data);
  const showRowId = typeof data.id === 'string' ? data.id : show.id;

  const { entries, error: listErr } = await getEmDashCollection('slideshow_slide', {
    orderBy: { sort_order: 'asc' },
  });
  if (listErr) return null;

  const slides: SlideshowSlideProps[] = [];
  for (const e of entries) {
    const d = asRecord(e.data);
    if (d.slideshow !== showRowId) continue;
    slides.push(mapSlideData(d));
  }

  if (slides.length === 0) return null;

  return {
    titleHeadingLevel: parseHeadingLevel(data.title_heading_level),
    slides,
  };
}
