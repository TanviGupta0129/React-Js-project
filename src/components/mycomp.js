import React,{ Component } from "react"
import Header from "./header"
import Footer from "./footer"
import Options from "./options"
import Action from "./action"
import AddOption from "./addoption"
 
export default class MyComp extends Component {
constructor(props){
    super(props)
    this.hanDeleteOptions=this.hanDeleteOptions.bind(this)
    this.handleone= this.handleone.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.state={
 options: []
    }
}
hanDeleteOptions() {
    this.setState(()=>{
        return {
            options:[]
        }
    })

}
handleone(data){
    this.setState((prevState) =>{
        return {
            options:prevState.options.filter((option) => data !==option)
        }
    })
}
componentDidMount(){
    
}
componentDidUpdate(){
    const json =JSON.stringify(this.state.options)
    localStorage.setItem('opt',json)
}

handleAdd(option) {
    if(!option) {
        return ' enter valid value to add'
    }else if (this.state.options.indexOf(option) >-1){
        return 'this data already exist'
    } 
    
     this.setState((prevState) =>{
         return {
             options: prevState.options.concat(option)
         }
     })   
}



render(){
       
        return (
<div>
    <Header data1="this data for header from Mycomp"/>
    <p>welcome to my child component</p>
    <Options optiondata={this.state.options}
     hdo={this.hanDeleteOptions}
     hd={this.handleone}
     />
     <Action hasOption={this.state.options.length >0}/>

    
    <AddOption hao={this.handleAdd}/>
<Footer/>
</div>

        )
    }

}