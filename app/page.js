import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
export default async function page({ searchParams }) {
  const getMoviesUrl = (genre) => {
    if (genre === "fetchTopRated") {
      return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    } else if (genre === "fetchUpcoming") {
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      return `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
    }
  };

  // Use the function to get the correct URL
  const url = getMoviesUrl(searchParams.genre);
  
  const res = await fetch(url, { next: { revalidate: 100000 } });
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = await res.json();
  const results = data.results;
  return (
    <>
      <div>
        <Results results={results}/>
      </div>
    </>

  )
}
