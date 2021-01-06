import React from 'react';
import Carousel from 'react-bootstrap/Carousel' //Importing bootstrap carousel
import '../App.css';
export class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to Dillons Shoe Project!</h1>
                {/* display date and time */}
                <h6>It is {new Date().toLocaleTimeString()} on {new Date().toDateString()}.</h6> 
                <br></br>
                {/* Carouselfor images */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-50 h-50" src="images/shoe1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 h-50" src="images/shoe2.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 h-50" src="images/shoe3.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 h-50" src="images/shoe4.jpg" />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}