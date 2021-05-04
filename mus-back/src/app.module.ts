import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { PlaylistModule } from './playlist/playlist.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    AuthModule,
    TrackModule,
    ArtistModule,
    PlaylistModule,
    AlbumModule,
    MongooseModule.forRoot('mongodb+srv://kiryl:1111@cluster0.w5spu.mongodb.net/muscat?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
