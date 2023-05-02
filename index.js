const express = require("express");
const {connectToMongoDb} = require('./connect');
const urlRoute = require('./routes/url');
const app = express();
const PORT = 8001;


connectToMongoDb('mongodb://0.0.0.0:27017/short-url').then(()=> console.log("mongoDB connected"));


app.use(express.json());
app.use("/url", urlRoute);
app.listen(PORT, ()=>console.log(`Server started at PORT: ${PORT}`));

