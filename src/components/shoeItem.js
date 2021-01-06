import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';

export class ShoeItem extends React.Component {
    constructor() {
        super(); //Inherit super
        this.DeleteShoe = this.DeleteShoe.bind(this);
    }

    //Delete shoe method
    DeleteShoe(e) {
        e.preventDefault() //stops randomly deleting from DB
        console.log("Delete: " + this.props.shoe._id)
        axios.delete("http://localhost:4000/api/shoes/" + this.props.shoe._id)
            .then(() => {
                this.props.refreshPage() //refresh after deleted
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //Display the card with our values
    render() {
        return (
            <div >
                <Card>
                    <Card.Header>{this.props.shoe.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.shoe.image} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.shoe.brand}<br></br>
                        €{this.props.shoe.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Links to the update url with the ID and sets button to dark and large referencing css file */}
                    <Link to={"/updateShoe/" + this.props.shoe._id} className="btn btn-dark btn-lg editBtn">Edit</Link>
                    <Button size="sm" variant="danger" onClick={this.DeleteShoe}>Delete</Button>
                </Card>
            </div>
        );
    }

}