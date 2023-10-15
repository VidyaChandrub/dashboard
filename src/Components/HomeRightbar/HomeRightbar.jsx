import React from "react";
import "./HomeRightbar.css"
import Navbar from "../Navbar.jsx";

function HomeRightbar(){
    return(
        <div className="mainHomerightbar">
            <Navbar/>
            <div>
                <div className="ItemContainer">
                    <div className="ItemContainer1">
                        <div>
                            <p className="taskProgress">Earning</p>
                            <p className="taskcounter">$198k</p>
                            <p className="month1">|37.8% of this month</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="ItemContainer1">2</div>
                    <div className="ItemContainer1">3</div>
                    <div className="ItemContainer1">4</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HomeRightbar