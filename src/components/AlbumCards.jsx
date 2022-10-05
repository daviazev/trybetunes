import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../context/Context';

import '../styles/AlbumCards.css';

function AlbumCards() {
  const { albums, artistName } = useContext(appContext);

  return (
    <div>
      { albums.length > 0 ? (
        <h1 className="artist-name-h1">{`Resultado de álbuns para ${artistName}`}</h1>
      ) : (
        <div className="search-an-artist-h1-msg">
          <h1>Sem resultados aqui! Pesquise por um artista agora!</h1>
        </div>
      ) }
      <section className="cards-section">
        { albums.map((album, index) => (
          <Link
            to={ `/album/${album.collectionId}` }
            className="card-album"
            data-testid={ `card-album-${index}` }
            key={ album.collectionId }
          >
            <img
              className="image-card"
              src={ album.artworkUrl100 }
              alt={ `album of ${album.artistName}` }
            />
            <p>{album.collectionName}</p>
            <span>{ `${album.releaseDate.split('-')[0]} • ${album.artistName}` }</span>
          </Link>
        )) }
      </section>
    </div>
  );
}

export default AlbumCards;
