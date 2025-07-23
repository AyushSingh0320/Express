import express from 'express';

const app = express();

const Port = 3000;

app.use(express.json());

let alcoholsdata = []
let id = 1;

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

app.get('/alcohols', (req , res) => {
    res.status(200).send(alcoholsdata);
} ) 

app.get('/alcohols/:id', (req, res) => {
    const targetID = parseInt(req.params.id);
    const data = alcoholsdata[targetID - 1];
    if(!data){
       return res.status(404).send("Alcohol not found");
    }else{
        res.status(200).send(data);
    }
})






app.listen(Port , () => {
    console.log(`server is running on port ${Port}`)
})