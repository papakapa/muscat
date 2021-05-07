import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./scheme/album.schema";
import {Model} from "mongoose";
import {IAlbumToCreate} from "./interfaces/album.interface";

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>
  ) {
  }

  async getAllAlbums() {
    return this.albumModel.find().exec();
  }

  async createAlbum(album: IAlbumToCreate) {
    const newAlbum = new this.albumModel(album);
    return newAlbum.save();
  }
}
