const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config.env' });

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'test') {
      var dbName = 'testing';
    } else {
      var dbName = 'production';
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      dbName
    });

    console.log(`MongoDB Connected to ${dbName} DB...`);
    return db;
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
