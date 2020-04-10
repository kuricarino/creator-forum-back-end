const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    // check if username or pw is empty
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    // if empty, send error
    if (!newUser.username || !newUser.password) return res.sendStatus(404).json({ status: 404, error: 'Cannot register empty user.' });
    // find user by username
    db.User.findOne({ username: newUser.username }, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, error: 'Cannot find username.' });
        if (foundUser) return res.status(404).json({ status: 404, error: 'Sorry, that username already exists.' });
    
        // Generate salt
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(404).json({ status: 404, error: 'Cannot register user.' });
            // has newUser password
            bcrypt.hash(newUser.password, salt, (err, hashedPwd) => {
                if (err) return res.status(404).json({ status: 404, error: 'Cannot register new user.' });

                newUser.password = hashedPwd;

                const newUserObject = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: newUser.username,
                    email: req.body.email,
                    password: hashedPwd,
                    // photo: req.body.photo,
                };

                db.User.create(newUserObject, (err, savedUser) =>  {
                    if (err) return res.status(404).json({ status: 404, error: 'Cannot create new user.' });

                    const token = jwt.sign(
                        {
                            _id: savedUser._id,
                            firstName: savedUser.firstName,
                            lastName: savedUser.lastName,
                            username: savedUser.username,
                            email: savedUser.email,
                            // photo: savedUser.photo,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '30 days'
                        },
                    );
                    return res.status(200).json({ status: 200, message: 'User created! Huzzah!', token });
                });
            });
        });
    });
};


const login = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    if (!user.username || !user.password) return res.sendStatus(404).json({ status: 404, error: 'Cannot login user.' });
    
    db.User.findOne({ username: user.username }, (err, foundUser) => {
        if (err) return res.status(404).json({ status: 404, error: 'Cannot find user.' });
        if(!foundUser) return res.status(404).json({ status: 404, error: 'Invalid username.' });

        // compare pw
        bcrypt.compare(user.password, foundUser.password, (err, pwdMatch) => {
            if (pwdMatch) {
                const token = jwt.sign(
                    {
                        _id: foundUser._id,
                        firstName: foundUser.firstName,
                        lastName: foundUser.lastName,
                        username: foundUser.username,
                        email: foundUser.email,
                        // photo: foundUser.photo, 
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '30 days'
                    },
                );
                return res.status(200).json({ status: 200, message: 'User logged in', token });
            } else {
                return res.status(404).json({ status: 404, error: 'Cannot login. Please try again.' });
            }
        })
    })
}

module.exports = {
    register,
    login
}