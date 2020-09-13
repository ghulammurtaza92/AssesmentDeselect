const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let student = new Schema({
    id: {
        type: Number
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
      },
      nationality: {
        type: String
    },
}, {
    collection: 'students'
})

module.exports = mongoose.model('StudentModel', student)