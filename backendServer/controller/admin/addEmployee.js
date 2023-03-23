const mongoose = require('mongoose');
const STAFFDATA = require('../../model/staffDataSchema');
const DESIGNATION = require('../../model/designationSchema');

const addEmployee = async (req,res) => {
    console.log(req.body)
    const [firstName , lastName , email , password] = req.body;

    let newstaff = new STAFFDATA({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
});
// await newstaff.save();
} 

const getEmployee = async (req,res) => {
    let designation = await DESIGNATION.find({})
    res.json(designation);
}
module.exports = {addEmployee , getEmployee};