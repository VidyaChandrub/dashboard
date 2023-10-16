import React from "react";
import "./HomeRightbar.css"
import Navbar from "../Navbar.jsx";
import dollarpng from "../Icons/dollarpng.png";
import order from "../Icons/order.png";
import balance from "../Icons/balance.png";
import sale from "../Icons/sale.png";

function HomeRightbar(){
    return(
        <div className="mainHomerightbar">
            <Navbar/>
            <div>
                <div className="ItemContainer">
                    <div className="ItemContainer1">
                        <div>
                            <img  className="Dollar" src={`${dollarpng}`} />
                        </div>
                        <div>
                            <p className="taskProgress">Earning</p>
                            <p className="taskcounter"> $198k</p>
                            <p className="month1"><span className="Green">  <span>&#8593;</span>37.8%</span> this month</p>
                        </div>
                        
                    </div>
                    <div className="ItemContainer1">
                        <div>
                            <img  className="Ordernote" src={`${order}`} />
                        </div>
                    <div>
                            <p className="taskProgress">Orders</p>
                            <p className="taskcounter">$2.4k</p>
                            <p className="month1"><span className="Red"><span>&#8595;</span>2%</span> this month</p>
                        </div>
                    </div>
                    <div className="ItemContainer1">
                        <div>
                            <img  className="Balance" src={`${balance}`} />
                        </div>
                    <div>
                            <p className="taskProgress">Balance</p>
                            <p className="taskcounter">$2.4k</p>
                            <p className="month1"><span className="Red"><span>&#8595;</span>2%</span> this month</p>
                        </div>
                    </div>
                    <div className="ItemContainer1">
                        <div>
                            <img  className="sale" src={`${sale}`} />
                        </div>
                    <div>
                            <p className="taskProgress">Total Sales</p>
                            <p className="taskcounter">$89k</p>
                            <p className="month1"><span className="Green"><span>&#8593;</span>11%</span> this week</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HomeRightbar