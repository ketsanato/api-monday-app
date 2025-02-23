
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    PersonID:String,
    PersonName:String,
    PersonSurenam:String,
    Birthday:Date,
    Email:String,
    Tel:String,
    PersonStatus:String,
    VillageID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Village'}],
    GenderID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Gender'}],
    JobID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Job'}],

    created_date:{type:Date},
    updated_date:{type:Date}
});
 
module.exports = mongoose.model('Person',Schema)