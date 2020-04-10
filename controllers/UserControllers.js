const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, foundAllUsers) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot get all users.' });

        res.json(foundAllUsers)
    });
};

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find user by that id' });

        res.json(foundUser);
    });
};

const create = (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot create a new user' });
    
        res.json(newUser);
    });
};

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedUser) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find user by that id and therefore cannot update' });

        res.json(updatedUser);
    });
};

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find user by that id and therefore cannot delete'})
    
    res.json(deletedUser)    
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}

