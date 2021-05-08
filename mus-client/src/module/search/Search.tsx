import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchResults} from "../../redux/search/search.selector";
import {useForm} from "react-hook-form";
import {startSearch} from "../../redux/search/search.actions";
import {ITrack} from "../../core/interfaces/ITrack";
import Track from "../track/components/Track";
import {IPlaylist} from "../../core/interfaces/IPlaylist";
import Playlist from "../playlists/Playlist";
import Album from "../album/Album";
import {IAlbum} from "../../core/interfaces/IAlbum";
import {IArtist} from "../../core/interfaces/IArtist";
import Artist from "../artist/Artist";

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(getSearchResults);
  const {handleSubmit, register}  = useForm();

  const onSearch = (data: any) => dispatch(startSearch(data.search));

  const rerenderTracks = useCallback(() => {
    if (searchResults.tracks) {
      if (searchResults.tracks.length) {
        return searchResults.tracks.map((el: ITrack) => <Track track={el} order={searchResults.tracks} key={el._id + 'search'}/>);
      }
      return null;
    }
    return null;
  }, [searchResults]);

  const rerenderPlaylists = useCallback(() => {
    if (searchResults.playlists) {
      if (searchResults.playlists.length) {
        return searchResults.playlists.map((el: IPlaylist) => <Playlist playlist={el}  key={el._id + 'search'}/>);
      }
    return null;
    }
    return null;
  }, [searchResults]);

  const rerenderArtist = useCallback(() => {
    if (searchResults.artists) {
      if (searchResults.artists.length) {
        return searchResults.artists.map((el: IArtist) => <Artist artist={el} key={el._id + 'search'}/>);
      }
      return null;
    }
    return null;
  }, [searchResults]);

  const rerenderAlbums = useCallback(() => {
    if (searchResults.albums) {
      if (searchResults.albums.length) {
        return searchResults.albums.map((el: IAlbum) => <Album album={el} key={el._id + 'search'}/>);
      }
      return null;
    }
    return null;
  }, [searchResults]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSearch)}>
      <input type='text' name='search' ref={register({required: true})} placeholder='search...'/>
      <button>Search</button>
      </form>
      <div>{rerenderTracks()}</div>
      <div>{rerenderPlaylists()}</div>
      <div>{rerenderArtist()}</div>
      <div>{rerenderAlbums()}</div>
    </div>
  );
};

export default Search;
