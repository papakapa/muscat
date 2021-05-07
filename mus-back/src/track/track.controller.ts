import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import {ITrack, ITrackToCreate} from './interfaces/track.interface';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {
  }

  @Get('all')
  async getAllTracks() {
    return this.trackService.getAllTracks();
  }

  @Post('likedTracks')
  async getLikedTracks(@Body('login') login: string) {
    return this.trackService.getLikedTracks(login);
  }

  @Post('create')
  async addTrackToDb(@Body('track') track: ITrackToCreate) {
    return this.trackService.addTack(track);
  }

  @Post('like')
  async addLikedTrack(@Body('track') track: ITrack, @Body('login') login: string) {
    return this.trackService.addLikedTrack(login, track);
  }

  @Post('unlike')
  async deleteLikedTrack(@Body('track') track: ITrack, @Body('login') login: string) {
    return this.trackService.deleteLikedTrack(login, track);
  }
}
