import React from 'react';
import axios from 'axios';
import '../App.css';

//Class for adding a new shoe
export class AddShoe extends React.Component {

    constructor() {
        super();//Inherit super class
        //Binding the values
        this.onAdd = this.onAdd.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            Name: '',
            Brand: '',
            Price: '',
            Image: ''
        }
    }

    //Assigning value
    onChangeName(e) {
        e.preventDefault();
        this.setState({
            Name: e.target.value
        });
    }

    //Assigning value
    onChangeBrand(e) {
        e.preventDefault();
        this.setState({
            Brand: e.target.value
        });
    }

    //Assigning value
    onChangePrice(e) {
        e.preventDefault();
        this.setState({
            Price: e.target.value
        });
    }

    //Assigning value
    onChangeImage(e) {
        e.preventDefault();
        this.setState({
            Image: e.target.value
        });
    }

    //Assigning value
    onAdd(e) {
        e.preventDefault(); //Prevents DB issues
        alert(this.state.name + " has been added"); //alert for new show updated

        //aassinging loval values
        const newShoe = {
            name: this.state.Name,
            price: this.state.Price,
            brand: this.state.Brand,
            image: this.state.Image
        }
        axios.post('http://localhost:4000/api/shoes', newShoe)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Inputs for adding shoe
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onAdd}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Brand}
                            onChange={this.onChangeBrand}></input>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type='decimal'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Shoe'
                            className='btn btn-dark btn-lg'></input>
                    </div>
                </form>
            </div>
        );
    }
}