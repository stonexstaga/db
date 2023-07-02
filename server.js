const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//const bodyParser = require("body-parser");
//app.use(bodyParser.json({limit: '100kb'}));

require('dotenv').config();
//require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '5000kb'}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,});

/** 
const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://espertee:tetraxi@cluster0.nmj0h.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
*/
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const account = require('./routes/account');
const accountprop = require('./routes/accountprop');
const signal = require('./routes/signal');
const demosignal = require('./routes/demosignal');
const pending = require('./routes/pending');
const ref = require('./routes/ref');
const fund = require('./routes/fund');
const status = require('./routes/status');
const weed = require('./routes/weed');


app.use('/account',account);
app.use('/accountprop',accountprop);
app.use('/signal', signal);
app.use('/demosignal', demosignal);
app.use('/pending', pending);
app.use('/ref', ref);
app.use('/fund',fund);
app.use('/status',status);
app.use('/weed',weed);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
