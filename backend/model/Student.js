const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name:String,
    subject:String,
    score:Number
});

module.exports = mongoose.model("students",studentSchema);