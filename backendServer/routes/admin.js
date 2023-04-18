const express = require("express");
const router = express.Router();
const login = require("../controller/admin/login");
const {addEmployee ,getEmployee} = require("../controller/admin/addEmployee");
const {getAuthorData,viewGenre,viewBooks}= require('../controller/admin/viewcatalogue');
const { getBookData, userSearch, checkout } = require("../controller/admin/checkout");
const { viewEmployee } = require("../controller/admin/viewEmployees");
const { viewUsers } = require("../controller/admin/manageUsers");
const { returnRenew } = require("../controller/admin/returnRenew");
const { requireAuth } = require("../middlewares/isAuthenticated");
const { verifyAdmin } = require("../controller/admin/verify");

router.post("/staffPortal", login);

router.route("/addEmployee").post(addEmployee).get(getEmployee);
router.route("/viewEmployees").get(viewEmployee);

router.route('/checkout').get(getBookData).post(checkout)
router.route('/viewAuthors').get(getAuthorData)
router.route('/viewGenre').get(viewGenre)
router.route('/viewBooks').get(viewBooks)
router.route('/viewUsers').get(viewUsers)
router.route('/userSearch').post(userSearch)
router.route('/returnRenew').post(returnRenew)
router.route('/verifyAdmin').get(requireAuth,verifyAdmin)





module.exports = router;
