import React,{ Component } from "react";

export default class Counter extends Component{

    constructor(props){

super(props)
this.inc= this.inc.bind(this)
this.state={
    count:0
}
    }

componentDidMount(){
    console.log('component is ready')
}
componentDidUpdate(){
    console.log('component updated')
}



inc(){
    
    this.setState((prevState) =>{
        return {
            count: prevState.count+1
        }
    })
    console.log(this.state)
    }
    dec(){
        alert("dec is invoked")
    }
    reset(){
        alert("reset is invoked")
    }
    render(){
        return(
            <div className="Counter">
                Count : {this.state.count}
                <button onClick={this.inc}>Increment</button>
                <br/>
                <button onClick={this.dec}>Decrement</button>
                <br/>
                <button onClick={this.reset}>Reset</button>
                <br/>
            </div>
        );
    }

}