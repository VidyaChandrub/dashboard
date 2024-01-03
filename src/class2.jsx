import React from "react";
import Class1 from "./Class1"

class Class2 extends React.Component{
    render(props){
        return(
            <>
            <p>{this.props.name}</p>
            <Class1 />
            </>
        )
    }
}

export default Class2;