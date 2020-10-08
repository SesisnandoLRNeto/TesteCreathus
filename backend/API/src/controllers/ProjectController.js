const mongoose = require('mongoose')

const Project = mongoose.model('Project')

module.exports = {
    //listar projetos
    async index(req, res){

        const { page = 1 } = req.query
        
        const projects = await Project.paginate({}, { page, limit: 10 })

        return res.json(projects)
    },
    //armazenar e criar projeto
    async store(req, res){
        
        const project = await Project.create(req.body)

        return res.json(project)
    },
    //detalhamento do projeto
    async show(req, res){
        const project = await Project.findById(req.params.id)

        return res.json(project)
    },
    //atualizar projeto
    async update(req, res){
        const projectUpdate = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(projectUpdate)
    },
    //deletar projeto
    async destroy(req, res){
        const projectDel = await Project.findByIdAndRemove(req.params.id)

        return res.json(projectDel)
    }
}