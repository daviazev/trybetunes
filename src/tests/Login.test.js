import React from "react";
import Login from '../pages/Login';
import { renderWithRouter } from './helpers/renderWith';
import Provider from '../context/Provider'
import userEvent from "@testing-library/user-event";

describe('Todos os testes relacionados à tela de Login', () => {
  it('todos os elementos devem ser renderizados e se o botão de entrar está desabilitado', () => {
   const { getByTestId } = renderWithRouter(<Provider><Login /></Provider>)

    expect(getByTestId('page-login')).toBeInTheDocument();
    expect(getByTestId('login-name-input')).toBeInTheDocument();
    expect(getByTestId('login-submit-button')).toBeDisabled();
  })

  it('o botão de entrar deve ser habilitado e a rota muda', () => {
    const { getByTestId, history } = renderWithRouter(<Provider><Login /></Provider>)

    userEvent.type(getByTestId('login-name-input'), 'davi')
    expect(getByTestId('login-submit-button')).toBeEnabled();
    userEvent.click(getByTestId('login-submit-button'));

    const { pathname } = history.location;

    expect(pathname).toBe('/search')
  })
})
