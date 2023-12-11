import Image from 'next/image';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

const MoviePage = async ({ params }) => {
    const movieId = params.id;
    //get movie
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json()

    //get trailer
    const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`);
    const trailerData = await trailerRes.json();
    const youtubeTrailer = trailerData.results.find(video => video.site === "YouTube" && video.type === "Trailer");

    //get cast
    const castRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}`);
    const castData = await castRes.json();

    const castMembers = castData.cast.slice(0, 5);
    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6'>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} alt='movie image' className='rounded-lg' style={{ maxWidth: '100%', height: '100%' }}></Image>
                <div className='p-2'>
                    <h1 className="text-2xl mb-3 font-semibold">{movie.title || movie.name}</h1>
                    <p className='mb-3 text-lg'>
                        <span className='font-semibold'>Release Date:</span> {movie.release_date}
                    </p>
                    <p className='mb-3 text-lg'>
                        <span className='font-semibold mr-2'>Rating:</span>
                        {movie.vote_average} <FavoriteIcon />
                    </p>
                    <p className='mb-3 text-lg'>
                        <span className='font-semibold mr-1'>Overview:</span> {movie.overview}
                    </p>
                    <p className='mb-3 text-lg'>
                    <span className='font-semibold mr-1'>Cast Members:</span>{castMembers.map(member => (
                        <span key={member.cast_id}> 
                            {member.name},{" "}
                        </span>
                    ))}
                    </p>
                    {youtubeTrailer && (
                        <a href={`https://www.youtube.com/watch?v=${youtubeTrailer.key}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            Watch Trailer on YouTube
                        </a>
                    )}
                </div>

            </div>

        </div>
    )
}

export default MoviePage