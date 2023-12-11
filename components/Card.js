import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({result}) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200'>
    <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path||result.poster_path}`} width={800} height={400} alt='movie image' className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200'  style={{maxWidth:'100%',height:'auto' }}></Image>
    </Link>
    <div className='p-2 flex justify-center' >
        <h2 className="text-lg font-semibold">{result.title||result.name}</h2>
    </div>
    </div>
  )
}

export default Card