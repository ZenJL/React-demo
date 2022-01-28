const router = require('express').Router();
const { check, validationResult } = require('express-validator');

// models
const Film = require('../model/Film');

// middlewares
const auth = require('../middlewares/auth');

// @route    GET /api/film
// @desc     Get film list
// @access   Public  
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 10);
  const startOffset = (page - 1) * limit;  // 2 -> (2 - 1) * 10 = 10 
  const endOffset = startOffset + limit; // 10 => 10 + 10 = 20

  try {
    const films = await Film.find().sort({ data: -1 });
    const total = films.length;
    const result = {
      isSuccess: true,
      page,
      limit,
      total,
      data: films
    }
    
    if(total === 0) res.status(200).json(result);
    
    result.data = films.slice(startOffset, endOffset);
    res.status(200).json(result)
  } catch {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

// @route    GET /api/film/:id
// @desc     Get single film
// @access   Public  
router.get('/:id', auth, async (req, res) => {
  const id = req.params.id;
  try {
    const filmItem = await Film.findById(id);
    res.status(200).json({
      data: filmItem,
      isSuccess: true
    })
  } catch {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

// @route    POST /api/film
// @desc     Add new film
// @access   Private
router.post('/', [auth, 
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty()
], async (req, res) => {
  // validator fields
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() })
  }

  // create new item
  const filmItem = new Film({
    title: req.body.title,
    banner: req.body.banner,
    description: req.body.description
  });

  try {
    const film = await filmItem.save();
    res.status(200).json({
      data: film,
      msg: 'Add sucessfully!',
      isSuccess: true
    })
  } catch (err) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

// @route    PUT /api/film/:id
// @desc     Update film
// @access   Private
router.put('/:id', [
  auth,
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty()  
], async (req, res) => {
  // validator fields
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() })
  }

  const id = req.params.id;
  // update film
  const filmItem = {};
  if(req.body.quote) filmItem.quote = req.body.quote;
  if(req.body.banner) filmItem.banner = req.body.banner;
  filmItem.title = req.body.title;
  filmItem.description = req.body.description;
  filmItem.updatedDate = Date.now();

  // save data
  try {
    const film = await Film.findOneAndUpdate(
      { _id: id },
      { $set: filmItem },
      { new: true }
    );

    if(!film) {
      return res.status(400).json({
        data: null,
        msg: `Can't update film`,
        isSuccess: false
      })
    }
    res.status(200).json({
      msg: `Update successfully!`,
      isSuccess: true
    })
  } catch(err) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

// @route    DELETE /api/film/:id
// @desc     Delete film
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;
  try {
    const filmItem = await Film.findOneAndRemove({ _id: id });
    if(!filmItem) {
      return res.status(400).json({
        msg: `Can't not find item`,
        isSuccess: false
      })
    }
    res.status(200).json({
      msg: 'Delete successfully!',
      isSuccess: true
    })
  } catch {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})  

module.exports = router;
