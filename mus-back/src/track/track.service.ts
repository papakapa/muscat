import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './scheme/track.schema';
import { Model } from 'mongoose';
import { ArtistService } from '../artist/artist.service';
import { ITrack, ITrackToCreate } from './interfaces/track.interface';
import { User, UserDocument } from '../user/schema/user.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private artistService: ArtistService,
  ) {}

  async getAllTracks() {
    return this.trackModel.find().exec();
  }

  async getLikedTracks(login: string) {
    const user = await this.userModel.findOne({login: login});
    return user.tracks;
  }

  async addTack(track: ITrackToCreate) {
    const newTrack = new this.trackModel(track);
    const isArtistExist = await this.artistService.findArtist(track.artist);
    if (!isArtistExist) {
      await this.artistService.createArtist({
        nickName: track.artist,
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/mus-cat.appspot.com/o/posters%2Fguest-user.jpg?alt=media&token=42f8de0d-c8b2-4580-b6e4-aa421b06310e',
        tracks: [track],
      });
    }
    return newTrack.save();
  }

  async addLikedTrack(login: string, track: ITrack) {
    return this.userModel.findOneAndUpdate(
      { login: login },
      { $push: { tracks: track } },
    );
  }

  async deleteLikedTrack(login: string, track: ITrack) {
    const user = await this.userModel.findOne({login: login});
    user.tracks = user.tracks.filter(el => el._id !== track._id);
    return user.save();
  }
}
