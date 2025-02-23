
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    EducationalInstitutionTypeID:String,
    EducationalInstitutionTypeName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('EducationalInstitutionType',Schema);