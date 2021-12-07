const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://REUT:r123@cluster0.ggsdq.mongodb.net/ICTBIT', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("mongo connect");
  // we're connected!
});

module.exports = db;