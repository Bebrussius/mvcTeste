const express = require('express');
const router = express.Router();
const passport = require('passport');

//GET página de login
router.get('/', (req, res, next) => {
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null });
});

//POST página de login
router.post('/',
    passport.authenticate('local', { 
        successRedirect: '/equipamentos', 
        failureRedirect: '/login?fail=true' 
    })
);

async function logout(req, res){
    delete req.session.user;
    res.redirect('/');
}

module.exports = router;