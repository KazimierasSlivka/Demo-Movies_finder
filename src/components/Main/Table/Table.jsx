import React, { Component } from "react"
import "./Table.css";

class Table extends Component{
    render(){
        return(
            <div className="myTable">
                <table>
                    <tr>
                        <th>Title</th>
                        <td>{this.props.name}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{this.props.plot}</td>
                    </tr>
                    <tr>
                        <th>IMDd rating</th>
                        <td>{this.props.imdbRating}</td>
                    </tr>
                    <tr>
                        <th>Runtime</th>
                        <td>{this.props.runTime}</td>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <td>{this.props.director}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;