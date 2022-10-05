import PropTypes from 'prop-types';
import React, { useState } from 'react';
import appContext from './Context';

const FAVORITE_SONGS_KEY = 'favorite-songs';

if (!localStorage.getItem(FAVORITE_SONGS_KEY)) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}

function Provider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [artistName, setArtistName] = useState('');

  const setFavoriteSong = (musicObject) => {
    // console.log(musicObject);
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));
    // console.log(favorites);
    const arrayOfFavorites = [...favorites, musicObject];
    localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify(arrayOfFavorites));
  };

  const removeFavoriteSong = (id) => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));
    const arrayOfFavorites = favorites.filter((musicObj) => musicObj.trackId !== id);
    localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify(arrayOfFavorites));
  };

  const context = {
    setAlbums,
    albums,
    setArtistName,
    artistName,
    setFavoriteSong,
    removeFavoriteSong,
  };

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
