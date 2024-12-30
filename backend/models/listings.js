const mongoose = require('mongoose');
const { Schema } = mongoose; 
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ListingsSchema = new Schema
({
    title: 
    {
        type: String,
        require: [true, 'Title is Required'],
    },
    img: 
    { 
        type: Array,
        required: [true, 'Images are required'],
    },
    location: 
    {
        type: String,
        required: false,
    },
    rooms: 
    {
        type: Array,
        required: false,
    },
    rating: 
    {
        type: Number,
        required: false,
    },
    reviews: 
    {
        type: Number,
        required: false,
    },
    hostedBy: 
    {
        type: String,
        required: [true, 'Hosted by is required'],
    },
    hostedByImg: 
    {
        type: String,
        required: false,
    },
    hostDetail: 
    {
        type: String,
        required: false,
    },
    price:
    {
        type: Number,
        required: false,
    },
    benefits: 
    {
        type: Array,
        required: false,
    },
    description:
    {
        type: String,
        required: false
    }
}, {timestamps: true, collection: 'listings'});


ListingsSchema.methods.ComparePassword = async function(password)
{
    try
    {
        console.log("password", this.password)
        const IsValid = await bcrypt.compareSync(password, this.password);
        return IsValid;
    }
    catch(err)
    {
        console.log(err);
    }
}

ListingsSchema.plugin(AutoIncrement, { inc_field: 'listingId' });
const listingsMod = mongoose.model('listings', ListingsSchema);
module.exports = listingsMod;