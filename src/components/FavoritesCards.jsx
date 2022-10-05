import React from 'react';
import PropTypes from 'prop-types';
import Audio from './Audio';

import '../styles/MusicCard.css';

function FavoritesCards({ favorites }) {
  return (
    <div className="audios-div">
      { favorites.map((music) => (
        <Audio
          key={ music.trackName }
          music={ music }
        />
      ))}
    </div>
  );
}

FavoritesCards.propTypes = {
  favorites: PropTypes.array,
}.isRequired;

export default FavoritesCards;
