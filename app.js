const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hola Mundo de los Servidores Web');
})

app.get('/registro',(req,res)=>{
    res.render('advance-table');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log(`El servidor está corriendo en el puerto http://localhost:${port}`);
})