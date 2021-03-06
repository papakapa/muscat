import { ITrack } from '../../track/interfaces/track.interface';

export interface IAlbum {
  _id: string;
  title: string;
  poster: string;
  tracks: ITrack[]
}

export interface IAlbumToCreate {
  title: string;
  poster: string;
  tracks: ITrack[];
}
