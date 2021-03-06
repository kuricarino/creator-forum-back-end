const express = require('express');
const router = express.Router();
const ctrl = require("../controllers");

// api/v1...

// -------------------- USER ROUTES
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.put('/users/:id', ctrl.users.update);
router.delete('/users/:id', ctrl.users.destroy);


// -------------------- AUTH ROUTES
// router.post('/register', ctrl.auth.register);
// router.post('/login', ctrl.auth.login);
// router.delete('/logout', ctrl.auth.logout);
// router.get('/verify', ctrl.auth.verify);


// -------------------- UPLOAD ROUTES
// router.get('/uploads', ctrl.uploads.index);
// router.get('/uploads/:uploadId', ctrl.uploads.show);
// router.put('/uploads/:uploadId', ctrl.uploads.update);
// router.post('/uploads', ctrl.uploads.create);
// router.delete('/uploads/:uploadId', ctrl.uploads.destroy);


// -------------------- FEEDBACK ROUTES
// router.get('/uploads/:uploadId/feedback', ctrl.feedback.index);
// router.get('/uploads/:uploadId/feedback/:feedbackId', ctrl.feedback.show);
// router.put('/uploads/:uploadId/feedback/:feedbackId', ctrl.feedback.update);
// router.post('/uploads/:uploadId/feedback', ctrl.feedback.create);
// router.delete('/uploads/:uploadId/feedback/:feedbackId', ctrl.feedback.destroy);


module.exports = router;