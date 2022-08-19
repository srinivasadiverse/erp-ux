import {Component} from "react"

class C344 extends Component{
    render(){
        return(
            <div class="sub-card-container">
                <div class="mini-card-container-1">
                    <label class="label-1" for="firstInput">3.4.4:  Average percentage of students participating in extension activities at 3.4.3 above during last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <div class="mini-card-container-2">
                    <label class="label-1" for="firstTable">3.4.4.1:  Total number of students participating in extension activities conducted in collaboration with industry community and non-government organization such as swachh bharath, AIDs awareness, Gender issue etc.. year-wise during the last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <div class="mini-card-container-3">
                    <h1 class="heading-1">Related Input</h1>
                    <p>Number of students year-wise during last five years </p>
                    <table class="table-3" border={1}>
                        <tr>
                            <th class="table-padding">Year 1</th>
                            <th class="table-padding">Year 2</th>
                            <th class="table-padding">Year 3</th>
                            <th class="table-padding">Year 4</th>
                            <th class="table-padding">Year 5</th>
                        </tr>
                        <tr>
                            <td class="table-padding">100</td>
                            <td class="table-padding">100</td>
                            <td class="table-padding">100</td>
                            <td class="table-padding">100</td>
                            <td class="table-padding">100</td>
                        </tr>
                    </table>
                    <p>Total academic year considered : 5</p>
                </div>
                <table width={1000} class="table-2" border={2}>
                    <tr>
                        <th width={300} class="table-2-heads">File Description</th>
                        <th width={200} class="table-2-heads">Template</th>
                        <th width={500} class="table-2-heads">Documents</th>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Report of the event</td>
                        <td class="table-2-rows"></td>
                        <td class="table-2-rows">
                            <button class="button-style">Upload</button>
                            <i class="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Average percentage of students participating in extension activities with Govt or NGO etc*</td>
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

export default C344;