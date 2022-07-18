import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () => {
    const user = sessionStorage.getItem('email');

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter