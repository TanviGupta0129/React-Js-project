import React,{ Component } from "react"


const Option =(props) => {

     return (
<div>
    {props.optionText}
    <button onClick={(e) =>{
       props.hd(props.optionText)
    }}>delete</button>
</div>

        )
    }
export default Option
