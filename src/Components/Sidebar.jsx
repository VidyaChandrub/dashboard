import React from "react";
import "./Sidebar.css"
import dashboard from "./Icons/dashboard.png";
import help from "./Icons/help.png";
import customer from "./Icons/customer.png";
import income from "./Icons/income.png";
import product from "./Icons/product.png";
import promote from "./Icons/promote.png"


function Sidebar(){
    return(
        <div className="mainSidebarcontainer">
            <div>
                <ul className="ulContainer">
                <h4 className="menu">Dashboard</h4>
                    <li className='liContainer'>
                        <img src={`${dashboard}`} className="sidebaricons" alt="" />
                        <p className="itemsName">Dashboard</p>
                    </li>
                    <li className="liContainer">
                        <img src={`${product}`} className="sidebaricons" alt="" />
                        <p className="itemsName">Products</p>
                    </li>
                    <li className="liContainer">
                        <img src={`${customer}`}  className="sidebaricons" alt="" />
                        <p className="itemsName">Customers</p>
                    </li>
                    <li className="liContainer">
                        <img src={`${income}`} className="sidebaricons" alt="" />
                        <p className="itemsName">Income</p>
                    </li>
                    <li className="liContainer">
                        <img src={`${promote}`} className="sidebaricons" alt="" />
                        <p className="itemsName">Promote</p>
                    </li>
                    <li className="liContainer">
                        <img src={`${help}`} className="sidebaricons" alt="" />
                        <p className="itemsName">Help</p>
                    </li>
                </ul>
        
                    <div className="scheduleContainer">
                    <ul>
                    <li className="liContainer">
                        <img src={`${help}`} className="sidebaricons" alt="" />
                        <ul>
                        <li className="liContainer">Vidya</li>
                        <li className="liContainer">worldofvidya</li>
                        </ul>
                    </li>
                    </ul>
                    
                    </div>
                
            </div>
        </div>
        
    )
}

export default Sidebar