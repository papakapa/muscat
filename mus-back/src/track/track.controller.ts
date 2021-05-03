import { Body, Controller, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { ITrackToCreate } from './interfaces/track.interface';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post('create')
  async addTrackToDb(@Body('track') track: ITrackToCreate) {
    return this.trackService.addTack(track);
  }
}
