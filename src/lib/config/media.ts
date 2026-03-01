const BUCKET_BASE = 'https://ndsq-content.sfo3.cdn.digitaloceanspaces.com';

const withBase = (paths: string[]): string[] =>
	paths.map((path) => `${BUCKET_BASE}/${path}`);

const generatePhotoUrls = (prefix: string, count: number): string[] =>
	withBase(Array.from({ length: count }, (_, i) => `${prefix}${i + 1}.jpg`));

export const photoUrls: string[] = generatePhotoUrls('nd_fave_', 32);

export const photoboothUrls: string[] = generatePhotoUrls('nd_photobooth_', 58);

export const clipUrls: string[] = withBase([
  'nd_down_the_aisle.mp4',
  'nd_ceremony_armpull.mp4',
  'nd_up_the_aisle.mp4',
  'nd_cheer.mp4',
  'nd_pond_pan.mp4',
  'nd_jump.mp4',
  'nd_dance_twirl.mp4',
  'nd_father_daughter_dance.mp4',
  'nd_silly_butt.mp4',
  'nd_trio_trouble.mp4',
  'nd_brother_groove.mp4',
  'nd_getting_down_n_dirty.mp4',
  'nd_family_pan.mp4',
  'nd_final_send_off.mp4',
  'nd_final_kiss.mp4',
]);
