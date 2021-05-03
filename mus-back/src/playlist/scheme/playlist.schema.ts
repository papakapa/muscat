import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ITrack } from '../../track/interfaces/track.interface';
import { Track } from '../../track/scheme/track.schema';

export type PlaylistDocument = Playlist & Document;

@Schema()
export class Playlist {
  @Prop({unique: true})
  title: string

  @Prop({
    type: Types.ObjectId,
    ref: `${Track.name}`
  })
  tracks: ITrack[]

  @Prop()
  poster: string
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
