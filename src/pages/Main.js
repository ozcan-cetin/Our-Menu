import React, {useContext, useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard"
import axios from "axios";
import { AuthContext } from '../context/AuthContext';

const API_KEY = process.env.REACT_APP_TMDB_KEY
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

    
console.log(movies);
    return (
    <div className='movieContainer'>
            {loading ? (
                <div>
                <span>Loading...</span>
                </div>
            ) : (
                movies.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)
            )
        }
    </div>
  )
}

export default Main
