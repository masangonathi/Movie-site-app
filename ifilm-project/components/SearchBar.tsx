'use client';

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/search/${search}`);
    };
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto'
        onSubmit={handleSubmit}
        >
        <input 
            type="text" 
            placeholder='Search keywords...' 
            className='w-full h-14 rounded-md placeholder-gray-500
         outline-none bg-transparent flex-1'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
         />
        <button  
            className='bg-blue-500 p-2 disabled:bg-gray-300 text-white rounded-md'
            disabled={search === ''}>
            Search
        </button>        
    </form>
  );
}
