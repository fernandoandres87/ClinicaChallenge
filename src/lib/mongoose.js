const mongoose = require("mongoose");
const { success, error } = require("consola");
require("dotenv").config();

exports.conectedDB = async () => {
  try {
    await mongoose.connect(process.env.CLINICPROYC_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    success({
      badge: true,
      message: `Data Base Connected`,
    });
  } catch (err) {
    error({
      badge: true,
      message: `Error: ${err.message}`,
    });
    process.exit(1);
  }
};

