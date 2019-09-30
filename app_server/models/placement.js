const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
    link: String,
    image: {data: Buffer, contentType: String},
    imageText: String
});

const placementGroup = new mongoose.Schema({
    placements: [placementSchema]
});

mongoose.model('Placements', placementGroup);