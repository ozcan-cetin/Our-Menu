import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieDetail from "../pages/MovieDetail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = ({ item }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="singleMovie">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={IMG_API + item.poster_path} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <div className="movieInfo">
            <Card.Text>{item.overview}</Card.Text>
          </div>

          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>

      {/* <MovieDetail /> */}
    </div>
  );
};

export default Main;
