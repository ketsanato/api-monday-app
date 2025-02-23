const User = require('../contorllers/users1.contorllers');
const router = require('express').Router();


router.get("/users1/read",User.readUsers);
router.post("/users1/create",User.createUsers);
router.post("/users1/update",User.updateUsers);
router.post("/users1/delete",User.deleteUsers);
router.get("/users1/read1",User.readUsers1);
router.get("/users1/sendotp",User.SendOTP);

module.exports=router;