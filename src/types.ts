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

export type PlaceLocation = [
  number,
  number
];

export interface PageProps {
  region: Region
};

export interface RegionPlaceMap {
  [key: string]: Array<Place>
};

export interface Region {
  name: string;
  key: string;
  location: PlaceLocation;
};
