import React from "react";
import "./Navbar.css";
import hellopic from './Icons/hellopic.png';
import search from './Icons/search.png'

function Navbar(){
    return(
        <div className="mainNavbarContainer">
            <div className="helloContainer">
                <h2 className="dashtext">Hello Shahrukk <img src={`${hellopic}`} className="hiIcon" alt=""/> ,</h2>
            </div>
            <div className="searchIconContainer">
                <img src={`${search}`} className="searchIcon" alt=""/>
                <input type="search" className="searchInput" placeholder="Search" />
            </div> 
        </div>
    )
}

export default Navbar