const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  business: { type: String },
  phoneNumber: { type: String },
  createdDate: { type: String, required: true },
  lastServiced: { type: String },
  accountNotes: { type: String },
});

ClientSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

ClientSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Client', ClientSchema);
