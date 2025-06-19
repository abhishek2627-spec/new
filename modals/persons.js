const { uniq } = require('lodash');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    } ,
    age: Number,
    work: {
        type: String,
        enum: ['student', 'teacher', 'engineer'],
        required: true
    },
    mobile: {
        type: Number,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid 10 digit number!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    } 
});

// create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;