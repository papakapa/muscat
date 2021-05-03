import { ITrack } from '../../track/interfaces/track.interface';
import { IPlaylist } from '../../playlist/interafces/playlist.interfaces';

export class ExceptedUserDto {
  readonly _id: string
  readonly firstName: string
  readonly secondName: string
  readonly login: string
  readonly email: string
  readonly password: string
  readonly tracks: ITrack[]
  readonly playlist: IPlaylist[]
}
