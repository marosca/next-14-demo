'use client';

import React from 'react';
import { SimpleWidget } from '..';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { useAppSelector } from '@/store';

export const WidgetsWrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className='flex flex-wrap p-2 justify-center'>
      <SimpleWidget
        label='Contador'
        title={`${count}`}
        subtitle='Productos en carrito'
        icon={<MdOutlineShoppingCartCheckout size={30} />}
        href='/dashboard/counter'
      />
    </div>
  );
};
