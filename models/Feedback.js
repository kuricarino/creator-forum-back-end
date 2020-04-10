const mongoose = require ('mongoose');

const FeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    private: Boolean, // allows user to toggle (show or hide username)
    upload: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upload'
    },
    body: {
        type: String,
        minlength: 1,
        maxlength: 500,
    }
})

module.exports = mongoose.model('Feedback', FeedbackSchema);