import React from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import Window from './Window';

export default function Desktop() {
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <MenuBar />
      <Window title='Vardan'>
        <div>{'Vardan'}</div>
      </Window>
      <Dock />
    </div>
  );
}
