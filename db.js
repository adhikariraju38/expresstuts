const mongoose = require('mongoose')
const mongoURL =
  "mongodb+srv://itsmeerajuyadav:DebjHzKCLEOERL6F@lookscout.z4ecoux.mongodb.net/?retryWrites=true&w=majority&appName=lookscout";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
