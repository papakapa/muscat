import React, {useMemo} from "react";
import {ITrack} from "../../core/interfaces/ITrack";
import {useDispatch, useSelector} from "react-redux";
import {getCreatePlaylistTracks} from "../../redux/playlist/playlists.selector";
import {addTrackToPlaylist, deleteTrackFromPlaylist} from "../../redux/playlist/playlists.actions";

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
    <div>
      <div>
        <h1>{track.title}</h1>
        <h1>{track.artist}</h1>
      </div>
      <div>
        {!isSelected && <button onClick={onAdd}>add</button>}
        {isSelected && <button onClick={onRemove}>remove</button>}
      </div>
    </div>
  );
};

export default PlaylistCreateTrack;
