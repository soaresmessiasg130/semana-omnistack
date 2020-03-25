const express = require('express');

const OngController = require('./controllers/OngContoller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//SESSION ROUTE
routes.post('/sessions', SessionController.create);
//ONG's Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//Incidents's Routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//Profiles's Routes
routes.get('/profile', ProfileController.index);

module.exports = routes;