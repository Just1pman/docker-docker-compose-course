const { db } = require('../configuration/index')
const mongoose = require('mongoose');

module.exports.connectDb = () => {
  mongoose.connect(db, { useNewUrlParser: true })

  return mongoose.connection
}