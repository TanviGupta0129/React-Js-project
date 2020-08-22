import React,{ Component } from "react"

const Action =(props) =>{

return (
<div>
     <button disabled={!props.hasOption} onClick={props.callme}>call me</button>
</div>

        )
    }

export default Action