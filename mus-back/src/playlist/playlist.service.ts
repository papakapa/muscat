import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Playlist, PlaylistDocument} from "./scheme/playlist.schema";
import {Model} from "mongoose";
import {IPlaylistToCreate} from "./interafces/playlist.interfaces";

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>
  ) {}

  async getAllPlaylists () {
    return this.playlistModel.find().exec();
  }

  async createPlaylist (playlist: IPlaylistToCreate) {
    const newPlaylist = new this.playlistModel(playlist);
    return newPlaylist.save();
  }
}
