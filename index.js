import express from 'express';

const app = express();

const Port = 3000;

app.get('/' , (req , res) => {
    res.status(200).send("This is my home page")
})

app.get('/about' , (req , res) => {
    res.status(200).send("This is my about page")
})





app.listen(Port , () => {
    console.log(`server is running on port ${Port}`)
})