/** Resolved slide props for `Slideshow.astro`. */
export type SlideshowSlideProps = {
  segment: string;
  title: string;
  blurb: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

type MediaLike = { src?: string; alt?: string } | string | null | undefined;

function imageFromField(image: unknown): { src: string; alt: string } {
  if (!image) return { src: '', alt: '' };
  if (typeof image === 'string') return { src: image, alt: '' };
  if (typeof image === 'object' && image !== null && 'src' in image) {
    const o = image as MediaLike;
    if (typeof o === 'object' && o !== null) {
      return {
        src: typeof o.src === 'string' ? o.src : '',
        alt: typeof o.alt === 'string' ? o.alt : '',
      };
    }
  }
  return { src: '', alt: '' };
}

/** Map an EmDash `slideshow_slide` entry `data` record to presentation props. */
export function mapSlideData(data: Record<string, unknown>): SlideshowSlideProps {
  const img = imageFromField(data.image);
  return {
    segment: typeof data.segment === 'string' ? data.segment : '',
    title: typeof data.title === 'string' ? data.title : '',
    blurb: typeof data.blurb === 'string' ? data.blurb : '',
    ctaLabel: typeof data.cta_label === 'string' ? data.cta_label : '',
    ctaHref: typeof data.cta_href === 'string' ? data.cta_href : '#',
    imageSrc: img.src,
    imageAlt: img.alt,
  };
}
