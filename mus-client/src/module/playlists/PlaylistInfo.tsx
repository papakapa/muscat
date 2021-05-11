import React, {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {getAllPlaylists} from "../../redux/playlist/playlists.selector";
import {ITrack} from "../../core/interfaces/ITrack";
import Track from "../track/components/Track";
import {StyledPlaylistInfo, StyledPlaylistInfoPoster, StyledPlaylistInfoTracks } from "./StyledPlaylistInfo";
import { StyledPlaylistInfoSection } from "./StyledPlaylistInfo";

const PlaylistInfo: React.FC = (props: any) => {
  const playlists = useSelector(getAllPlaylists);
  const id = props.match.params.id;
  const playlist = useMemo(() => playlists.find(el => el._id === id), [id, playlists]);

  const rerenderTracks = useCallback(() => {
    if (playlist) {
      if (playlist.tracks && playlist.tracks.length) {
        return playlist.tracks.map((el: ITrack)  => <Track track={el} order={playlist.tracks} key={el._id + 'playlist'}/>);
      }
      return null;
    }
    return null;
  }, [playlist]);

  return (
    <StyledPlaylistInfo>
      <StyledPlaylistInfoSection>
        <div>
          {playlist && <StyledPlaylistInfoPoster src={playlist.poster} alt={'poster'}/>}
        </div>
        <div>
          {playlist && <h1>{playlist.title}</h1>}
        </div>
      </StyledPlaylistInfoSection>
      <StyledPlaylistInfoTracks>{rerenderTracks()}</StyledPlaylistInfoTracks>
    </StyledPlaylistInfo>
  );
};

export default PlaylistInfo;
