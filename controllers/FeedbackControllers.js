const db = require('../models');

const index = (req, res) => {
    db.Feedback.find({}, (err, foundAllFeedback) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot get all feedback.' });

        res.json(foundAllFeedback);
    });
};

const show = (req, res) => {
    db.Feedback.findById(req.params.feedbackId, (err, foundFeedback) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find any feedback with that id' });
    
        res.json(foundFeedback);
    });
};

const create = (req, res) => {
    db.Feedback.create(req.body, (err, newFeedback) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot create new feedback.' });

        res.json(newFeedback);
    });
};

const update = (req, res) => {
    db.Feedback.findByIdAndUpdate(req.params.feedbackId, req.body, { new: true }, (err, updatedFeedback) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find and update feedback with that id.' });

        res.json(updatedFeedback);
    });
};

const destory = (req, res) => {
    db.Feedback.findByIdAndDelete(req.params.feedbackId, (err, deletedFeedback) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find and delete feedback with that id.' });

        res.json(deletedFeedback);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}