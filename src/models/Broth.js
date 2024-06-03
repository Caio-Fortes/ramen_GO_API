const mongoose = require('mongoose');

const Broth = mongoose.model('broth', {
    id: String,
    imageInactive: String,
    ImageActive: String,
    name: String,
    description: String,
    price: Number
})

module.exports = Broth;