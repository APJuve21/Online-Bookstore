var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//TO FIX
var CartSchema = new Schema({
    userid: { type: String, required: true, unique: true },
    quantity: { 
        _001:[String],
        _002:[String],
        _003:[String],
        _004:[String],
        _005:[String],
        _006:[String],
        _007:[String],
        _008:[String],
        _009:[String],
        _010:[String],
        _011:[String],
        _012:[String],
    }
});

module.exports = mongoose.model('Cart', CartSchema);