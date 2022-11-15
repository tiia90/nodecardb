const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://mongoviope:3heivaan4@cluster0.igutn.mongodb.net/cardb?retryWrites=true&w=majority'; ;
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});