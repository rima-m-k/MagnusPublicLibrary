const STAFFDATA = require("../../model/staffDataSchema");
const DESIGNATION = require("../../model/designationSchema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    try {


        let email = req.body.email.trim();
        let password = req.body.password.trim();
        let designationID = req.body.designationID.trim();
        const createToken = (id) => {
            return jwt.sign({id} , 'magnus public library' )
        }
        let admin = await STAFFDATA.find({email: email}).populate("designationID");
        if (admin.length === 0) {
            res.status(401).send({message: "Email not found"});
        } else {
            
            console.log(admin[0].designationID.designatinId)
            
            let comparepassword = await bcrypt.compare(password, admin[0].password)
            if (email === admin[0].email) { 
                console.log(comparepassword)
                if (comparepassword) {
                    console.log(designationID,"desID")
                    console.log(admin[0].designationID.designation,"adminID")
                    if (designationID === admin[0].designationID.designationId) {
                         // res.cookie('token ', token); or local storage
                        const token= createToken(admin[0]._id)
                        res.cookie('jwt ', token);
                        res.json({
                            token: token,
                            data:{email},
                             message: "logged in successfully"});

                    } else {
                        console.log(admin[0].designationID.designatinId)
                        res.status(401).send({message: "invalid id"});
                    }
                } else {
                    res.status(401).send({message: "invalid password"});
                }
            } else { 
                res.status(401).send({message: "email not found"});
            }

            // catch ((error) => {
            // res.status(500).send({ message: "error comparing password" });
            // });
        }
    } catch (error) {
        console.log(error);

        res.status(500).send({message: "error "});
    }
};
module.exports = login;
