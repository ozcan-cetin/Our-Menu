import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetail from "../pages/MovieDetail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = ({ item, getDetailMovies }) => {
  // const [movieId, setMovieId] = useState("")
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="singleMovie" onClick={()=>getDetailMovies(item.id)}>
      <Card style={{ width: "20rem" , height:"min-content"}} className="bg-info">
        <div className="movieImage">
        <Card.Img variant="top" src={IMG_API + item.poster_path} />
          <div className="movieInfo">
            <h1>Overview</h1>
            <Card.Text>{item.overview}</Card.Text>
          </div>
        </div>
        <Card.Body>
          <div className="cardTitle">
            <Card.Title>{item.title}</Card.Title>
          </div>
          

          {/* <Button variant="primary">View More</Button> */}
        </Card.Body>
      </Card>

      {/* <MovieDetail /> */}
    </div>
  );
};

export default Main;
