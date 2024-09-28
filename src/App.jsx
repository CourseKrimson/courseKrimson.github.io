import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
import './App.css';
import './index.css';
import SearchResults from './components/search';
import Login from './components/login';
import SignUp from './components/register';
import Home from './components/home';
import Profile from './components/profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './components/firebase';
import Navbar from './components/Navbar';
import CourseDetail from './components/CourseDetail';
import Dashboard from './components/dashboard';
import courses from './components/courseData';
import Footer from './components/Footer';

// Configure NProgress settings
NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 });

const App = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    NProgress.start();
    
    const timeout = setTimeout(() => {
      NProgress.done(); 
    }, 200); 

    return () => {
      clearTimeout(timeout); 
      NProgress.done();
    };
  }, [location]);

  // Firebase authentication check
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Navbar loggedin={user ? 'true' : 'false'} />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            {/* Redirect to profile if user is logged in */}
            <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseName" element={<CourseDetail />} />
            <Route path="/dashboard" element={<Dashboard courses={courses} />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default WrappedApp;

