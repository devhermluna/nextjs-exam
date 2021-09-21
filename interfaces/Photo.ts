export interface PhotoSrc {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
}

export interface Photo {
  id: number;
  photographer: string;
  photographer_url: string;
  src: PhotoSrc;
  url: string;
}
