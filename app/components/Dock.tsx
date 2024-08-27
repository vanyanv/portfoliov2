import React from 'react';

export default function Dock() {
  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex space-x-4 bg-gray-800/50 rounded-xl p-2 backdrop-blur-md'>
      {[
        'app-icon1.png',
        'app-icon2.png',
        'app-icon3.png',
        'app-icon4.png',
        'app-icon5.png',
      ].map((icon, index) => (
        <div
          key={index}
          className='dock-item transform transition-transform duration-200 hover:scale-125 '
        >
          <img src={icon} alt={`App ${index + 1}`} className='w-12 h-12' />
        </div>
      ))}
    </div>
  );
}
