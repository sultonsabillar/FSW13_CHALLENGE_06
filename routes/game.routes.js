// Import Module
const express = require('express');

const router = express.Router({caseSensitive: false});

router.get('/', (req, res) => {
  res.status(200).render('game.ejs');
})

module.exports = router;
