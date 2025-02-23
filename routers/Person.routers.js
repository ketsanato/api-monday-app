const Contorllers = require('../contorllers/Person.contorllers');
const router = require('express').Router();


router.post("/Person/create", Contorllers.create);
router.get("/Person/read", Contorllers.read);
router.post("/Person/update", Contorllers.update);
router.post("/Person/delete", Contorllers.delete);

module.exports=router;  