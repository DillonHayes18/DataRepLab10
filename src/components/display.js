import React from 'react';
import { Shoes } from './shoes';
import axios from 'axios';
import '../App.css';

//Display Class for displaying the shoes
export class Display extends React.Component {
    constructor() {
        super();
        this.refreshPage = this.refreshPage.bind(this);
    }

    state = { //shoe array
        shoes: []
    };

    //Check if componenet works
    componentDidMount() {
        axios.get('http://localhost:4000/api/shoes') //url for back end
            .then(
                (response) => {
                    this.setState({ shoes: response.data }) //pass data to server
                }

            )
            .catch(
                (error) => {
                    console.log(error)
                });
    }

    //Refresh after deletion
    refreshPage() {
        axios.get('http://localhost:4000/api/shoes') //url for back end
            .then(
                (response) => {
                    this.setState({ shoes: response.data }) //pass data to server
                }

            )
            .catch(
                (error) => {
                    console.log(error)
                });
    }

    render() {
        return (
            <div>
                <Shoes shoes={this.state.shoes} refreshPage={this.refreshPage}></Shoes>
            </div>
        );
    }
}