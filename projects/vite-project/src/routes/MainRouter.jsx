import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../components/pages/home';
import Nosotros from '../components/pages/Nosotros';
import Clases from '../components/pages/Clases';
import Contact from '../components/pages/Contact';
import Navbar from '../components/Navbar/Navbar';

const MainRouter =() =>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path= "/" element ={<Nosotros/>}/>
                <Route path= "/" element ={<Clases/>}/>
                <Route path= "/" element ={<Contact/>}/>


            </Routes>
        </Router>
    );
};

export default MainRouter;
