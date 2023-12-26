import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {Test} from "./pages/Test.jsx"


function App() {
  return(
    <div className='App'>
        {/* <h1>Hello World !!</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/shop"></Route>
            <Route path="/cart"></Route>
          </Routes>
        </BrowserRouter> */}
        <Test />
    </div>
  )
}

export default App;
