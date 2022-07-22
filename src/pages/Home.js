import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import MovieDetail from "../pages/MovieDetail";

const Home = () => {
  const [query, setQuery] = useState("")
  const [movieId, setMovieId] = useState("")
  const API_KEY = `15de159ec537451c6675c30ffa240691`;
  const general = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const searchMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=${query}`;
  const detailMovie = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const [url, setUrl] = useState(general)
  // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  // const url = "https://api.themoviedb.org/3/movie/550?api_key=15de159ec537451c6675c30ffa240691";

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  const getChooseMovies = (e) => {
    e.preventDefault();
    setUrl(searchMovie)
    getMovies()
  };

  // const getDetailMovies = (id) => {
  //   setMovies(movies.filter((item)=>{
  //     return(
  //       item.id === id && <MovieDetail item={item}/>
  //     )
  //   }))
  // }

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(movies);
  return (
    <div className="home">
      <form onSubmit={getChooseMovies}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a movie"
          required
        />
        <button type="submit">Search</button>
      </form>
      {/* <div className="movieContainer">
        {movies?.map((item) => {
          return <Main key={item.id} item={item} getDetailMovies={getDetailMovies}/>;
        })}
      </div> */}
    </div>
  );
};

export default Home;
