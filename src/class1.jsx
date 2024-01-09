import React from "react";

class Class1 extends React.Component{
    constructor(props){
        super(props);
        this.state =
            {
                name:"Vidya"
            };
    }

    handleClick(){
        this.setState({
            name:"Vidya Chandru!",
            college:"Oxford"
        })
    };
    render(){
        return(
            <>
            <div name="Vidya"></div>
            <h1>{this.state.name}</h1>
            <hr />
            <button onClick={this.handleClick.bind(this)}>Click Me!</button>
            <h1>{this.state.name}</h1>
            <h1></h1>
            </>
        )
    }
}

export default Class1;