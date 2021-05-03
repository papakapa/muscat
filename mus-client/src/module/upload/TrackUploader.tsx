import React, {useState} from 'react';
import {uploadContent} from "../../firebase/firebase.utils";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTrackToDb} from "../../redux/track/track.actions";

const TrackUploader = () => {
  const dispatch = useDispatch();

  const [trackFile, setTrackFile] = useState('');
  const [trackLink, setTrackLink] = useState('');
  const [posterFile, setPosterFile] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {handleSubmit, register} = useForm();

  const handleOnTrackLoad = async (e: any) => {
    const track = e.target.files[0];
    await uploadContent(track, setTrackLink, 'tracks', setIsLoading);
    setTrackFile(track);
  };

  const handleOnPosterLoad = async (e: any) => {
    const image = e.target.files[0];
    await uploadContent(image, setPosterLink, 'posters', setIsLoading);
    setPosterFile(image);
  };

  const onTrackAdd = (data: any) => {
    console.log(data);
    if (posterFile === '' || trackFile === '' || isLoading) {
      return;
    } else {
      dispatch(addTrackToDb({
        title: data.title,
        link: trackLink,
        poster: posterLink,
        artist: data.artist,
      }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onTrackAdd)}>
        <input type='file' onChange={handleOnTrackLoad} accept="audio/*"/>
        <input type='file' onChange={handleOnPosterLoad} accept="image/*"/>
        <input
          name='title'
          type='text'
          ref={register({required: true})}
          autoComplete='off'
          placeholder='track title'
        />
        <input
          name='artist'
          type='text'
          ref={register({required: true})}
          autoComplete='off'
          placeholder='track artist'
        />
        <button type='submit'>Add track</button>
      </form>
    </div>
  );
};

export default TrackUploader;
