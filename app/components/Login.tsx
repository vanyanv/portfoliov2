'use client';

import React, { useEffect, useState } from 'react';

interface LoginProps {
  userImage?: string;
  userName: string;
  onLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ userImage, userName, onLogin }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Change to false for 24-hour format
      });
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col justify-between h-screen bg-cover bg-center ${
        isMobile ? 'bg-black' : 'bg-macos-background'
      }`}
    >
      {/* Time and Date - Positioned at the top */}
      <div className='flex justify-center mt-10'>
        <div className='text-center'>
          <p className='text-white text-lg font-bold'>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='text-white text-6xl font-bold'>{time}</p>
        </div>
      </div>

      {/* User Image, Username, and Password - Positioned at the bottom */}
      <div className='flex flex-col items-center mb-16'>
        {/* User Image */}
        <div className={`mb-4 ${isMobile ? 'w-20 h-20' : 'w-24 h-24'}`}>
          <img
            src={userImage}
            alt='User'
            className='w-full h-full rounded-full border-2 border-gray-400'
          />
        </div>

        {/* Username */}
        <div className='mb-4'>
          <p
            className={`text-white ${
              isMobile ? 'text-lg' : 'text-xl'
            } font-bold`}
          >
            {userName}
          </p>
        </div>

        {/* Password Input */}
        <div className='mb-4'>
          <input
            type='password'
            placeholder='Enter Password'
            className={`w-${
              isMobile ? '56' : '72'
            } px-4 py-2 text-center text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Login Button */}
        <div>
          <button
            onClick={onLogin}
            className={`w-${
              isMobile ? '56' : '72'
            } px-4 py-2 text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-600`}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
