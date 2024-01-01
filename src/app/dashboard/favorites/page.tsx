import { PokemonGrid } from '@/pokemons/';

export const metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
};
export default async function FavoritesPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-3'>
        Pokemons favoritos <small>global state</small>
        <PokemonGrid pokemons={[]} />
      </span>
    </div>
  );
}
