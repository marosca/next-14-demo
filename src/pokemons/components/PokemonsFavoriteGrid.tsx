'use client';
import React, { use, useEffect, useState } from 'react';

import { PokemonGrid } from '..';
import { useAppSelector } from '@/store';

export const PokemonsFavoriteGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return <PokemonGrid pokemons={favoritePokemons} />;
};
