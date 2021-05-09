import React, {useMemo} from "react";
import {ITrack} from "../../core/interfaces/ITrack";
import {useDispatch, useSelector} from "react-redux";
import {getCreatePlaylistTracks} from "../../redux/playlist/playlists.selector";
import {addTrackToPlaylist, deleteTrackFromPlaylist} from "../../redux/playlist/playlists.actions";
import {
  StyledCreateTrack,
  StyledCreateTrackArtist,
  StyledCreateTrackIcon,
  StyledCreateTrackInfo,
  StyledCreateTrackTitle
} from "./StyledCreatePlaylistTrack";

interface PlaylistCreateTrackProps {
  track: ITrack;
}

const PlaylistCreateTrack = ({track}: PlaylistCreateTrackProps) => {
  const dispatch = useDispatch();

  const selectedTracks = useSelector(getCreatePlaylistTracks);
  const isSelected = useMemo(() => selectedTracks.findIndex(el => el._id === track._id) !== -1,[selectedTracks, track]);

 const onAdd = () => {
   dispatch(addTrackToPlaylist(track));
 };

 const onRemove = () => {
   dispatch(deleteTrackFromPlaylist(track._id));
 };

  return (
    <StyledCreateTrack>
      <StyledCreateTrackInfo>
        <StyledCreateTrackTitle>{track.title}</StyledCreateTrackTitle>
        <StyledCreateTrackArtist>{track.artist}</StyledCreateTrackArtist>
      </StyledCreateTrackInfo>
      <div>
        {!isSelected && <StyledCreateTrackIcon className="material-icons" onClick={onAdd}>add_circle_outline</StyledCreateTrackIcon>}
        {isSelected && <StyledCreateTrackIcon className="material-icons" onClick={onRemove}>remove_circle_outline</StyledCreateTrackIcon>}
      </div>
    </StyledCreateTrack>
  );
};

export default PlaylistCreateTrack;
