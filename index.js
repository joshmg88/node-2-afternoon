require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const productController = require('./products_controller')
port = 3000;

const app = express();

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    }).catch(err => console.log(err))

app.use(bodyParser.json());

app.get('/api/products', productController.getAll)
app.get('/api/product/:id', productController.getOne)
app.put(`/api/product/:id`, productController.update)
app.post('/api/product/', productController.create)
app.delete(`/api/product/:id`, productController.deleter)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})