const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      const token = req.headers.authorization.split(",")[1].split(":")[1].split("}")[0].split("\"")[1];

      if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
          if (err) {
           
            console.log("err msg",err.message)
            return res.status(401).json({ error: 'Unauthorized' })
          } else {
            // console.log(decodedToken)
            next();
          }
        })
      } else {
        return res.status(401).json({ error: "Authentication Required" }) 
      }
    } else {
      return res.status(401).json({ error: 'Unauthorized' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports = {
  requireAuth
}
