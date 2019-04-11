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

app.get('/api/payment/paymentorder/:orderdetails?', paymentController.payOrder);

app.listen(port, ()=>{
    console.log(`Payment App listening on port: ${ port }!`)
})