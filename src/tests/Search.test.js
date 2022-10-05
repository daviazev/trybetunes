import React from "react";
import Search from '../pages/Search';
import { renderWithRouter } from './helpers/renderWith';
import Provider from '../context/Provider'
import userEvent from "@testing-library/user-event";

import { waitFor } from "@testing-library/react";

import artisResponse from './mocks/artistAPI';

describe('testes da tela Search', () => {
  it('todos os elementos são renderizados', () => {
    const { getByTestId } = renderWithRouter(<Provider><Search /></Provider>)

    expect(getByTestId('header-component')).toBeInTheDocument();
    expect(getByTestId('link-to-search')).toBeInTheDocument();
    expect(getByTestId('link-to-favorites')).toBeInTheDocument();
    expect(getByTestId('link-to-profile')).toBeInTheDocument();
    expect(getByTestId('header-user-name')).toBeInTheDocument();

    expect(getByTestId('search-artist-div')).toBeInTheDocument();
    expect(getByTestId('search-artist-input')).toBeInTheDocument();
    expect(getByTestId('search-artist-button')).toBeInTheDocument();
  })

  it('testa a chamada da API ao pesquisar por tchaikovsky no input de pesquisa', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(artisResponse),
    });

    const { getByTestId } = renderWithRouter(<Provider><Search /></Provider>)

    const inputSearchArtist = getByTestId('search-artist-input');
    const buttonSearchArtist = getByTestId('search-artist-button');
    
    userEvent.type(inputSearchArtist, 'tchaikovsky');
    userEvent.click(buttonSearchArtist);

    expect(global.fetch).toBeCalled();
    expect(global.fetch).toBeCalledWith('https://itunes.apple.com/search?entity=album&term=tchaikovsky&attribute=allArtistTerm');

    for(let index = 0; index < 39; index += 1) {
      waitFor(() => expect(getByTestId(`card-album-${index}`).toBeInTheDocument()))
    }
  })
})
