const db = require('../models');

const index = (req, res) => {
    db.Upload.find({})
    .populate('user', '_id private firstName lastName username photo')
    .populate('feedback', '_id private body')
    .exec((err, foundUploads) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find all posts.' });
    
        res.json(foundUploads);
    });
};

const show = (req, res) => {
    db.Upload.findById(req.params.uploadId)
    .populate('user', '_id private firstName lastName username photo')
    .populate('feedback', '_id private body')
    .exec((err, foundUpload) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find a post with that id.'});
    
        res.json(foundUpload);
    });
};

const create = (req, res) => {
    db.Upload.create(req.body, (err, newUpload) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot create new upload.' });
    
    res.json(newUpload);
    });
};

const update = (req, res) => {
    db.Upload.findByIdAndUpdate(req.params.uploadId, req.body, { new: true }, (err, updatedUpload) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find and update an upload with that id.' })
    
        res.json(updatedUpload);
    });
};

const destroy = (req, res) => {
    db.Upload.findByIdAndDelete(req.params.uploadId, (err, deletedUpload) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find and delete an upload with that id.' });
    
    res.json(deletedUpload);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
