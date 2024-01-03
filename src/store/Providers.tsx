'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './';
import { loadFavoriteFromLocalStorage } from './pokemons/pokemonsSlice';

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    console.log('**** Cargo del localStorage');
    const favoritePokemonsFromLocalStorage = JSON.parse(
      localStorage?.getItem('pokemons') ?? '{}'
    );
    store.dispatch(
      loadFavoriteFromLocalStorage(favoritePokemonsFromLocalStorage)
    );
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
