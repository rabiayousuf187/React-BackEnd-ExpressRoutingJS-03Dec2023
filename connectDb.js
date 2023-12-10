const mongoose = require('mongoose');

const connectToDatabase = async function () {
    try {
        await mongoose.connect('mongodb+srv://admin:latitudee6540@cluster0.mdb2ow2.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase