const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const app  = express();

mongoose.connect('mongodb+srv://jathin_developer:sKry8En9x8rMjDIS@devaiah-cluster-fez7l.mongodb.net/node-angular?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("connected to Mongo");
})
.catch(() => {
  console.log("error connecting to Mongo");
})

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', postRoutes);

module.exports = app;
