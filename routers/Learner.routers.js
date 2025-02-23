const Contorllers = require('../contorllers/Learner.contorllers');
const router = require('express').Router();


router.post("/Learner/create", Contorllers.create);
router.get("/Learner/read", Contorllers.read);
router.post("/Learner/update", Contorllers.update);
router.post("/Learner/delete", Contorllers.delete);

module.exports=router;  