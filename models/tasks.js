var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    //todo DB Update tasks model with ACTUAL model
    name: String
});

module.exports = mongoose.model('Task', TaskSchema);