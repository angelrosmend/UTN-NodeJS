const mongoose = require('mongoose');

//DATABASE

const URI = 'mongodb://localhost/utn-ecommerse';

mongoose.connect(URI, {useNewUrlParser: true})
            .then(db => console.log('DB is connected'))
            .catch(err => console.error(err));

module.exports = mongoose;