const bcrypt = require("bcrypt");
const USERDATA = require("../../model/userSchema");
const jwt = require("jsonwebtoken");

async function userLogin(req, res) {
  try {
    const createToken = (id) => {
      return jwt.sign({ id }, process.env.SECRET_KEY);
    };
    const user = await USERDATA.findOne({ email: req.body.email });
    if (user) {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (checkPassword === true) {
        const token = createToken(user._id);
        
        let userID = user._id;
        res.cookie("token", token);
        res.json({
          token: token,
          data: { userID },
          message: "logged in successfully",
        });
      } else {
        res.status(401).send({ message: "invalid  password" }); 
      }
    } else {
      res.status(401).send({ message: "email not registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal error");
  }
}
module.exports = { userLogin };
