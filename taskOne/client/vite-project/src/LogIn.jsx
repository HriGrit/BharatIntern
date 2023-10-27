import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post('http://localhost:1313/api/v1/users/login', formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Form className="border p-4" style={{ width: '60%' }}>
          <Form.Group className="mb-3">
            <Form.Label className='text-2xl'>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handelChange} />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='text-2xl'>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handelChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check className='text-xl' type="checkbox" label="Remember me" />
          </Form.Group>
          <div className='w-full d-flex justify-content-center align-items-center'>
            <Button className="text-2xl w-[33%]" variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <Form.Group className='mt-4 text-center'>
            <Form.Label className='text-2xl'>
              Dont have an account?
              <Link className='ml-2' to="/">
                Sign Up
              </Link>
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
