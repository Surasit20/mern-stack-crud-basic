const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

//route
const studentRoute = require('../backend/routes/student_route');


//connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("Database successfully connected");
}
).catch(error=>{
    console.log(error);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());
app.use('/students',studentRoute);

const port = process.env.PORT||4000;
const server = app.listen(port,()=>{
    console.log("Connected to port " + port);
})

