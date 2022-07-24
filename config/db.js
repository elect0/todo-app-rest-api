const mongoose = require('mongoose');

const connectDB = () => {
  const mongoConnectionURL = process.env.MONGO_URI;
  const databaseName = 'test-8';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  };

  mongoose
    .connect(mongoConnectionURL, options)
    .then(() => console.log(`MongoDB connected`.america.bold))
    .catch((error) =>
      console.log(`Error connecting to MongoDB: ${error}`.red.underline.bold)
    );
};

module.exports = connectDB;
