const router = require('express').Router();

const userRoutes = require('./user-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/message', messageRoutes);

module.exports = router;
