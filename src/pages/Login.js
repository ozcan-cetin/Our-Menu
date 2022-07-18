import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const addUser = (e) =>{
        e.preventDefault();
        sessionStorage.setItem("email", email)
        navigate(-1)
    }

  return (
    <Form onSubmit={addUser}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Login