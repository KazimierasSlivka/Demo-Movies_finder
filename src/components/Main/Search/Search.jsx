import React, { Component } from 'react';
import './Search.css';

import Table from './Table/Table'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
            isFound: "True",
            movieName: '',
            firstTimeLoad: true
        } 
    }
    changeHandler = (e) => {
        this.setState({movieName: e.target.value });
    }
    submitSearchButton = () => {
        var URL = "http://www.omdbapi.com/?apikey=b9ad806a&t='"+ this.state.movieName + "'";
        fetch(URL)
            .then(response => response.json())
            .then(json =>{
            this.setState({
                isLoaded: true,
                items: json,
                isFound: json.Response,
                firstTimeLoad: false
            })
        });
    }
    render(){
        return(
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div className="myMain">
                    <h2>Find information about all your favourite <span>movies</span></h2>              
                    <div>
                        <input type="text" placeholder="movie title" value={this.state.movieName} onChange={this.changeHandler}/>
                    </div>
                    <button onClick={this.submitSearchButton}>Search</button>
                    <Table 
                        name       = {this.state.items.Title}
                        plot       = {this.state.items.Plot}
                        imdbRating = {this.state.items.imdbRating}
                        runTime    = {this.state.items.Runtime}
                        director   = {this.state.items.Director}
                        response   = {this.state.isFound}
                        firstTimeLoad = {this.state.firstTimeLoad}
                    />           
                </div>
            </div>
        )
    }
}
export default Main;