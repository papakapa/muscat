import React, {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {getAllArtists} from "../../redux/artist/artist.selector";
import Track from "../track/components/Track";
import {ITrack} from "../../core/interfaces/ITrack";
import {getAllTracks} from "../../redux/track/track.selectors";
import {IAlbum} from "../../core/interfaces/IAlbum";
import Album from "../album/Album";

const ArtistInfo = (props : any) => {
  const artists = useSelector(getAllArtists);
  const tracks = useSelector(getAllTracks);
  const id = props.match.params.id;
  const artist = useMemo(() => artists.find(el => el._id === id), [id, artists]);

  const rerenderTracks = useCallback(() => {
    if (artist) {
      if (artist.tracks && artist.tracks.length) {
        const resultTracks = artist.tracks.map((el: ITrack) => {
          return tracks.find(el1 => el1.title === el.title);
        })
      return resultTracks.map((el: ITrack)  => <Track track={el} order={artist.tracks} key={el._id + 'artist'}/>);
    }
      return null;
    }
    return null;
  }, [artist, tracks]);

  const rerenderAlbums = useCallback(() => {
    if (artist) {
      if (artist.albums && artist.albums.length) {
        return artist.albums.map((el: IAlbum) => <Album album={el} key={el._id + 'album'}/>);
      }
      return null;
    }
    return null;
  }, [artist]);
  return (
    <div>
      <div>
        {artist && <img src={artist.avatar} alt={'poster'}/>}
      </div>
      <div>
        {artist && <h1>{artist.nickName}</h1>}
      </div>
      <div>
        {rerenderTracks()}
      </div>
      <div>
        {rerenderAlbums()}
      </div>
      <div>

      </div>
    </div>
  );
};

export default ArtistInfo;