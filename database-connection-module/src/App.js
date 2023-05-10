import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieLista] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://swapi.dev/api/films/");
      
      if (!response.ok) {
        throw new Error('Deu ruim :/');
      }
      
      const data = await response.json();

      const transformedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovieLista(transformedData);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movieList.length > 0 && <MoviesList movies={movieList} />}
        {!isLoading && movieList.length === 0 && !error && <p>No movies fetched yet.</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {isLoading && <p>Loading!</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
