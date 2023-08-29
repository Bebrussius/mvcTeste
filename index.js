const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const equipamentoController = require('./controllers/equipamentoController');
const app = express();
const port = 3000;

//Autorização de usuario
require('./auth')(passport);
app.use(session({  
  secret: '123',//configure um segredo seu aqui,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 }//30min
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

//Layout
app.set('view engine', 'ejs');

//Rotas
app.get('/', (req, res) => {res.send("<h1>equipamentos</h1>")})
app.get('/equipamentos', equipamentoController.getEquipamento);
app.post('/equipamentos', equipamentoController.addEquipamento);
app.delete('/equipamentos', equipamentoController.addEquipamento);
app.put('/equipamentos', equipamentoController.addEquipamento);
const loginRouter = require('./controllers/userController');
const router = require('./controllers/userController');
app.use('/login', loginRouter);
app.use('/auth', authenticationMiddleware, router);
app.use('/', authenticationMiddleware,  router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login?fail=true');
  }

app.get('/equipamentos/delete/:id', (req,res) =>{
    equipamentoController.deleteEquipamento(req, res);
})