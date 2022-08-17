import React from 'react';
import { screen } from '@testing-library/react';
import About from '../About';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a página contém as informações sobre a Pokédex', () => {
  it('Testa se a página contém um heading h2 com o texto "About Pokédex"', () => {
    renderWithRouter(<About />);

    const about = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(about).toBeInTheDocument();
  });

  it('Testa se a página tem a imagem de uma Pokédex sendo exibida', () => {
    renderWithRouter(<About />);
    const about = screen.getByRole('img', { name: /Pokédex/i });
    expect(about).toBeInTheDocument();
  });

  const linkForPokedex = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.';
  expect(About).toHaveAttribute('src', linkForPokedex);
});
