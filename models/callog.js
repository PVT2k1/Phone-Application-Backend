const mongoose = require('mongoose');

const CallogSchema = new mongoose.Schema(
    {
        phoneNumber: { type: String },
        startTime: { type: String },
        duration: { type: Number }
    }
);
  
module.exports = mongoose.model('Callog', CallogSchema);