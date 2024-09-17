// import { useState } from 'react';
// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './assets/Pages/login';
import SignUp from './assets/Pages/register';
import Dashboard from './assets/Pages/Dashboard'
// import auth from './assets/Pages/firebase'

function App() {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // });
  return (
    <Router>
      <div className='App'>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            {/* <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} /> */}
            <Route path='/' element={<Login/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            {/* <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} /> */}
          </Routes>
          <ToastContainer />
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
