const router = require('express').Router();

const userRoutes = require('./user-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/users', messageRoutes);

module.exports = router;
