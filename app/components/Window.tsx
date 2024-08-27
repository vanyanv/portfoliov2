import React from 'react';

export default function Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='relative max-w-lg mx-auto my-8 border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white'>
      {/* Title Bar */}
      <div className='flex items-center p-2 bg-gray-100 border-b border-gray-300'>
        {/* Traffic Lights */}
        <div className='flex space-x-1 ml-1'>
          <div
            className='w-3 h-3 bg-red-500 rounded-full cursor-pointer'
            title='Close'
          ></div>
          <div
            className='w-3 h-3 bg-yellow-500 rounded-full cursor-pointer'
            title='Minimize'
          ></div>
          <div
            className='w-3 h-3 bg-green-500 rounded-full cursor-pointer'
            title='Zoom'
          ></div>
        </div>
        {/* Title */}
        <div className='flex-grow text-center text-gray-600 font-medium ml-2'>
          {title}
        </div>
      </div>
      {/* Content Area */}
      <div className='p-4'>{children}</div>
    </div>
  );
}
