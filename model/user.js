var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type : String,
        required: [true, 'Nombre es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'Apellido es obligatorio']
    },
    age: {
        type: Number
    },
    birthDate: {
        type: Date
    } 

})

const User = mongoose.model('users', userSchema);

module.exports = User;