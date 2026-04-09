const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    course: String,
    skills: [ String ],
    address: { city: String, pincode: Number },
    isActive: Boolean,
    marks: [ { sunject: String, score: Number, total: Number } ],
    status: String,
    verified: Boolean
});


const user = mongoose.model("user", userSchema);

module.exports=user;
