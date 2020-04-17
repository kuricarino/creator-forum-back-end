const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    photo: {
        type: String,
        default: 'https://img.icons8.com/cute-clipart/50/000000/add-user-male.png'
    }
})

module.exports = mongoose.model('User', UserSchema);