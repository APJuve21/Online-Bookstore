const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//TO FIX
const userSchema = new Schema({
    userid: { 
        type: String, 
        required: true},
    pw: { 
        type: String, 
        required: true},
    _001:{
        type: Number
    },
    _002:{
        type: Number
    },
    _003:{
        type: Number
    },
    _004:{
        type: Number
    },
    _005:{
        type: Number
    },
    _006:{
        type: Number
    },
    _007:{
        type: Number
    },
    _008:{
        type: Number
    },
    _009:{
        type: Number
    },
    _010:{
        type: Number
    },
    _011:{
        type: Number
    },
    _012:{
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);