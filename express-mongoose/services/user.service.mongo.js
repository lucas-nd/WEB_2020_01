const UserModel = require('../models/user.model');

class UserService{
    static register(req, res){
        UserModel.create(req.body).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    static list(req, res){
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        );
    }

    static update(req, res){
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    static delete(req, res){
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }

    static retrieve(req, res){
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }
}

module.exports = UserService;