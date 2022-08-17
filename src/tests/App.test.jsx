import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a aplicação tem um conjunto fixo de links de navegação', () => {
  it('Testa se é exibido "Home"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('link', { name: 'Home' });
    expect(title).toBeInTheDocument();
  });

  it('Testa se é exibido "About"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('link', { name: 'About' });
    expect(title).toBeInTheDocument();
  });

  it('Testa se é exibido "Favorite Pokémons"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(title).toBeInTheDocument();
  });
});
