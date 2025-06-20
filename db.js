const mongoose = require('mongoose');
require('dotenv').config()
//const mongourl = 'mongodb://127.0.0.1:27017/hotels';
//const mongourl = 'mongodb+srv://skoolinfo:skoolinfo2627@skoool.ovzh8c7.mongodb.net/'
//mongoose.connect('mongodb://127.0.0.1:27017/hotels');
mongoose.connect(process.env.DB_URL);



const db = mongoose.connection;
db.on("connected", () => console.log("Connected to database"));

db.on("error", () => console.log("Error in connecting to database"));

db.on("disconnected", () => console.log("Disconnected from database"));

module.exports = db

