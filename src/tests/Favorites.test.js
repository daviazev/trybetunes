import favoritesMock from "./mocks/favoritesSongs";
import { renderWithRouter } from './helpers/renderWith';
import Favorites from '../pages/Favorites'

import App from "../App";

import Provider from '../context/Provider'
import { waitFor } from "@testing-library/react";

describe('testa a tela de músicas favoritas', () => {
  it('testa se os elementos são renderizados', () => {
    localStorage.setItem('favorite-songs', JSON.stringify(favoritesMock))
    const { getAllByTestId, history } = renderWithRouter(<Provider><App /></Provider>)

    history.push('/favorites')
    const { pathname } = history.location;

    expect(pathname).toBe('/favorites')
    waitFor(() => expect(getAllByTestId('red-heart')).toHaveLength(3));
  })
})
