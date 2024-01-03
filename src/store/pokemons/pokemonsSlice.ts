import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}
const initialState: PokemonsState = { favorites: {} };

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    loadFavoriteFromLocalStorage(state, action: PayloadAction<PokemonsState>) {
      state.favorites = action.payload.favorites;
    },
    toogleFavoritePokemon(state, action: PayloadAction<SimplePokemon>) {
      if (state.favorites[action.payload.id]) {
        delete state.favorites[action.payload.id];
        return;
      }
      state.favorites[action.payload.id] = action.payload;
    },
  },
});

console.log('******* creo la store de pokemonsSlice *********');

export const { toogleFavoritePokemon, loadFavoriteFromLocalStorage } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;
