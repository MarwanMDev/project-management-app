const mongoose = require('mongoose');

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_DB_URI);

  console.log(
    `MongoDB Connected to ${connection.connection.host}`.cyan
      .underline.bold
  );
};

module.exports = connectDb;
