const EMPLOYEES = require('../../model/staffDataSchema')

async function viewEmployee(req, res) {
    try {
      let employeeData = await EMPLOYEES.find({}).populate('designationID')
      res.json(employeeData);
    } catch (error) {
      console.log(error);
      console.log("Internal server error");
      res.status(500).send({ message: "Internal server error" });
    }
  }

  module.exports ={
    viewEmployee
  }