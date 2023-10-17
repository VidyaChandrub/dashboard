import React from "react";
import "./HomeRightbar.css"
import Navbar from "../Navbar.jsx";
import dollarpng from "../Icons/dollarpng.png";
import order from "../Icons/order.png";
import balance from "../Icons/balance.png";
import sale from "../Icons/sale.png";
import search from "../Icons/search.png";
import abstract3d from "../Icons/abstract3d.jpg";
import sharpill from "../Icons/sharpill.png";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 1000,
    amt: 1400,
    fill: "lavender"
  },
  {
    name: 'Feb',
    uv: 868,
    amt: 1506,
    fill: "lavender"
  },
  {
    name: 'Mar',
    uv: 1397,
    amt: 989,
    fill: "lavender"
  },
  {
    name: 'Apr',
    uv: 1100,
    amt: 1228,
    fill: "lavender"
  },
  {
    name: 'May',
    uv: 1200,
    amt: 1100,
    fill: "lavender"
  },
  {
    name: 'Jun',
    uv: 600,
    amt: 1700,
    fill: "lavender"
  },
  {
    name: 'Jul',
    uv: 1200,
    amt: 1700,
    fill: "lavender"
  },
  {
    name: 'Aug',
    uv: 1400,
    amt: 1700,
    fill: "Blue"
  },
  {
    name: 'Sep',
    uv: 1250,
    amt: 1700,
    fill: "lavender"
  },
  {
    name: 'Oct',
    uv: 1100,
    amt: 1700,
    fill: "lavender"
  },
  {
    name: 'Nov',
    uv: 900,
    amt: 1700,
    fill: "lavender"
  },
  {
    name: 'Dec',
    uv: 1100,
    amt: 1700,
    fill: "lavender"
  },
];



const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["rgb(235, 49, 194)", "Lavender", "rgba(214, 118, 238, 0.87)", "rgba(125, 66, 139, 0.87)"];

function HomeRightbar() {
  return (
    <div className="mainHomerightbar">
      <Navbar />
      <div>
        <div className="ItemContainer">
          <div className="ItemContainer1">
            <div>
              <img className="Dollar" src={`${dollarpng}`} />
            </div>
            <div>
              <p className="taskProgress">Earning</p>
              <p className="taskcounter"> $198k</p>
              <p className="month1"><span className="Green">  <span>&#8593;</span>37.8%</span> this month</p>
            </div>

          </div>
          <div className="ItemContainer1">
            <div>
              <img className="Ordernote" src={`${order}`} />
            </div>
            <div>
              <p className="taskProgress">Orders</p>
              <p className="taskcounter">$2.4k</p>
              <p className="month1"><span className="Red"><span>&#8595;</span>2%</span> this month</p>
            </div>
          </div>
          <div className="ItemContainer1">
            <div>
              <img className="Balance" src={`${balance}`} />
            </div>
            <div>
              <p className="taskProgress">Balance</p>
              <p className="taskcounter">$2.4k</p>
              <p className="month1"><span className="Red"><span>&#8595;</span>2%</span> this month</p>
            </div>
          </div>
          <div className="ItemContainer1">
            <div>
              <img className="sale" src={`${sale}`} />
            </div>
            <div>
              <p className="taskProgress">Total Sales</p>
              <p className="taskcounter">$89k</p>
              <p className="month1"><span className="Green"><span>&#8593;</span>11%</span> this week</p>
            </div>
          </div>
        </div>
        {/*<div className="maincharts">
                    <div className="barchart">
                    <BarChart width={600} height={250} data={data}>
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                    </div>
    </div>*/}
        <div className="MainTascontainer">
          <div className="tasCharts">
            <p className="taskContainer">Overview</p>
            <p className="TastText">Monthly Earning</p>
            <ResponsiveContainer width="100%" height="78%">
              <ComposedChart
                width={500}
                height={100}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                {/* <YAxis />*/}
                <Tooltip />
                {/*<Legend />*/}
                <Bar dataKey="uv" barSize={20} fill="fill" />
                {/*<Line type="monotone" dataKey="uv" stroke="#ff7300" />*/}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="Monthlyearring">
            <p className="taskContainer">Customers</p>
            <p className="TastText">Customers that buy products</p>
            {/* <p className="six">65%</p>
            <p className="newCus">Total New Customers</p> */}
            <PieChart width={300} height={200}>
              <Pie
                data={data1}
                cx={150}
                cy={90}
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="thirdcontainer">
          <div className="headline">
            <div className="Sellcontainer">
              <p className="Sellname">Product Sell</p>
            </div>
            <div className="search2">
              <img src={`${search}`} className="searchIcon" alt="" />
              <input type="search" className="sInput" placeholder="Search" />
            </div>
            <div>
              <p className="lastdays">Last 30 Days</p>
            </div>
          </div>
          <div>
            <table width={1000}>
              <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
              </tr>
              <tr>
                <td><img src={abstract3d} width={80} height={50}/> Abstract 3D <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, natus.</td>
                <td>3</td>
                <td>2</td>
                <td>6</td>
              </tr>
              <tr>
                <td><img src={sharpill} width={80} height={50}/></td>
                <td>3</td>
                <td>2</td>
                <td>6</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRightbar