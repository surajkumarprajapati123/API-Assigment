const mongoose = require('mongoose');

const Dbconnections = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected successfully. Host: ${connection.connection.host}`);
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
       ;
    }
};

module.exports = Dbconnections;
