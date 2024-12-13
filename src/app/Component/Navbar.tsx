"use client";
import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-900 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-4xl font-extrabold'>
            <a href='#!'>Clerk</a>
          </h1>
        </div>
        <div className='flex items-center space-x-8'>
          <ul className='flex space-x-6'>
            <li><Link href="/" className='hover:text-blue-300 transition'>Home</Link></li>
            <li><Link href="/about" className='hover:text-blue-300 transition'>About</Link></li>
            <li><Link href="/contact" className='hover:text-blue-300 transition'>Contact</Link></li>
          </ul>
          <ul className='ml-4'>
            <SignInButton>
              <button className='bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition duration-200 ease-in-out'>
                Sign In
              </button>
            </SignInButton>

          
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
