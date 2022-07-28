import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail"
// import PrivateRouter from "./PrivateRouter";
import Main from "../pages/Main";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
  //! ayrı sayfada yapınca neden çalışşmadı?*****************************
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace/>;
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
