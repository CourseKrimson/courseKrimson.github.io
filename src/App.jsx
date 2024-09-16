import './App.css';
import Footer from './assets/Components/Footer';
import Navbar from './assets/Components/Navbar';
import Dashboard from './assets/Pages/Dashboard';

function App() {


  return (
    <>
    <Navbar></Navbar>
      <div className="container py-4 px-3 mx-auto">
        <h1>Welcome to Open Courses!</h1>
        
        <Dashboard></Dashboard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
