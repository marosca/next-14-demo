'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import Link from 'next/link';
import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '..';
import { toogleFavoritePokemon } from '@/store/pokemons/pokemonsSlice';

interface Props {
  pokemon: SimplePokemon;
}
export const PokemonsFavorite = ({ pokemon }: Props) => {
  const isSelected = useAppSelector(
    (state) => !!state.pokemons.favorites[pokemon.id]
  );
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    dispatch(toogleFavoritePokemon(pokemon));
  };

  return (
    <div
      className='px-4 py-2 hover:bg-gray-100 flex cursor-pointer'
      onClick={handleClick}
    >
      <div className='text-red-600'>
        {isSelected ? <IoHeart /> : <IoHeartOutline />}
      </div>
      <div className='pl-3'>
        <p className='text-sm font-medium text-gray-800 leading-none'>
          {isSelected ? 'Favorito' : 'No es favorito'}
        </p>
        <p className='text-xs text-gray-500'>Click para cambiar</p>
      </div>
    </div>
  );
};
