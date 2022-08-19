import {Component} from "react"

class C352 extends Component{
    render(){
        return(
            <div class="sub-card-container">
                <div class="mini-card-container-1">
                    <label class="label-1" for="firstInput">3.5.2:  Number of Functional MoUs with institution, other universities, industries, corporate houses etc. during the last five years</label>
                    <input id="firstInput" class="input-1" type="text"/>
                </div>
                <div class="mini-card-container-2">
                    <label class="label-1" for="firstTable">3.5.2.1:  Number of functional MoUs with Institutions of national, international importance, other universities, industries, corporate houses etc. year-wise during the last five years</label>
                    <table id="firstTable" class="table-1" cellPadding={4} cellSpacing={0} border={1}>
                        <tr>
                            <th class="table-headings">2018-19</th>
                            <th class="table-headings">2017-18</th>
                            <th class="table-headings">2016-17</th>
                            <th class="table-headings">2015-16</th>
                            <th class="table-headings">2014-15</th>
                        </tr>
                        <tr>
                            <td><input class="input-2" type="text"/></td>
                            <td><input class="input-2" type="text"/></td>
                            <td><input class="input-2" type="text"/></td>
                            <td><input class="input-2" type="text"/></td>
                            <td><input class="input-2" type="text"/></td>
                        </tr>
                    </table>
                </div>

                <table width={1000} class="table-2" border={2}>
                    <tr>
                        <th width={300} class="table-2-heads">File Description</th>
                        <th width={200} class="table-2-heads">Template</th>
                        <th width={500} class="table-2-heads">Documents</th>
                    </tr>
                    <tr>
                        <td class="table-2-rows">e-copies of the MoUs with institution/industry/corporate houses<span class="span-style-2">*</span></td>
                        <td class="table-2-rows">Data Template</td>
                        <td class="table-2-rows">
                            <button class="button-style">Upload</button>
                            <i class="fa-solid fa-circle-question"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-2-rows">Details of functional MoUs with Institutions of national, international importance, other universities etc during the last five years</td>
                        <td class="table-2-rows"></td>
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

export default C352;
