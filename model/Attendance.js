const mongoose = require("mongoose")

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    login: {
        type: Date,

    },
    logOut: {
        type: Date,

    }
})

module.exports = mongoose.model("attendance", attendanceSchema)