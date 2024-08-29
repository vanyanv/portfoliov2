import React from 'react';

type Window = {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  children: React.ReactNode;
};
const Window = ({
  isOpen,
  onClose,
  onMinimize,
  onMaximize,
  children,
}: Window) => {
  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-96'>
        <div className='flex justify-between items-center bg-gray-100 p-2 rounded-t-lg'>
          <div className='flex space-x-2'>
            <button
              onClick={onClose}
              className='w-3.5 h-3.5 bg-red-500 rounded-full'
            ></button>
            <button
              onClick={onMinimize}
              className='w-3.5 h-3.5 bg-yellow-500 rounded-full'
            ></button>
            <button
              onClick={onMaximize}
              className='w-3.5 h-3.5 bg-green-500 rounded-full'
            ></button>
          </div>
        </div>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};

export default Window;
