import {Component} from "react"
import "./index.css"

class C321 extends Component{
    render(){
        return (
            <div class="sub-card-container">
                <div class="mini-card-container-321">
                    <h1 class="heading-1">3.2.1: Institution has created an ecosystem for innovatios and has initiatives for creation and transfer of knowledge</h1>
                    <textarea class="big-input" cols="120" rows="10"></textarea>
                </div>
                
                <table width={1000} class="table-2" border={2}>
                    <tr>
                        <th width={300} class="table-2-heads">File Description</th>
                        <th width={200} class="table-2-heads">Template</th>
                        <th width={500} class="table-2-heads">Documents</th>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Upload any additional information</td>
                        <td class="table-2-rows"></td>
                        <td class="table-2-rows">
                            <button class="button-style">Upload</button>
                            <i class="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Paste link for additional information</td>
                        <td class="table-2-rows"></td>
                        <td class="table-2-rows">
                            <input type="text"/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default C321 