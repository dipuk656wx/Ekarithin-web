const mongoose = require("mongoose");
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./.env" }); //import config.env file

const DBURI = process.env.DBURI;  

mongoose.set('strictQuery', false);
const connectDb = () => {
  mongoose
    .connect("mongodb+srv://Event_schedular:wbE2dSiyPx9q2LiE@event.plmcyq4.mongodb.net/Ekarithin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Successfully Connected DB to HOST : ${conn.connection.host}`);
    });
};

module.exports = connectDb;