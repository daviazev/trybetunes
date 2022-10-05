import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import appContext from '../context/Context';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

import AlbumCards from '../components/AlbumCards';

import '../styles/Search.css';

function Search() {
  const [artist, setArtist] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { setAlbums, setArtistName } = useContext(appContext);

  // const [erro, setErro] = useState(false);

  useEffect(() => {
    const minLength = 2;
    if (artist.length >= minLength) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [artist]);

  const searchArtist = async () => {
    setArtistName(artist);
    try {
      const getAlbums = await searchAlbumsAPI(artist);
      // console.log(getAlbums);
      setAlbums(getAlbums);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main">
      <div>
        <Header />
      </div>
      <section className="main-section">
        <div data-testid="search-artist-div" className="search-music-div">
          <label htmlFor="search-artist-input">
            <input
              onChange={ ({ target: { value } }) => setArtist(value) }
              className="search-artist-input"
              data-testid="search-artist-input"
              placeholder="NOME DO ARTISTA"
            />
          </label>
          <button
            disabled={ isButtonDisabled }
            onClick={ searchArtist }
            className="search-artist-button"
            type="button"
            data-testid="search-artist-button"
          >
            PROCURAR

          </button>
        </div>
        <div className="result-div">
          <AlbumCards />
        </div>
      </section>
    </main>
  );
}

export default Search;
