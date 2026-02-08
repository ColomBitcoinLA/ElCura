const mongoose = require("mongoose");

const connectDb = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI no está definido en variables de entorno");
  }

  await mongoose.connect(mongoUri, {
    autoIndex: true
  });
};

module.exports = { connectDb };
