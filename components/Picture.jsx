import React from 'react';
import Image from 'next/image';

export default function Picture() {
  return (
    <div className='w-36 h-36 relative'>
      <Image 
        src="/dan.jpg"
        alt="Dan Having a Good Time"
        layout='fill'
        className='rounded-full'
      />
    </div>
  );
}