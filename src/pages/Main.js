import React from 'react'
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main
