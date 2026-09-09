const { getUser, register, login } = require("../contoller/UserConttoler")

const route = require("express").Router()

route.get("/", getUser)
route.post("/", register)
route.post("/login", login)

module.exports = route