import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('all')
  async getArtists() {
    return this.artistService.getAllArtists();
  }

  @Post('create')
  async createNewArtist(@Body('artist') artist: CreateArtistDto) {
    return this.artistService.createArtist(artist);
  }
}
