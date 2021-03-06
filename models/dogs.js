const mongoose = require('../db/connection');

const dogSchema = mongoose.Schema({
    name: {type: String, title: 'Name', required: true},
    location: {type: String},
    age: {type: String, title: 'Age', required: true},
    photo: [{type: String, title: 'Photo'}],
    tagline: {type: String},
    description: {type: String, title: 'Description'},
    breed: [{ type: String, required: true }],
    weight: {type: Number},
    goodWithDogs: {type: Boolean},
    goodWithKids: {type: Boolean},
    houseTrained: {type: Boolean},
    vaccinated: {type: Boolean},
    sex: {type: String},
    fixed: {type: Boolean},
    color: {type: String}
});

module.exports = mongoose.model('Dog', dogSchema);