'use client';
import React, { useEffect, useState } from 'react';

type MenuBar = {
  login: boolean;
};

export default function MenuBar({ login }: MenuBar) {
  const [dateTime, setDateTime] = useState(new Date());

  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Change to false for 24-hour format
  });

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every minute

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {' '}
      <div className='fixed top-0 left-0 w-full h-8 bg-gray-900/90 backdrop-blur-md text-gray-300 flex items-center px-4 text-sm shadow-lg'>
        {/* Apple Logo */}
        <div className='flex items-center space-x-4'>
          {/* <img
            src='apple-logo.png' // Replace with the actual path to your Apple logo image
            alt='Apple Logo'
            className='w-5 h-5'
          /> */}
          <span className='hover:text-white cursor-pointer'>Finder</span>
        </div>

        {/* Menu Items */}
        <div className='ml-8 flex items-center space-x-6'>
          {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map(
            (item, index) => (
              <span key={index} className='hover:text-white cursor-pointer'>
                {item}
              </span>
            )
          )}
        </div>

        {/* Clock */}
        <div className='ml-auto flex items-center space-x-4'>
          <span className='hover:text-white cursor-pointer'>🔋95%</span>
          <span className='hover:text-white cursor-pointer'>
            {formattedTime}
          </span>
        </div>
      </div>
      );
    </div>
  );
}
