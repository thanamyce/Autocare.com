//import logo from './logo.svg';
import './App.css';
import Nav from './navbar';
import Home from './home';

import Contact from './contact';
import Profile from './profile';
import Login from './login';
import Sign from './sign';
import About from './about';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BasicService from './BasicService';
import PremiumService from './PremiumService';
import UltimateService from './UltimateService';
import { AuthProvider } from './auth';
import User from './user'

//import Carousel from './carousel'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <><AuthProvider>
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
         
          <Route path="/profile" element={<Profile/>} />
          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login.js" element={<Login/>} />
          <Route path="/sign.js" element={<Sign/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/BasicService.js" element={<BasicService/>} />
          <Route path="/PremiumService.js" element={<PremiumService/>} />
          <Route path="/UltimateService.js" element={<UltimateService/>} />
          
    </Routes>
    
    </Router>
    </AuthProvider>
    
    </>
  );
}

export default App;
