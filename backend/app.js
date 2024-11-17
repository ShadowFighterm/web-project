const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const listingsRoutes = require('./routes/listings');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', listingsRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
