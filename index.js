const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*")
    app.use(cors());
    next();
})

const brothRoutes = require('./src/routes/brothRoutes');
app.use('/broths', brothRoutes);

const proteinsRoutes = require('./src/routes/proteinRoutes');
app.use('/proteins', proteinsRoutes);

const orderRoutes = require('./src/routes/orderRoutes');
app.use('/orders', orderRoutes);

const conectionString = `mongodb+srv://root:root@ramengocluster.0ihmfdn.mongodb.net/?retryWrites=true&w=majority&appName=ramengoCluster`

mongoose.connect(conectionString)
.then(() =>{
    app.listen(port, () => {console.info('Aplicação rodando')})
}).catch((err) =>{
    console.log(err)
});
