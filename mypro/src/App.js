//import logo from './logo.svg';
import './App.css';
import Nav from './navbar';
import Home from './home';
import Contact from './contact';
import Profile from './profile';
import Login from './login';
import Sign from './sign';
import About from './about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
         
          <Route path="/profile" element={<Profile/>} />
          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login.js" element={<Login/>} />
          <Route path="/sign.js" element={<Sign/>} />
          
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
