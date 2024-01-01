'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  addOne,
  initCounterState,
  resetCounter,
  substractOne,
} from '@/store/counter/counterSlice';
import { useEffect, useState } from 'react';

interface Props {
  value?: number;
}

export interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  try {
    const response = await fetch('/api/counter');
    const data = await response.json();
    return data;
  } catch (error) {
    return { count: 0 };
  }
};

export const CartCounter = ({ value }: Props) => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.count);

  // useEffect(() => {
  //   dispatch(initCounterState(value ?? 0));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((result) => dispatch(initCounterState(result.count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'> {count} </span>

      <div className='flex'>
        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>
      </div>
    </>
  );
};
function setReady(): any {
  throw new Error('Function not implemented.');
}
