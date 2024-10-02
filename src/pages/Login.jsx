import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '@/services/firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in Successfully');
      window.location.href = '/profile';
      toast.success('User logged in Successfully', {
        position: 'top-center',
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5 w-25">
        <h3>Login</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn ">
            Login <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
        <p className="forgot-password text-right">
          New user? <Link to="/register">Register Here</Link>{' '}
          {/* Use Link here */}
        </p>
        {/* <SignInwithGoogle/> */}
      </form>
    </>
  );
}

export default Login;
