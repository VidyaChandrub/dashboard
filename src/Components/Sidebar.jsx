import React from "react";
import "./Sidebar.css"
import dashboard from "./Icons/dash.jpg";
import help from "./Icons/help.png";
import customer from "./Icons/cust.png";
import income from "./Icons/income.png";
import product from "./Icons/product.png";
import promote from "./Icons/promotecopy.png"
import dashboard1 from "./Icons/dashboard1.png"
import profile from "./Icons/profile.png"


function Sidebar(){
    return(
        <div className="mainSidebarcontainer">
            <div>
                <ul className="ulContainer">
                <h4 className="menu"><img src={dashboard1}  width={33} height={33}/> <span className="menuText">Dashboard</span></h4>
                    <li className='liContainer border'>
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
                    <li className="profile">
                        <img src={`${profile}`} className="profileicon" alt="" />
                        
                        <p className="profileText">Evan<br/>Project Manager</p>
                        
                    </li>
                    </ul>
                    
                    </div>
                
            </div>
        </div>
        
    )
}

export default Sidebar