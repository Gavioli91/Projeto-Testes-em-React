import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon', () => {
  it('Testa o tipo correto do Pokémon renderizado na tela', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getByTestId('pokemon-type');
    expect(pokemon).toHaveTextContent('Electric');
  });

  it('Testa se a imagem do Pokémon é exibida', () => {
    renderWithRouter(<App />);

    const imagem = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagemDoPokemon = screen.getByAltText('Pikachu sprite');
    expect(imagemDoPokemon).toBeDefined();
    expect(imagemDoPokemon).toHaveAttribute('src', imagem);
  });

  it('Testa se o card do Pokémon tem um link que renderiza mais detalhes', () => {
    renderWithRouter(<App />);

    const detalhes = screen.getByText('More details');
    expect(detalhes).toBeDefined();
    expect(detalhes).toHaveAttribute('href', '/pokemons/25');
  });

  it('Testa se é redirecionado para os detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const detalhes = screen.getByText('More details');
    userEvent.click(detalhes);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Testa se há um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const detalhes = screen.getByText(/more details/i);
    userEvent.click(detalhes);

    const pokemonFavorito = screen.getByLabelText(/favoritado/i);
    expect(pokemonFavorito).toBeDefined();
    userEvent.click(pokemonFavorito);

    const imagemDoPokemon = '/star-icon.svg';
    const descricaoDoPokemon = /Pikachu is marked as favorite/i;
    const pokemonSelecionado = screen.getByAltText(descricaoDoPokemon);

    expect(pokemonFavorito).toBeDefined();
    expect(pokemonSelecionado).toHaveAttribute('src', imagemDoPokemon);
  });
});
