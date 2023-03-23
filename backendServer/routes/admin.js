const express = require("express");
const router = express.Router();
const login = require("../controller/admin/login");
const {addEmployee ,getEmployee} = require("../controller/admin/addEmployee");

router.post("/staffPortal", login);

router.route("/addEmployee").post(addEmployee).get(getEmployee);

module.exports = router;
