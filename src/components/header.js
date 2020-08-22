import React from "react"

const Header =(props) => {
 return (
<div>
    
    {props.data1}
</div>

        )
    }

Header.defaultProps={
    data1: 'header default'
}


export default Header
