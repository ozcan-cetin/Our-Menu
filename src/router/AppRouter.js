import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail"
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="movieDetail" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
