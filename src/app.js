import React, { Component } from "react"
import ReactDOM from "react-dom"
import MyComp,{ } from "./components/mycomp"
// import MyComp,{} from "./mycomp";
// export default class App extends Component{
//     render(){
//         return(
//             <div>
//                 <p>welcome to my component</p>
//             </div>
//         )
//     }
// }

ReactDOM.render(<MyComp/>,document.getElementById("root"))