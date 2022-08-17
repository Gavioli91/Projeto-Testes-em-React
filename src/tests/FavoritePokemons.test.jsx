import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Se não há pokémons favoritos, renderiza: "No favorite pokemon found"', () => {
  it('Testa se é exibido na tela "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);

    const favoritePokemons = screen.getByText('No favorite pokemon found');
    expect(favoritePokemons).toBeInTheDocument();
  });

  it('Testa se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<FavoritePokemons />);
  });
});
