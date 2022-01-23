const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// model
const User = require('../model/User');

// @route    POST /api/user
// @desc     Register user
// @access   Public
router.post('/register', 
  check('firstName', 'First Name is required').not().isEmpty(),
  check('lastName', 'Last Name is required').not().isEmpty(),
  check('password', 'Email is required').not().isEmpty(),
  check('email', 'Email must correct format').not().isEmpty().isEmail()
, async (req, res) => {
  // validator fields
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() })
  }

  // check email exist
  const emailExist = await User.findOne({ email: req.body.email});
  if(emailExist) {
    return res.status(400).json({
      msg: "Email already exists",
      isSucess: false
    })
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword
  });

  try {
    await user.save();
    res.status(200).json({
      msg: 'Register sucessfully!',
      isSuccess: true
    })
  } catch (err) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})


// @route    POST /api/user/login
// @desc     Login user
// @access   Public
router.post('/login', 
  check('password', 'Email is required').not().isEmpty(),
  check('email', 'Email must correct format').not().isEmpty().isEmail()
, async (req, res) => {
  // validator fields
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() })
  }

  // validation email
  const user = await User.findOne({ email: req.body.email});
  if(!user) {
    return res.status(400).json({
      msg: "Email or password is wrong",
      isSucess: false
    })
  }

  // validation password
  const password = await bcrypt.compare(req.body.password, user.password);
  if(!password) {
    return res.status(400).json({
      msg: "Email or password is wrong",
      isSucess: false
    })
  }

  // create & assgin access token
  const payload = {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  }
  jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { expiresIn: 36000 },
    (err, token) => {
      if(err) throw err;
      res.header('x-auth-token', token).json({
        token,
        msg: 'Login Successfully!',
        isSucess: true
      })
    }
  )
})

module.exports = router;