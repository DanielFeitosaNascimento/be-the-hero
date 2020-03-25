const express = require('express');
const Ongcontroller = require('./Controllers/OngsController');
const IncidentController = require('./Controllers/IncedentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', ProfileController.index);

routes.post('/incedents', IncidentController.create);
routes.get('/incedents', IncidentController.index);
routes.delete('/incedents/:id', IncidentController.delete);

module.exports = routes;

