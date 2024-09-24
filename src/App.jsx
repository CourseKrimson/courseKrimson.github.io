import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set user when logged in
    });

    return () => unsubscribe(); // Clean up on unmount
  }, []);
  // Handle redirects from GitHub Pages 404 fallback
  // function RedirectWithState() {
  //   const location = useLocation();
  //   useEffect(() => {
  //     const redirectPath = new URLSearchParams(location.search).get('redirect');
  //     if (redirectPath) {
  //       window.history.replaceState({}, '', redirectPath);
  //     }
  //   }, [location]);
  //   return null;
  // }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* <RedirectWithState /> */}
      <div className="App">
        {/* Pass user status as loggedin prop to Navbar */}
        <Navbar loggedin={user ? 'true' : 'false'} />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              {/* Redirect to profile if the user is logged in */}
              <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/profile"
                element={user ? <Profile /> : <Navigate to="/login" />}
              />
              <Route path="/courses/:courseName" element={<CourseDetail />} />
              <Route path="/" element={<Dashboard courses={courses} />} />
              <Route path="/search" element={<SearchResults />} />

            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
