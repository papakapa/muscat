import React, {useCallback, useState} from "react";
import {useForm} from "react-hook-form";
import {uploadContent} from "../../firebase/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import {getAllTracks} from "../../redux/track/track.selectors";
import {getCreatePlaylistTracks} from "../../redux/playlist/playlists.selector";
import PlaylistCreateTrack from "./PlaylistCreateTrack";
import {createPlaylist} from "../../redux/playlist/playlists.actions";
import { StyledCreatePlaylist, StyledCreatePlaylistTracks, StyledPlaylistForm } from "./StyledCreatePlaylist";

const CreatePlaylist = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(getAllTracks);
  const selectedTracks = useSelector(getCreatePlaylistTracks);
  const [posterFile, setPosterFile] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {handleSubmit, register} = useForm()

  const handleOnPosterLoad = async (e: any) => {
    const image = e.target.files[0];
    await uploadContent(image, setPosterLink, 'playlist', setIsLoading);
    setPosterFile(image);
  };

  const rerenderTracks = useCallback(() => {
    if (tracks.length) {
      return tracks.map(el => <PlaylistCreateTrack track={el} key={el._id}/>)
    }
    return null;
  },[tracks]);

  const onPlaylistCreate = (data: any) => {
    console.log(data);
    if (isLoading) {
      return;
    } else {
      dispatch(createPlaylist({
        title: data.title,
        poster: posterFile === '' ?  'https://firebasestorage.googleapis.com/v0/b/mus-cat.appspot.com/o/posters%2Fimages.png?alt=media&token=5edfa57c-2ea6-4af6-b270-ff0ccfd6e708' : posterLink,
        tracks: selectedTracks,
      }));
    }
  };

  return (
    <StyledCreatePlaylist>
      <StyledPlaylistForm onSubmit={handleSubmit(onPlaylistCreate)}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose playlist poster</label>
          <input
            className="form-control"
            id="formFile"
            type="file"
            onChange={handleOnPosterLoad}
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            ref={register({required: true})}
            autoComplete='off'
            placeholder="Enter playlist title"
          />
        </div>
        <StyledCreatePlaylistTracks>
          {rerenderTracks()}
        </StyledCreatePlaylistTracks>
        <button type="submit" className="btn btn-success">Create</button>
      </StyledPlaylistForm>
    </StyledCreatePlaylist>
  );
};

export default CreatePlaylist;
