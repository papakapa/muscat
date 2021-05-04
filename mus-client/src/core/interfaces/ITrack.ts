export interface ITrack {
  _id: string;
  link: string;
  poster: string;
  title: string;
  artist: string;
}

export interface ITrackToCreate {
  link: string;
  poster: string;
  title: string;
  artist: string;
}
