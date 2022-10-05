import React from 'react';
import PropTypes from 'prop-types';
// import Loading from '../pages/Loading';
import Audio from './Audio';
// import { addSong } from '../services/favoriteSongsAPI';

import '../styles/MusicCard.css';

function MusicCard({ musics }) {
  const arrayOfMusics = musics.filter((_music, index) => index !== 0);

  return (
    <div className="musics-div">
      { arrayOfMusics.map((music) => (
        <Audio
          key={ music.trackName }
          // fetchAddSongs={ fetchAddSongs }
          music={ music }
        />
      ))}
    </div>
  );
}

MusicCard.propTypes = {
  musics: PropTypes.array,
}.isRequired;

export default MusicCard;
