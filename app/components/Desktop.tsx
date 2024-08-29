'use client';
import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import Window from './Window';

export default function Desktop() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);
  const handleMinimize = () => alert('Minimize action');
  const handleMaximize = () => alert('Maximize action');
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <MenuBar loggedIn={false} />
      <Window
        isOpen={isModalOpen}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
      >
        <div>{'Vardan'}</div>
      </Window>
      <Dock handleOpen={setIsModalOpen} />
    </div>
  );
}
