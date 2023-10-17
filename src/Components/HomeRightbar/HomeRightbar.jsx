import React from "react";
import "./HomeRightbar.css"
import Navbar from "../Navbar.jsx";
import dollarpng from "../Icons/dollarpng.png";
import order from "../Icons/order.png";
import balance from "../Icons/balance.png";
import sale from "../Icons/sale.png";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 590,
    amt: 1400,
    fill:"lavender"
  },
  {
    name: 'Feb',
    uv: 868,
    amt: 1506,
    fill:"lavender"
  },
  {
    name: 'Mar',
    uv: 1397,
    amt: 989,
    fill:"lavender"
  },
  {
    name: 'Apr',
    uv: 1480,
    amt: 1228,
    fill:"lavender"
  },
  {
    name: 'May',
    uv: 1520,
    amt: 1100,
    fill:"lavender"
  },
  {
    name: 'Jun',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
  },
  {
    name: 'Jul',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
  },
  {
    name: 'Aug',
    uv: 1400,
    amt: 1700,
    fill:"Blue"
  },
  {
    name: 'Sep',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
  },
  {
    name: 'Oct',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
  },
  {
    name: 'Nov',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
  },
  {
    name: 'Dec',
    uv: 1400,
    amt: 1700,
    fill:"lavender"
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
            <ResponsiveContainer width="100%" height="75%">
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
                outerRadius={80}
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
      </div>
    </div>
  )
}

export default HomeRightbar