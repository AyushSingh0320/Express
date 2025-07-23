import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const Port = process.env.PORT || 3000;

app.use(express.json());

let alcoholsdata = []
let id = 1;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Alcohol API</h1><br/><p>Change the URL to /alcohols to access the alcohol data.</p>");
})
// POST ALCOHOL DATA
app.post('/alcohols', (req , res) => {
    const {name , price , type}=req.body
    const newalcohol = {
        id : id++,
        name,
        price,
        type
    }
    alcoholsdata.push(newalcohol);
    res.status(200).send(newalcohol);
})
// GET ALL ALCOHOL DATA

app.get('/alcohols', (req , res) => {
    res.status(200).send(alcoholsdata);
} ) 

// GET ALCOHOL BY ID

app.get('/alcohols/:id', (req, res) => {
    const targetID = parseInt(req.params.id);
    const data = alcoholsdata[targetID - 1];
    if(!data){
       return res.status(404).send("Alcohol not found");
    }else{
        res.status(200).send(data);
    }
})
// UPDATE THE ALCOHOLDATA

app.put('/alcohols/:id', (req, res) => {
    const targetID = parseInt(req.params.id);
    const {name , price , type} = req.body;
    const data = alcoholsdata[targetID - 1];
    if(!data){
        return res.status(404).send("Alcohol not found");}
        else{
            data.name = name;
            data.price = price;
            data.type = type;
            res.status(200).send(data);
        }
    })

app.listen( Port , () => {
    console.log(`server is running on port ${Port}`)
})