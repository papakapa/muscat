import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './scheme/track.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}])]
})
export class TrackModule {}
