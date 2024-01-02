import React from "react";
import PropTypes from "prop-types"
import Class2 from "./Class2";

import Button from "./Button";

// export default function App(){
//   return(
//     <>
//     <h1 className="header">Hello Congrats...</h1>
//     <Button />
//     </>
//   )
// }
const ChildComponent = (props) => {
    return(
      <>
      <h1>I am Child {props.wish}</h1>
      <p>Current date : {props.date}</p>
      <p>{props.names}</p>
      </>
      
    )
}
export default class App extends React.Component{
  render(){
    return(
      // <>
      // <h1>Hi, I am Parent</h1>
      // <ChildComponent date={Date()}/>
      // {/* passing array as props */}
      // <ChildComponent names={["Vidya", "bharu","sandhya"]}/> 
      // <ChildComponent names={["Vidya", "bharu","sandhya","padma","chandru"]}/> 

      // {/* Overring default prop */}
      // <ChildComponent wish={["vidya"]} /> 

      // </>

      <>
      <Class2 />
      </>
    )
  }
  
}
// passing default props
ChildComponent.defaultProps = {
  wish : "good morning"
}

// Setting proptypes to ensure proper type of props is passed

ChildComponent.propTypes = {wish: PropTypes.number.isRequired}


























































// import { ReactDOM } from "react";

// const JSX = <>
// <h1>Hello World</h1>
// </>

// ReactDOM.render(JSX, document.getElementById('root'));



