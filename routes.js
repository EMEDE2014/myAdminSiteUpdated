const express = require('express');
const routes = express.Router();

const HomePage = require('./src/controllers/homePage');
const servicePage = require('./src/controllers/servicePage');
const aboutPage = require('./src/controllers/aboutPage');
const contactPage = require('./src/controllers/contact');
const alumiPage = require('./src/controllers/alumi');
const registerPage = require('./src/controllers/controllerRegister');
const loginPage = require('./src/controllers/controllerLogin');
const policy = require('./src/controllers/policy');
const terms = require('./src/controllers/terms');

routes.get('/', HomePage.HomePage);
routes.get('/service', servicePage.service);
routes.get('/about', aboutPage.about);
routes.get('/contact', contactPage.contacts);
routes.get('/alumi', alumiPage.alumi);

// SESSAO DE REGISTER E LOGIN////// 

routes.get('/register', registerPage.index);
routes.post('/register/user', registerPage.register);

routes.get('/login', loginPage.index);

// SESSO DE REGISTER E LOGIN////// 

routes.get('/policy', policy.policy);
routes.get('/terms', terms.terms);
module.exports = routes;