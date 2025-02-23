const Contorllers = require('../contorllers/Eduction.contorllers');
const router = require('express').Router();


router.post("/Eduction/create", Contorllers.create);
router.get("/Eduction/read", Contorllers.read);
router.post("/Eduction/update", Contorllers.update);
router.post("/Eduction/delete", Contorllers.delete);

module.exports=router;  