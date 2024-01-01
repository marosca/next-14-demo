import React from 'react';
import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from 'react-icons/io5';
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline sizew={40} />,
    title: 'Dashboard',
    subtitle: 'Visualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator sizew={40} />,
    title: 'Counter',
    subtitle: 'Contador client side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball sizew={40} />,
    title: 'Pokemons',
    subtitle: 'Generación estática',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline sizew={40} />,
    title: 'Favoritos',
    subtitle: 'Global state',
  },
];
export const Sidebar = () => {
  return (
    <div
      style={{ width: '400px' }}
      id='menu'
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='text-lg md:text-2xl font-bold text-white flex items-center'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>

      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              width={50}
              height={50}
              src='http://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt=''
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Edward Tompson</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItems.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.title}
            path={menuItem.path}
            icon={menuItem.icon}
            title={menuItem.title}
            subtitle={menuItem.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
