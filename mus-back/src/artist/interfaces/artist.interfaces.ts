import {ITrack} from "../../track/interfaces/track.interface";
import {IAlbum} from "../../album/interfaces/album.interface";

export interface IArtist {
  _id: string;
  nickName: string;
  avatar: string;
  tracks: ITrack[];
  albums: IAlbum[];
}

export interface ICreateArtist {
  nickNames: string;
  avatar: string;
  tracks?: ITrack[];
  albums?: IAlbum[];
}
