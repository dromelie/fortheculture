const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    image: {data: Buffer, contentType: String},
    imageTitle: String,
    imageBio: String,
    link: String
 });

const carouselSchema = new mongoose.Schema({
    slides: [slideSchema]
});

mongoose.model('Carousel', carouselSchema);