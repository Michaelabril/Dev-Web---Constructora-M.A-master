const express = require('express');
const router = express.Router();

//route view page path
router.get('/', (req, res) => {
    res.render('index.html', { tile: 'ConstructoraMA' });
});

//route view contact page
router.get('/contact', (req, res) => {
    res.render('contact.html');
});

//route view services page
router.get('/services', (req, res) => {
    res.render('services.html');
});
router.get('/proyectos', (req, res) => {
    res.render('proyectos.html');
});

router.get('/about', (req, res) => {
    res.render('about.html');
});
module.exports = router;