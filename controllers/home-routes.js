const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Message } = require('../models');

router.get('/', async (req, res) => {
  try {
    const messageData = await User.findAll({
      include: [
        {
          model: Message,
          attributes: ['message', 'user_username'],
        },
      ],
    });

    const messages = messageData.map((message) =>
      message.get({ plain: true })
    );
    res.render('homepage', {
      messages,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
