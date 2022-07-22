import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({movie}) => {
  const { poster_path, title, overview, vote_average, id } = movie;
  return (
    <div>
      <div>
        <img src={poster_path ? IMG_API + poster_path : defaultImage} alt={title} />
      </div>
    </div>
  )
}

export default MovieCard