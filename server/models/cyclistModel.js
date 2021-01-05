const mongoose = require("mongoose");

// xtoni Que és Schema?
const CyclistSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") throw new Error("El camp nom no pot estar buid");
    },
  },
  naixement: {
    type: Date,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") throw new Error("El camp naixement no pot estar buid");
    },
  },
  pes: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") throw new Error("El camp pes no pot estar buid");
    },
  },
  altura: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") throw new Error("El camp altura no pot estar buid");
    },
  },
});

/**
 * Mètode que he creat jo, seguint  https://mongoosejs.com/docs/guide.html#statics
 * Assigns a function to the "statics" object of an Schema
 * 
 * @param {string} name  Expressió regular a buscar
 */
CyclistSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};


const Cyclist = mongoose.model("Cyclist", CyclistSchema);

//exports
module.exports = Cyclist;
