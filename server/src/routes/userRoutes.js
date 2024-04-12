const express = require('express');
const router = express.Router();
const User = require('../schemas/userSchema');

// Ver usuarios

router.get('/User', async (req, res) => {
  try {
    const usersss = await User.find();
    res.json(usersss);
  } catch (error) {
    res.json({ message: error });
  }
});


// Registrar usuario
router.post('/registerUser', async (req, res) => { 
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(200).json(user);

  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
