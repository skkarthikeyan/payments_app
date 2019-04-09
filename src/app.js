import express from 'express';
import * as paymentController from './controller/payments'

const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get('/', (req, res)=>{
    res.send('app started!');
});

app.post('/api/payment/paymentorder', paymentController.payOrder);

app.listen(port, ()=>{
    console.log(`Order App listening on port: ${ port }!`)
})