import {Component} from "react";
import "./index.css"
import C311 from "./C311";
import C312 from "./C312";
import C313 from "./C313";

class C31 extends Component{
    render(){
        return (
            <div class="main-card-container">
                <div class="main-heading-container">
                    <h1 class="main-heading"><span class="span-style-1">3.1</span>: Resource Mobilization for Research</h1>
                </div>
                <C311/>
                <C312/>
                <C313/>
            </div>
        )
    }
}


export default C31;