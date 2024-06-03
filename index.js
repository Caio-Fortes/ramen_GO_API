const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const brothRoutes = require('./routes/brothRoutes');
app.use('/broths', brothRoutes);

const proteinsRoutes = require('./routes/proteinRoutes');
app.use('/proteins', proteinsRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

const conectionString = `mongodb+srv://root:root@ramengocluster.0ihmfdn.mongodb.net/?retryWrites=true&w=majority&appName=ramengoCluster`

mongoose.connect(conectionString)
.then(() =>{
    app.listen(port, () => {console.info('Aplicação rodando')})
}).catch((err) =>{
    console.log(err)
});
