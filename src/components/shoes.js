import React from 'react';
import { ShoeItem } from './shoeItem'
import '../App.css';

export class Shoes extends React.Component {
    render() { //Shoe map which sends shoes to the shoeItem and refreshes page
        return this.props.shoes.map((shoe) => {
            return <ShoeItem shoe={shoe} refreshPage={this.props.refreshPage}></ShoeItem>
        })
    }
}