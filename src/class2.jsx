import React from "react";
import Class1 from "./Class1.jsx";

class Class2 extends React.Component{
    render(props){
        return(
            <>
            <p>{this.props.name}</p>
            </>
        )
    }
}

export default Class2();