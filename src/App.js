import React from "react";
import Button from "./Button";

// export default function App(){
//   return(
//     <>
//     <h1 className="header">Hello Congrats...</h1>
//     <Button />
//     </>
//   )
// }
const ChildComponent = () => {
    return(
      <h1>I am Child</h1>
    )
}
export default class App extends React.Component{
  render(){
    return(
      <>
      <h1>Hi, I am Parent</h1>
      <ChildComponent />
      </>
    )
  }
    
  
}


// import { ReactDOM } from "react";

// const JSX = <>
// <h1>Hello World</h1>
// </>

// ReactDOM.render(JSX, document.getElementById('root'));



