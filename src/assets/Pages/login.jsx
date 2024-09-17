import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from '../Components/Navbar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/dashboard";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="container mt-5 w-25">
        <h3 className="text-center mb-2">Login</h3>

        <div data-mdb-input-init className="form-outline mb-4">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
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
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>

        <p className="forgot-password text-right">
          New user? <Link to="/register">Register Here</Link> {/* Replaced <a> with <Link> */}
        </p>
      </form>
    </>
  );
}

export default Login;
