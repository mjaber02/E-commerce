import React, { useState } from 'react';
import "./styles/App.css";
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import TopHeader from './maincomponents/topHeader';
import Navbar from './maincomponents/navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ShoppingCart from './Pages/ShoppingCart';
import WhishList from './Pages/WhishList';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';

function App() {
  const [sidebar,setSidebar]=useState(false);

  return (
    <div className="main">
       <Router>
       <TopHeader/>
       <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/about" element={<About/>} />
          <Route path = "/contact" element={<Contact/>}/>
          <Route path = "/signup" element={<SignUp/>}/>
          <Route path = "/shoppingcart" element={<ShoppingCart/>}/>
          <Route path = "/whishlist" element={<WhishList/>}/>
          <Route path="/login" element={<LogIn/>}/>

           
          <Route path="*" element={<h1> Page not found</h1>}/>
          
        </Routes>

      </Router>

  
     
    </div>
  );
}

export default App;
