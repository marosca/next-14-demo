import { PokemonGrid, PokemonsFavoriteGrid } from '@/pokemons/';
import { PokemonsFavorite } from '@/pokemons/components/PokemonsFavorite';
import { useAppSelector } from '@/store';

export const metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
};
export default async function FavoritesPage() {
  return (
    <div className='flex flex-col'>
      <PokemonsFavoriteGrid />
    </div>
  );
}
