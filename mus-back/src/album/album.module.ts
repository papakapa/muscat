import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './scheme/album.schema';
import {AlbumController} from "./album.controller";
import {AlbumService} from "./album.service";

@Module({
  imports: [MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}])],
  controllers: [AlbumController],
  providers: [AlbumService],
  exports: [AlbumService]
})
export class AlbumModule {}
