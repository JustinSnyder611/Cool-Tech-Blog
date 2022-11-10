const router = require('express').Router();
const { Message } = require('../../models/');

router.post('/post', async (req, res) => {
    try {
        const messageData = await Message.create({
            message: req.body.message,
            username: req.body.user_username,
        });
        res.status(200).json(messageData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;