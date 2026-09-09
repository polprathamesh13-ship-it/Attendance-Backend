const { getAttendance, updateAttendance, postAttendance } = require("../contoller/AttendConttoler")
const { auth } = require("../middlerware/auth")

const route = require("express").Router()

route.get("/", getAttendance)
route.put("/:id",auth, updateAttendance)
route.post("/",auth, postAttendance)

module.exports = route