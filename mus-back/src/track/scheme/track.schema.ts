import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  title: string

  @Prop()
  artist: string

  @Prop()
  link: string

  @Prop()
  poster: string
}

export const TrackSchema = SchemaFactory.createForClass(Track);
