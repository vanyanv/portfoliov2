import React from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';

export default function Desktop() {
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <MenuBar />

      <Dock />
    </div>
  );
}
