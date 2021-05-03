import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITrack } from '../../track/interfaces/track.interface';
import { Document, Types } from 'mongoose';
import { Track } from '../../track/scheme/track.schema';
import { Album } from '../../album/scheme/album.schema';
import { IAlbum } from '../../album/interfaces/album.interface';

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
  @Prop({unique: true})
  nickName: string

  @Prop()
  avatar: string

  @Prop({
    type: Types.ObjectId,
    ref: `${Track.name}`
  })
  tracks: ITrack[]

  @Prop({
    type: Types.ObjectId,
    ref: `${Album.name}`
  })
  albums: IAlbum[]
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
