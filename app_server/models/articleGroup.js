const mongoose = require('mongoose');

const articleLinkSchema = new mongoose.Schema({
    link: String,
    image: {data: Buffer, contentType: String},
    header: String,
    text: String
});

const articleGroupSchema = new mongoose.Schema({
    articles: [articleLinkSchema]
});

mongoose.model('Articles', articleGroupSchema);