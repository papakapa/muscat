import { Body, Controller, Post } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {
  }

  @Post('create')
  async createNewArtist(@Body('artist') artist: CreateArtistDto) {
    return this.artistService.createArtist(artist);
  }
}
