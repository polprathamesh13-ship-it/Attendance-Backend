const jwt = require("jsonwebtoken")

exports.auth = async (req, res, next) => {
    try {
        const token = req.header("auth-token")
        const verifyToken = await jwt.verify(token, process.env.SEC)
        if (!verifyToken) return res.status(500).json({ errors: true, message: "user is invalid" })
        next()
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}