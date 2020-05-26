import React, { Component } from 'react';
import './Main.css';

import About from './About/About';
import Search from './Search/Search';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSearchOpen: true,
            isAboutOpen: false,
        };
    }
    ShowSearch(){
        this.setState({isSearchOpen: true, isAboutOpen: false});
    }
    ShowAbout(){
        this.setState({isSearchOpen: false, isAboutOpen: true});
    }
    render(){
        return(
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div className="myButtons">
                    <button onClick={this.ShowSearch.bind(this)}>Search</button>
                    <button onClick={this.ShowAbout.bind(this)}>About</button>
                </div>
                {this.state.isSearchOpen && <Search />}
                {this.state.isAboutOpen && <About />}
            </div>
        );
    }
}
export default Main;