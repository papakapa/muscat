import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { PlaylistModule } from './playlist/playlist.module';
import { AlbumModule } from './album/album.module';
import {Track, TrackSchema} from "./track/scheme/track.schema";
import {Playlist, PlaylistSchema} from "./playlist/scheme/playlist.schema";
import {Artist, ArtistSchema} from "./artist/scheme/artist.schema";
import { AlbumSchema } from './album/scheme/album.schema';
import { Album } from './album/scheme/album.schema';

@Module({
  imports: [
    AuthModule,
    TrackModule,
    ArtistModule,
    PlaylistModule,
    AlbumModule,
    MongooseModule.forRoot('mongodb+srv://kiryl:1111@cluster0.w5spu.mongodb.net/muscat?retryWrites=true&w=majority'),
    MongooseModule.forFeature([
      {name: Track.name, schema: TrackSchema},
      {name: Playlist.name, schema: PlaylistSchema},
      {name: Artist.name, schema: ArtistSchema},
      {name: Album.name, schema: AlbumSchema},
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
