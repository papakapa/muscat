import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadContent } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { addArtistToDb } from '../../redux/artist/artist.actions';

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
    <div>
      <form onSubmit={handleSubmit(onAddArtist)}>
        <input type='file' onChange={handleOnPosterLoad}/>
        <div>
          <input type='text' name='nickName' ref={register({required: true})} autoComplete='off' placeholder='Enter artist name'/>
        </div>
        <button type='submit'>Add artist</button>
      </form>
    </div>
  );
};

export default ArtistUploader;
