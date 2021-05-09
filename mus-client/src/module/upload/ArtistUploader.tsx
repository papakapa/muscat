import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadContent } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { addArtistToDb } from '../../redux/artist/artist.actions';
import { StyledUploaderForm } from './StyledUploader';

const ArtistUploader = () => {
  const dispatch = useDispatch();

  const {handleSubmit, register} = useForm();
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onAddArtist = async (data: any) => {
    console.log(data);
    if (imageAsFile === '' || isLoading || imageAsUrl === '') {
      return;
    } else {
      console.log(imageAsUrl,isLoading);
      dispatch(addArtistToDb({nickName: data.nickName, avatar: imageAsUrl}))
    }
  };

  const handleOnPosterLoad = async (e: any) => {
    const image = e.target.files[0];
    await uploadContent(image, setImageAsUrl, 'artist', setIsLoading);
    setImageAsFile(image);
  };

  return (
    <StyledUploaderForm>
      <form onSubmit={handleSubmit(onAddArtist)}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Choose artist image</label>
          <input
            className="form-control"
            id="formFile"
            type="file"
            onChange={handleOnPosterLoad}
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Artist name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='nickName'
            ref={register({required: true})}
            autoComplete='off'
            placeholder="Enter artist nickname"
          />
        </div>
        <button type="submit" className="btn btn-success" disabled={isLoading}>Add artist</button>
      </form>
    </StyledUploaderForm>
  );
};

export default ArtistUploader;
