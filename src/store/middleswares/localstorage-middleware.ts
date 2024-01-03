import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStoreMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if ((action.type = 'pokemons/toogleFavoritePokemon')) {
      const pokemons = state.getState().pokemons as RootState['pokemons'];
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }
  };
};
