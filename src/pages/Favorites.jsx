import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FavoritesCards from '../components/FavoritesCards';

import '../styles/Favorites.css';

function Favorites() {
  const favoritesMusics = JSON.parse(localStorage.getItem('favorite-songs'));

  return (
    <div className="main-div">
      <div data-testid="page-favorites">
        <Header />
      </div>
      <div className="div-right-father">
        <div className="div-h1-favorites-musics">
          <h1>Músicas favoritas</h1>
        </div>
        { favoritesMusics.length > 0 ? (
          <div className="favorites-musics">
            <FavoritesCards favorites={ favoritesMusics } />
          </div>
        ) : (
          <div className="no-favorites-musics">
            <h2>Opa, você não tem músicas favoritas</h2>
            <Link
              className="link-to-search-page"
              to="/search"
            >
              Ir à tela de pesquisas

            </Link>
          </div>
        ) }

      </div>
    </div>
  );
}

export default Favorites;
