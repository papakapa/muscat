import { ITrack } from '../../track/interfaces/track.interface';

export interface IPlaylist {
  _id: string;
  title: string;
  tracks: ITrack[];
  poster: string;
}

export interface IPlaylistToCreate {
  title: string;
  tracks?: ITrack[];
  poster: string;
}
