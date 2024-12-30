const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connection = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));


module.exports = connection;