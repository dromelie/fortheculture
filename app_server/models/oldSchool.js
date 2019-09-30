const mongoose = require('mongoose');

const oldSchoolSchema = new mongoose.Schema({
    image: {data: Buffer, contentType: String},
    name: String,
    text: String,
    link: String
});

mongoose.model('OldSchool', oldSchoolSchema);