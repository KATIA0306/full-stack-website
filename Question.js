const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    content: { type: String },
    options: [String],
});
  
  module.exports = mongoose.model('/api/questions', QuestionSchema);