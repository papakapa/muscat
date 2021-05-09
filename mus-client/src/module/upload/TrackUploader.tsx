import React, {useState} from 'react';
import {uploadContent} from "../../firebase/firebase.utils";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTrackToDb} from "../../redux/track/track.actions";
import { StyledUploaderForm } from './StyledUploader';

const TrackUploader = () => {
  const dispatch = useDispatch();

  const [trackFile, setTrackFile] = useState('');
  const [trackLink, setTrackLink] = useState('');
  const [posterFile, setPosterFile] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [isTrackLoading, setIsTrackLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const {handleSubmit, register} = useForm();

  const handleOnTrackLoad = async (e: any) => {
    const track = e.target.files[0];
    await uploadContent(track, setTrackLink, 'tracks', setIsTrackLoading);
    setTrackFile(track);
  };

  const handleOnPosterLoad = async (e: any) => {
    const image = e.target.files[0];
    await uploadContent(image, setPosterLink, 'posters', setIsImageLoading);
    setPosterFile(image);
  };

  const onTrackAdd = (data: any) => {
    console.log(data);
    if (posterFile === '' || trackFile === '' || isImageLoading || isTrackLoading) {
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
    <StyledUploaderForm>
      <form onSubmit={handleSubmit(onTrackAdd)}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose track</label>
          <input
            className="form-control"
            id="formFile"
            type="file"
            onChange={handleOnTrackLoad}
            accept="audio/*"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose track poster</label>
          <input
            className="form-control"
            id="formFile"
            type="file"
            onChange={handleOnPosterLoad}
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Track title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            ref={register({required: true})}
            autoComplete='off'
            placeholder="Enter track title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">Track Artist</label>
          <input
            type="text"
            className="form-control"
            id="artist"
            placeholder="Enter track artist"
            name='artist'
            ref={register({required: true})}
            autoComplete='off'
          />
        </div>
        <button type="submit" className="btn btn-success" disabled={isTrackLoading || isImageLoading}>Add track</button>
      </form>
    </StyledUploaderForm>
  );
};

export default TrackUploader;
