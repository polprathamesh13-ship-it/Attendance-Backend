
const Attendance = require("../model/Attendance")

exports.postAttendance = async (req, res) => {
    try {


        const data = await Attendance.create(req.body)

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.getAttendance = async (req, res) => {
    try {


        const data = await Attendance.find().populate("userId")

        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.updateAttendance = async (req, res) => {
    try {
        const data = await Attendance.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}