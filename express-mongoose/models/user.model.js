var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    senha: {type: String, required: true, max: 100},
    idade: {type: String, required: true, max: 100}
});

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;