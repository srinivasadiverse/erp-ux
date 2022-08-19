import {Component} from "react"

class C331 extends Component{
    render(){
        return(
            <div class="sub-card-container">
                <div class="mini-card-container-1">
                    <label class="label-1" for="firstInput">3.3.1:  Number of Ph.Ds registered for eligible teacher during the last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <div class="mini-card-container-2">
                    <label class="label-1" for="firstTable">3.3.1.1:  How many Ph.Ds registered per eligible teacher within last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <div class="mini-card-container-2">
                    <label class="label-1" for="firstTable">3.3.1.2:  Number of teachers recognized as guides during last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <table width={1000} class="table-2" border={2}>
                    <tr>
                        <th width={300} class="table-2-heads">File Description</th>
                        <th width={200} class="table-2-heads">Template</th>
                        <th width={500} class="table-2-heads">Documents</th>
                    </tr>
                    <tr>
                        <td class="table-2-rows">URL to the research page on HEI website</td>
                        <td class="table-2-rows"></td>
                        <td class="table-2-rows">
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-2-rows">List of PhD scholors and their details like name of the guide, title of thesis, year of award, etc..</td>
                        <td class="table-2-rows">Data Template</td>
                        <td class="table-2-rows">
                            <button class="button-style">Upload</button>
                            <i class="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Any additional information</td>
                        <td class="table-2-rows"></td>
                        <td class="table-2-rows">
                            <button class="button-style">Upload</button>
                            <i class="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default C331