import {Component} from "react"
import C321 from "./C321"
import C322 from "./C322"

class C32 extends Component{
    render(){
        return(
            <div class="main-card-container">
                <div class="main-heading-container">
                    <h1 class="main-heading"><span class="span-style-1">3.2</span>: Innovation Ecosystem</h1>
                </div>
                <C321/>
                <C322/>
            </div>
        )
    }
}

export default C32