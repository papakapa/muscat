import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Track } from '../../track/scheme/track.schema';
import { ITrack } from '../../track/interfaces/track.interface';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
  @Prop({ unique: true })
  title: string

  @Prop()
  poster: string;

  @Prop({
    type: Types.ObjectId,
    ref: `${Track.name}`
  })
  tracks: ITrack[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
