import React, {useContext, useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard"
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
import { toastWarnNotify } from '../helpers/ToastNotify';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
// console.log(API_KEY)
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {currentUser} = useContext(AuthContext)
    
  
const getMovies = async(API) => {
    setLoading(true)
    try {
        const {data} = await axios.get(API)
        setMovies(data.results)
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
}

useEffect(() => {
    getMovies(FEATURED_API)
    }, [])

const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
        getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
        toastWarnNotify('Please log in to search a movie');
        // alert("Please log in to search a movie");
    } else {
        toastWarnNotify('Please enter a text');
        // alert("Please enter a text");
    }
    };    
console.log(movies);
    return (
        <>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Search a movie..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="d-flex justify-content-center flex-wrap">
          {loading ? (
            <div className="spinner-border text-primary m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </div>
      </>
  )
}

export default Main
