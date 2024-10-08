'use client';
import React from 'react';
import DisplayTime from './DisplayTime';

type MenuBar = {
  loggedIn: boolean;
};

export default function MenuBar({ loggedIn }: MenuBar) {
  return (
    <div>
      {' '}
      <div className='fixed top-0 left-0 w-full h-8 bg-gray-900/90 backdrop-blur-md text-gray-300 flex items-center px-4 text-sm shadow-lg'>
        {!loggedIn && (
          <div className='flex items-center space-x-4'>
            {/* <img
            src='apple-logo.png' // Replace with the actual path to your Apple logo image
            alt='Apple Logo'
            className='w-5 h-5'
          /> */}
            <span className='hover:text-white cursor-pointer'>Finder</span>
          </div>
        )}

        {!loggedIn && (
          <div className='ml-8 flex items-center space-x-6'>
            {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map(
              (item, index) => (
                <span key={index} className='hover:text-white cursor-pointer'>
                  {item}
                </span>
              )
            )}
          </div>
        )}

        {/* Clock */}
        <div className='ml-auto flex items-center space-x-4'>
          <span className='hover:text-white cursor-pointer'>🔋95%</span>
          <span className='hover:text-white cursor-pointer'>
            <DisplayTime />
          </span>
        </div>
      </div>
    </div>
  );
}
