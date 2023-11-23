const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/portfolio';

mongoose
    .connect(url)
    .then(() => { console.log('DB Connected'); })
    .catch((err) => { console.log(err); })


