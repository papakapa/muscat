import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './scheme/track.schema';
import { ArtistModule } from '../artist/artist.module';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { User, UserSchema } from '../user/schema/user.schema';
import {Artist, ArtistSchema} from "../artist/scheme/artist.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Track.name, schema: TrackSchema },
      { name: User.name, schema: UserSchema },
      { name: Artist.name, schema: ArtistSchema}
    ]),
    ArtistModule,
  ],
  controllers: [TrackController],
  providers: [TrackService],
  exports: [TrackService],
})
export class TrackModule {}
