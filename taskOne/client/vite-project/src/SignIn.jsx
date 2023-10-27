import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import authContext from './context/AuthContext';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAlphanumeric, setPasswordAlphanumeric] = useState(false);

  const { loginUserAction } = useContext(authContext);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      loginUserAction(formData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(authContext);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Form className="border p-4" style={{ width: '60%' }}>
          <Form.Group className="mb-3">
            <Form.Label className='text-2xl'>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" onChange={handelChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='text-2xl'>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handelChange} />
            <Form.Text className="text-muted">We'll not share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label className='text-2xl'>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handelChange} />
          </Form.Group>
          {passwordError && <Form.Text className="text-danger">Password must be at least 8 characters long.</Form.Text>}
          {passwordAlphanumeric && <Form.Text className="text-danger mb-3">Password must be alphanumeric.</Form.Text>}
          <Form.Group className='mb-3'>
            <Form.Label className='text-2xl'>Age</Form.Label>
            <Form.Control type='number' name='age' placeholder='Age' onChange={handelChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check className='text-xl' type="checkbox" label="Remember me" />
          </Form.Group>
          <div className='w-full d-flex justify-content-center align-items-center'>
            <Button className="text-2xl w-[33%]" variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <Form.Group className='mt-4 text-right'>
            <Form.Label className='text-2xl'>
              Already have an account?
              <Link to="/login">
                Login
              </Link>
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
