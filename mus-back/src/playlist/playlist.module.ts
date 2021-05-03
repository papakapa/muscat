import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Playlist, PlaylistSchema } from './scheme/playlist.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Playlist.name, schema: PlaylistSchema}])]
})
export class PlaylistModule {}
