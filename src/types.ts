export interface Place {
  title: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  phone?: string;
  blurb?: string;
  delivers?: boolean;
  collect?: boolean;
  postage?: boolean;
  website?: string;
  types?: Array<string>;
  location?: PlaceLocation;
};

export interface PlaceLocation {
  lat: number;
  lng: number;
};

export interface PageProps {
};
