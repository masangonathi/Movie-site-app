import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({result}) {
  return (
    <div>
      <Link href={`/moive/${result.id}`}>
          <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        width={500}
        height={300}
        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' alt={''}
          ></Image>
          <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result.overview}</p>
            <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
          </div>
      </Link>
    </div>
  )
}
