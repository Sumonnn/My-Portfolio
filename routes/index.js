var express = require('express');
var router = express.Router();
const portfolioDetails = require('../models/detailsModels');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/portfolio/save', async (req, res) => {
  try {
    const detail = new portfolioDetails(req.body);
    await detail.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})
module.exports = router;
