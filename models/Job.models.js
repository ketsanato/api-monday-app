
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    JobID:String,
    JobName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Job',Schema);