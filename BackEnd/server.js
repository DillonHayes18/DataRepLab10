const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const path = require('path')

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Setting up config frontend
app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Setting up mongo db
const databaseString = 'mongodb+srv://dillon:admin@cluster0.8pfhp.mongodb.net/ShoeDB?retryWrites=true&w=majority';
mongoose.connect(databaseString, { useNewUrlParser: true });

//Schema for the shoe
const Schema = mongoose.Schema;
var shoeShcema = new Schema({
    name: String,
    brand: String,
    price: String,
    image: String
})

//Model for the shoe to DB
var ShoeModel = mongoose.model("shoe", shoeShcema)

app.get('/api/shoes', (req, res) => {
    ShoeModel.find((err, data) => {
        res.json(data);
    })
})

//Finding the shoe by ID
app.get('/api/shoes/:id', (req, res) => {
    console.log(req.params.id)
    ShoeModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
})

//Updating by ID
app.put('/api/shoes/:id', (req, res) => {
    console.log("Update Shoe:" + req.params.id)
    console.log(req.body)

    ShoeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//Delete using ID
app.delete('/api/shoes/:id', (req, res) => {
    console.log("Delete Shoe: " + req.params.id)
    ShoeModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.post('/api/shoes', (req, res) => {
    console.log('Shoe Recieved');
    console.log(req.body.name);//parse shoe info
    console.log(req.body.brand);//parse shoe info
    console.log(req.body.price);
    console.log(req.body.image);

    ShoeModel.create({ //Creating to DW with values
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        image: req.body.image
    })
    res.send('Item Added')
})

//Getting everything for the build
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'))
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})