const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
//route view page path
router.get('/', (req, res) => {
    res.render('index.html', { title: 'ConstructoraMA' });
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
router.post('/send-email', async (req, res) => {
    const {name, email, phone, message} = req.body;        
    contentHTML = `
        <h1>Detalle del usuario</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    const transporter= nodemailer.createTransport({
        host:'mail.constructorama.x10.mx', //host de correo a donde se va enviar 
        port:25,
        secure: false,
        auth:{
            user:'testemail@constructorama.x10.mx',//usuario donde se recibe el correo
            pass:'123456mc' //
        },
        tls:{
            rejectUnauthorized: false
        }
    });

   const info = await transporter.sendMail({
        from: '"servidor de correos" <testemail@constructorama.x10.mx>', // host de correo 
        to: 'michaelalejandroabrilmarmolejo@gmail.com',
        subject: 'servicio',
        html: contentHTML
    });

    console.log("mensaje enviado", info.messajeId);
    res.redirect('/');
});
module.exports = router;