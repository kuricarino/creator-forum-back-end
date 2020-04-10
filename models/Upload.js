const mongoose = require ('mongoose');

const UploadSchema = new mongoose.Schema({
    private: Boolean, // allows user to toggle (show or hide username)
    title: {
        type: String,
        required: true,
        maxlength: 150,
    },
    category: String, // may reference Category model as stretch-goal
    link: String,
    body: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    feedback: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }
})

module.exports = mongoose.model('Upload', UploadSchema);