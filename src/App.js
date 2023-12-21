import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar"


function App() {
  return(
    <div className='App'>
        <h1>Hello World !!</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/shop"></Route>
            <Route path="/cart"></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
