import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

import '../styles/Album.css';

function Album({ match: { params: { id } } }) {
  const [musics, setMusics] = useState([]);
  const [artist, setArtist] = useState('');
  const [collection, setCollection] = useState('');
  const [albumImage, setAlbumImage] = useState('');

  // console.log(id);
  // console.log(musics);

  useEffect(() => {
    if (musics.length > 0) {
      const { artistName, collectionName, artworkUrl100 } = musics[0];
      setArtist(artistName);
      setCollection(collectionName);
      setAlbumImage(artworkUrl100);
      // console.log(artistName);
      // console.log(collectionName);
    }
  }, [musics]);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        setMusics(await getMusics(id));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMusics();
  }, []);

  return (
    <div className="main-div">
      <div>
        <Header />
      </div>
      <div>
        <img
          data-testid="album-image"
          className="album-image"
          src={ albumImage }
          alt={ `album of ${collection}` }
        />
        <div className="album-infos">
          <h4 data-testid="album-name">{collection}</h4>
          <h5 data-testid="artist-name">{artist}</h5>
        </div>
      </div>
      <div className="musics-main-div">
        <div className="top-div" />
        <div className="div-musics-main">
          <MusicCard musics={ musics } />
        </div>
      </div>
    </div>
  );
}

Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;
