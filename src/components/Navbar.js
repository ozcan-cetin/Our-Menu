import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  // const currentUser = {displayName:"özcan çetin"};
  const currentUser = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>

          <div className="d-flex text-white align-items-center">
          {
            currentUser
            ?
            (
              <>
              <h5 className="mb-0 text-capitalize">{currentUser.displayName}</h5>
              <button className="btn bg-info ms-2">Logout</button>
            </> 
            )
           :
           (
            <>
           <button className="btn bg-info ms-2" onClick={()=>navigate("/login")}>Login</button>
           <button className="btn bg-info ms-2" onClick={()=>navigate("/register")}>Register</button>
            </>
           )
          }
          </div>
        </div>
      </nav>
    </div>




    // <div className="bg-light navbarContainer">
    //   <Navbar bg="light" variant="light">
    //     <Container>
    //       {/* <Navbar.Brand href="#home" >Navbar</Navbar.Brand> */}
    //       <Nav className="mx-auto">
    //         <NavLink to="/home" style={{ margin: "1rem" }}>
    //           Home
    //         </NavLink>
    //         <NavLink to="/register" style={{ margin: "1rem" }}>
    //           Register
    //         </NavLink>
    //         <NavLink to="/login" style={{ margin: "1rem" }}>
    //           Login
    //         </NavLink>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
  );
};

export default NavBar;
