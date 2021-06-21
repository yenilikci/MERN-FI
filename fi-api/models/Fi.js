const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FiSchema = new Schema({
  gonderenIsim: String,
  emailAdres: String,
  fikirTuru: String,
  fikir: String
})

module.exports = mongoose.model("Fi", FiSchema)
