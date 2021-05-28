const express = require ('express');
const app= express();
const mongoose =require ('mongoose')
mongoose.connect('mongodb://localhost/App')
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(express.json());
app.use('/api',require('./routes/api'))
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})
app.listen(4000,console.log('Listeningggg'));
