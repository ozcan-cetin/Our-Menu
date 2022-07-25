import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({item}) => {
  const {id} = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [videoKey, setVideoKey] = useState();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  // const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  useEffect(() => {
    axios.get(movieDetailBaseUrl)
    .then((res)=>setMovieDetails(res.data))
    .catch((err)=>console.log(err));

    axios.get(videoUrl)
    .then((res)=>setVideoKey(res.data.results[0].key))
    .catch((err)=>console.log(err))
  }, [movieDetailBaseUrl, videoUrl])
  

  return (
    <div className='container py-5'>
      <h1 className='text-center'>{title}</h1>
      {videoKey && }
    </div>
  )
}

export default MovieDetail