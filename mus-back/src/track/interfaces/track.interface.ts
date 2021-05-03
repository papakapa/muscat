export interface ITrack {
  _id: string;
  title: string;
  artist: string;
  link: string;
  poster: string;
}

export interface ITrackToCreate {
  title: string;
  artist: string;
  link: string;
  poster: string;
}
