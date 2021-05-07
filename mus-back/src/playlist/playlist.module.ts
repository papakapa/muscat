import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Playlist, PlaylistSchema } from './scheme/playlist.schema';
import {PlaylistController} from "./playlist.controller";
import {PlaylistService} from "./playlist.service";

@Module({
  imports: [MongooseModule.forFeature([{name: Playlist.name, schema: PlaylistSchema}])],
  controllers: [PlaylistController],
  providers: [PlaylistService],
  exports: [PlaylistService]
})
export class PlaylistModule {}
