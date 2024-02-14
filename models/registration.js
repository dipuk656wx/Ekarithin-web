const mongoose = require('mongoose');
const { Schema } = mongoose;

const register = new Schema({
  Email : String,
  EventsRegistered : Array,
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'registrations'
});

const Register = mongoose.model('registrations', register);

module.exports = Register;