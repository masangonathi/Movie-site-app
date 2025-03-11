import Results from '@/components/Results';
import React from 'react'

interface SearchPageProps {
  params: {
    searchTerm: string;
  };
}

export default async function SearchPage({params}: SearchPageProps) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env
.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
);
    const data = await res.json();
    const results = data.results;

  return <div>
    {
        results && results.length === (
            <h1 className='text-center pt-6'>No results found</h1>

        )
    }
    {results && <Results result={results} />}
  </div>
}
