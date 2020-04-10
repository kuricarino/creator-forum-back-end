const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    photo: {
        type: String,
        default: 'https://img.icons8.com/cute-clipart/50/000000/add-user-male.png'
    }
})

module.exports = mongoose.model('User', UserSchema);