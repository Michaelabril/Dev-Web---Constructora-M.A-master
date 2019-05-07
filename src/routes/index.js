const express = require('express');
const router = express.Router();


//route view page path
router.get('/', (req,res) => {
  res.render('index.html', {tile: 'ConstructoraMA'});
});

//route view contact page
router.get('/contact', (req,res) => {
  res.render('contact.html',);
});

//route view services page
router.get('/services', (req,res) => {
  res.render('services.html',);
});
router.get('/trabajos', (req,res) => {
  res.render('trabajos.html',);
});

module.exports = router;
