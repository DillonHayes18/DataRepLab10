import React from 'react';
import axios from 'axios';
import '../App.css';

export class Update extends React.Component {

    constructor() {
        super(); //Inherit super

        //binding the values
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

    //Check if componenet is working
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/shoes/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id, //one id defined here second db
                    Name: response.data.name,
                    Brand: response.data.brand,
                    Price: response.data.price,
                    Image: response.data.image
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //Changing name - assigning value
    onChangeName(e) {
        e.preventDefault() //Prevent random issues with DB
        this.setState({
            Name: e.target.value
        });
    }

    //Changing brand - assigning value
    onChangeBrand(e) {
        this.setState({
            Brand: e.target.value
        });
    }

    //Changing price - assigning value
    onChangePrice(e) {
        e.preventDefault() //Prevent random issues with DB
        this.setState({
            Price: e.target.value
        });
    }

    //Changing image - assigning value
    onChangeImage(e) {
        e.preventDefault() //Prevent random issues with DB
        this.setState({
            Image: e.target.value
        });
    }

    //Adding the updated shoe
    onAdd(e) {
        e.preventDefault();
        alert("Shoe has been updated"); //alert for new show updated

        const newShoe = { //setting values to const
            name: this.state.Name,
            brand: this.state.Brand,
            price: this.state.Price,
            image: this.state.Image,
            _id: this.state._id
        }

        //Put request for the ID
        axios.put('http://localhost:4000/api/shoes/' + this.state._id, newShoe,)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //Input fields for updating the shoe
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onAdd}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name} //read in existing value
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Brand}  //read in existing value
                            onChange={this.onChangeBrand}></input>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type='decimal'
                            className='form-control'
                            value={this.state.Price}  //read in existing value
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Image}  //read in existing value
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Update Shoe'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}