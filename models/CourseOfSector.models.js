
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    CourseOfSectorID:String,
    CourseOfSectorName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('CourseOfSector',Schema);