import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Audio.css';

// abaixo o link de onde eu retirei os ícones usados para favoritar/desfavoritar as músicas :)
// https://freeicons.io/material-icons-action/favorite-border-icon-15926

import whiteHeart from '../images/whiteHeart.svg';
import redHeart from '../images/redHeart.svg';
import appContext from '../context/Context';

function Audio({ music: { trackName, previewUrl, trackId } }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { setFavoriteSong, removeFavoriteSong } = useContext(appContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-songs'));
    // console.log(favorites);

    setIsFavorite(favorites.some((musicObj) => musicObj.trackId === trackId));

    // console.log(toggleFavorite);
  }, []);

  const favorite = () => {
    setIsFavorite(true);
    setFavoriteSong({ trackName, previewUrl, trackId });
  };

  const disfavor = () => {
    setIsFavorite(false);
    removeFavoriteSong(trackId);
  };

  return (
    <div>
      <div className="audio-div" key={ trackName }>
        <div className="trackname">
          <p>{trackName}</p>
        </div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor={ trackName }>
          <img
            data-testid={ isFavorite ? 'red-heart' : 'white-heart' }
            alt={ isFavorite ? 'red heart' : 'white heart' }
            onClick={ () => (isFavorite ? disfavor() : favorite()) }
            src={ isFavorite ? redHeart : whiteHeart }
          />
        </label>
      </div>
      <div>
        <hr className="hr" />
      </div>
    </div>
  );
}

Audio.propTypes = {
  arrayOfMusics: PropTypes.array,
  fetchAddSongs: PropTypes.func,
  music: PropTypes.object,
}.isRequired;

export default Audio;

// setFavorite(!favorite); setFavoriteSong({ trackName, previewUrl, trackId });
