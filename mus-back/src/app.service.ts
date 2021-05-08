import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./track/scheme/track.schema";
import {Model} from "mongoose";
import {Playlist, PlaylistDocument} from "./playlist/scheme/playlist.schema";
import {Artist, ArtistDocument} from "./artist/scheme/artist.schema";
import {Album, AlbumDocument} from "./album/scheme/album.schema";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>,
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>
  ) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async search(searchString: string) {
    const albums = await this.albumModel.find();
    const tracks = await this.trackModel.find();
    const playlists = await this.playlistModel.find();
    const artist = await this.artistModel.find();

    const resTracks = tracks.filter(el => {
      if (el.title.toLowerCase().search(searchString.toLowerCase()) !== -1 || el.artist.toLowerCase().search(searchString.toLowerCase()) !== -1) {
        return el;
      }
    });
    const resPlaylists = playlists.filter(el => {
      if (el.title.toLowerCase().search(searchString.toLowerCase()) !== -1) {
        return el;
      }
    });
    const resAlbums = albums.filter(el => {
      if (el.title.toLowerCase().search(searchString.toLowerCase()) !== -1) {
        return el;
      }
    });
    const resArtists = artist.filter(el => {
      if (el.nickName.toLowerCase().search(searchString.toLowerCase()) !== -1) {
        return el;
      }
    });

    return {tracks: resTracks, playlists: resPlaylists, albums: resAlbums, artists: resArtists};
  }
}
