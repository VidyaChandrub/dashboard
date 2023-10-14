import React from "react";
import HomeRightbar from "../../Components/HomeRightbar/HomeRightbar";
import Sidebar from "../../Components/Sidebar";
import "./Home.css"

function Home(){
    return(
        <div className="mainHomeContainer">
            <Sidebar/>
            <HomeRightbar/>
        </div>
    )
}

export default Home