const User = require('../contorllers/login.contorllers');
const router = require('express').Router();



router.post("/users/login",User.userLogin);
router.post("/users/register",User.register);

router.post("/users/checktoken",User.checkToken);
module.exports=router;