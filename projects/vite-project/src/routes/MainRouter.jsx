import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Clases from '../pages/Clases';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';

const MainRouter =() =>{
    return(
        <Router>
            <Navbar/>
            <Banner/>
            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path= "/nosotros" element ={<Nosotros/>}/>
                <Route path= "/clases" element ={<Clases/>}/>
                <Route path= "/contacto" element ={<Contact/>}/>


            </Routes>
        </Router>
    );
};

export default MainRouter;
