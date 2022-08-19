import {Component} from "react";
import "./index.css"
import C351 from "./C351";
import C352 from "./C352";

class C35 extends Component{
    render(){
        return (
            <div class="main-card-container">
                <div class="main-heading-container">
                    <h1 class="main-heading"><span class="span-style-1">3.5</span>: Collaboration</h1>
                </div>
                <C351/>
                <C352/>
            </div>
        )
    }
}

export default C35;