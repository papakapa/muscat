import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './scheme/album.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}])]
})
export class AlbumModule {}
