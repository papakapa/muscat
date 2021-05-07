import {Body, Controller, Get, Post} from "@nestjs/common";
import {IPlaylistToCreate} from "./interafces/playlist.interfaces";
import {PlaylistService} from "./playlist.service";

@Controller('playlist')
export class PlaylistController {
  constructor(
    private playlistService: PlaylistService
  ) {
  }

  @Get('all')
 async getAllPlaylists() {
   return this.playlistService.getAllPlaylists();
 }

 @Post('create')
  async createPlaylist(@Body('playlist') playlist: IPlaylistToCreate) {
   return this.playlistService.createPlaylist(playlist);
 }
}
