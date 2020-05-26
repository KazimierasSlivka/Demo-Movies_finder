import React, { Component } from "react"
import "./Table.css";

class Table extends Component{
    render(){
        if(this.props.firstTimeLoad === false && this.props.response === "True")
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
        )
        else if (this.props.response === "False")
        return(
            <div className='myAlert'>
                <p>Movie not found</p>
            </div>
        )
        else
        return(
            <div></div>
        );
    }
}

export default Table;