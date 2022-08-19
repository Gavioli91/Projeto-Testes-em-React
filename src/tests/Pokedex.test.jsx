import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex', () => {
  it('Testa se tem um heading h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const pokedex = screen.getByRole('heading', { name: /Encountered/i });
    expect(pokedex).toBeInTheDocument();
  });

  it('Testa se mostra o próximo pokémon ao clicar no botão, "Próximo pokémon"', () => {
    renderWithRouter(<App />);

    const proximoPkm = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(proximoPkm).toHaveTextContent('Próximo pokémon');

    userEvent.click(proximoPkm);
    const outroPkm = screen.getByText(/Charmander/i);
    expect(outroPkm).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const umPokemonPorVez = screen.getAllByTestId('pokemon-name');
    expect(umPokemonPorVez.length).toBe(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const escolhaDePkm = 7;
    const filtragemDePokemon = screen.getAllByTestId('pokemon-type-button');
    expect(filtragemDePokemon).toHaveLength(escolhaDePkm);

    const botaoPsychic = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(botaoPsychic);

    const bugsDosPokemons = screen.getAllByText(/Bug/i);
    expect(bugsDosPokemons).toHaveLength(1);
  });

  it('Testa se a Pokédex tem um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const botaoDeReset = screen.getByRole('button', { name: 'All' });
    expect(botaoDeReset).toBeInTheDocument();

    userEvent.click(botaoDeReset);
    const primeiroPokemon = screen.getByText(/Pikachu/i);
    expect(primeiroPokemon).toBeInTheDocument();
  });
});
