const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

ProjectSchema.plugin(mongoosePaginate)

mongoose.model('Project', ProjectSchema)