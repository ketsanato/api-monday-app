const Contorllers = require('../contorllers/EmployeeType.contorllers');
const router = require('express').Router();


router.post("/EmployeeType/create", Contorllers.create);
router.get("/EmployeeType/read", Contorllers.read);
router.post("/EmployeeType/update", Contorllers.update);
router.post("/EmployeeType/delete", Contorllers.delete);

module.exports=router;  