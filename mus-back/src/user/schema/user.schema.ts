import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Track } from '../../track/scheme/track.schema';
import { ITrack } from '../../track/interfaces/track.interface';
import { IPlaylist } from '../../playlist/interafces/playlist.interfaces';
import { Playlist } from '../../playlist/scheme/playlist.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({unique: true})
  login: string

  @Prop()
  firstName: string

  @Prop()
  secondName: string

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop({
    type: Types.ObjectId,
    ref: `${Track.name}`
  })
  tracks: ITrack[]

  @Prop({
    type: Types.ObjectId,
    ref: `${Playlist.name}`
  })
  playlists: IPlaylist[]
}

export const UserSchema = SchemaFactory.createForClass(User);
