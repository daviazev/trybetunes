import { renderWithRouter } from './helpers/renderWith';
import Provider from '../context/Provider'
import App from '../App'

import albumResponse from './mocks/albumAPI';
import favoritesMock from "./mocks/favoritesSongs";

import { waitFor } from "@testing-library/react";

describe('testes para a tela de álbum selecionado', () => {
  it('testa a chamada da api pelo id que está na url', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(albumResponse),
    });

    localStorage.setItem('favorite-songs', JSON.stringify(favoritesMock))

    const { getByTestId, getAllByTestId, history } = renderWithRouter(<Provider><App /></Provider>)

    history.push('/album/373558205')
    const { pathname } = history.location;

    expect(pathname).toBe('/album/373558205')
    await waitFor(() => expect(global.fetch).toBeCalled());
    await waitFor(() => expect(global.fetch).toBeCalledWith('https://itunes.apple.com/lookup?id=373558205&entity=song'));

    expect(getByTestId('album-image')).toBeInTheDocument();
    expect(getByTestId('artist-name')).toBeInTheDocument();
    expect(getByTestId('album-name')).toBeInTheDocument();

    for (let index = 0; index < 44; index += 1) {
      waitFor(() => expect(screen.getByTestId(`audio-component-${index}`)))
    }

    await waitFor(() => expect(getAllByTestId('white-heart')).toHaveLength(40));
    await waitFor(() => expect(getAllByTestId('red-heart')).toHaveLength(3));
  })
})
