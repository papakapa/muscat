import React, {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import Track from "../track/components/Track";
import {ITrack} from "../../core/interfaces/ITrack";
import { getAllAlbums } from "../../redux/album/album.selector";

const AlbumInfo = (props : any) => {
  const albums = useSelector(getAllAlbums);
  const id = props.match.params.id;
  const album = useMemo(() => albums.find(el => el._id === id), [id, albums]);

  const rerenderTracks = useCallback(() => {
    if (album) {
      if (album.tracks && album.tracks.length) {
        return album.tracks.map((el: ITrack)  => <Track track={el} order={album.tracks} key={el._id + 'album'}/>);
      }
      return null;
    }
    return null;
  }, [album]);

  return (
    <div>
      <div>
        {album && <img src={album.poster} alt={'poster'}/>}
      </div>
      <div>
        {album && <h1>{album.title}</h1>}
      </div>
      <div>
        {rerenderTracks()}
      </div>
    </div>
  );
};

export default AlbumInfo;