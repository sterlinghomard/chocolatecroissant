import React from 'react';
import Image from 'next/image';

export default function Picture() {
  return (
    <div className='w-36 h-36 xl:w-44 xl:h-44 relative drop-shadow hover:drop-shadow-lg duration-150 ease-in-out hover:brightness-105'>
      <Image 
        src="/dan.jpg"
        alt="Dan Having a Good Time"
        layout='fill'
        className='rounded-full'
      />
    </div>
  );
}