const mongoose = require("mongoose");

// xtoni Que és Schema?
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value == "") throw new Error("El camp name del team no pot estar buid");
    },
  }
});

/**
 * Mètode que he creat jo, seguint  https://mongoosejs.com/docs/guide.html#statics
 * Assigns a function to the "statics" object of an Schema
 * 
 * @param {string} name  Expressió regular a buscar
 */
TeamSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};


const Team = mongoose.model("Team", TeamSchema);

//exports
module.exports = Team;
