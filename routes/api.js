const express = require('express');
const verifyToken = require('../middleware/verification');
const router = express.Router();
const ctrl = require("../controllers");

// api/v1
// -------------------- USER ROUTES
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.put('/users/:id', ctrl.users.update);
router.delete('/users/:id', ctrl.users.destroy);

// -------------------- UPLOAD ROUTES
router.get('/uploads', verifyToken, ctrl.uploads.index);
router.get('/uploads/:uploadId', verifyToken, ctrl.uploads.show);
router.put('/uploads/:uploadId', verifyToken, ctrl.uploads.update);
router.post('/uploads', verifyToken, ctrl.uploads.create);
router.delete('/uploads/:uploadId', verifyToken, ctrl.uploads.destroy);


// -------------------- FEEDBACK ROUTES
router.get('/uploads/:uploadId/feedback', verifyToken, ctrl.feedback.index);
router.get('/uploads/:uploadId/feedback/:feedbackId', verifyToken, ctrl.feedback.show);
router.put('/uploads/:uploadId/feedback/:feedbackId', verifyToken, ctrl.feedback.update);
router.post('/uploads/:uploadId/feedback', verifyToken, ctrl.feedback.create);
router.delete('/uploads/:uploadId/feedback/:feedbackId', verifyToken, ctrl.feedback.destroy);

module.exports = router;