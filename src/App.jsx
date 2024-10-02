import { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SearchResults from './pages/Search';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './services/firebase';
import Navbar from './components/Navbar';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import courses from './data/courseData';
import Footer from './components/Footer';
import Contributors from './pages/GithubFetch';

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
        <Navbar loggedin={user ? 'true' : 'false'} />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
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
              <Route path="/contributors" element={<Contributors />}></Route>
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
