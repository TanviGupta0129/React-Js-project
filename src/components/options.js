import React,{ Component } from "react"
import Option from "./option"

const Options =(props)=> {

return (
<div>
    <button onClick={props.hdo}>remove all</button>
    {
  props.optiondata.map((data) => <Option key= {data} optionText={data} hd={props.hd}/>)
    }
</div>

        )
    }

export default Options