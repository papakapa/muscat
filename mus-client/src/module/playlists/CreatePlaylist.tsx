import React, {useCallback, useState} from "react";
import {useForm} from "react-hook-form";
import {uploadContent} from "../../firebase/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import {getAllTracks} from "../../redux/track/track.selectors";
import {getCreatePlaylistTracks} from "../../redux/playlist/playlists.selector";
import PlaylistCreateTrack from "./PlaylistCreateTrack";
import {createPlaylist} from "../../redux/playlist/playlists.actions";

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
    <div>
      <form onSubmit={handleSubmit(onPlaylistCreate)}>
        <input type='file' onChange={handleOnPosterLoad} accept="image/*"/>
        <input
          name='title'
          type='text'
          ref={register({required: true})}
          autoComplete='off'
          placeholder='Playlist title'
        />
        <div>
          {rerenderTracks()}
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
