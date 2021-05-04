import { ITrackToCreate } from '../../track/interfaces/track.interface';

export class CreateArtistDto {
  readonly nickName: string;
  readonly avatar: string;
  readonly tracks: ITrackToCreate[];
}
