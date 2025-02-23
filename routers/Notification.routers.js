const Contorllers = require('../contorllers/Notification.contorllers');
const router = require('express').Router();


router.post("/Notification/push", Contorllers.create);

module.exports=router;  