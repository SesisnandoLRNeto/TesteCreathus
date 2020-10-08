const express = require('express')

const ProjectController = require('./controllers/ProjectController')

const routes = express.Router()

routes.get('/projects', ProjectController.index)
routes.get('/projects/:id', ProjectController.show)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.destroy)

module.exports = routes
