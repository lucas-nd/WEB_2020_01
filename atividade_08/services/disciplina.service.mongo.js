const DisciplinaModel = require('../models/disciplina.model');

class DisciplinaService{
    static register(req, res){
        DisciplinaModel.create(req.body).then(
            (disciplina)=>{
                res.status(201).json(disciplina);
            }
        );
    }

    static list(req, res){
        DisciplinaModel.find().then(
            (disciplinas)=>{
                res.status(201).json(disciplinas);
            }
        );
    }

    static update(req, res){
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (disciplina)=>{
                res.status(201).json(disciplina);
            }
        );
    }

    static delete(req, res){
        DisciplinaModel.findByIdAndRemove(req.params.id).then(
            (disciplina)=>{
                res.status(201).json(disciplina);
            }
        );
    }

    static retrieve(req, res){
        DisciplinaModel.findById(req.params.id).then(
            (disciplina)=>{
                res.status(201).json(disciplina);
            }
        );
    }
}

module.exports = DisciplinaService;