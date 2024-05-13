const mongoose = require('mongoose')
const mongoURL =
  "";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
