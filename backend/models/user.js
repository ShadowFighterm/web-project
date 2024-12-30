const mongoose = require('mongoose');
const { Schema } = mongoose; 
const bcrypt = require('bcrypt');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema
({
    name: 
    {
        type: String,
        require: [true, 'Name is Required'],
    },
    password: 
    { 
        type: String,
        required: [true, 'Password is required'],
    },
    role:
    {
        type: String,
        required: [true, 'Role is required'],
    }

}, {timestamps: true, collection: 'user'});

UserSchema.pre('save', async function()
{
    var user = this;
    if(!user.isModified('password')) 
        return;
    try
    {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hashSync(user.password, salt);
        user.password = hash;

    }
    catch(err)
    {
        console.log(err);
    }
})

UserSchema.methods.ComparePassword = async function(password)
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

UserSchema.plugin(AutoIncrement, { inc_field: 'userId' });
const UserMod = mongoose.model('user', UserSchema);
module.exports = UserMod;