import {Body, Controller, Get, Post} from "@nestjs/common";
import {AlbumService} from "./album.service";
import {IAlbumToCreate} from "./interfaces/album.interface";

@Controller('album')
export class AlbumController {
  constructor(private albumService: AlbumService) {
  }

  @Get('all')
  async getAlbums() {
    return this.albumService.getAllAlbums();
  }

  @Post('create')
  async createAlbum(@Body('album') album: IAlbumToCreate) {
    return this.albumService.createAlbum(album);
  }
}
