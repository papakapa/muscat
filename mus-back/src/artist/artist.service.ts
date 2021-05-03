import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from './scheme/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
  ) {}

  async createArtist(artist: CreateArtistDto) {
    const newArtist = new this.artistModel(artist);
    return newArtist.save();
  }

  async findArtist(artistName: string) {
    const artist = await this.artistModel.findOne({ nickName: artistName });
    return !!artist;
  }
}
