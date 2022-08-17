import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Not Found', () => {
  it('Testa se a página tem um heading h2 com o texto "Page requested not found"', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole('heading', { name: /not found/i });
    expect(notFound).toBeInTheDocument();
  });

  it('Testa se a página renderiza uma imagem', () => {
    renderWithRouter(<NotFound />);
    const linkPokemon = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const renderImg = screen.getByRole('img', { name: /not found/i });
    expect(renderImg).toBeInTheDocument();
    expect(renderImg).toHaveAttribute('src', linkPokemon);
  });
});
