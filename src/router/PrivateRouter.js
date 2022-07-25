import { useContext } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
    // const user = sessionStorage.getItem('email');
    const currentUser = useContext(AuthContext)
    console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/login"/> ;
}

export default PrivateRouter