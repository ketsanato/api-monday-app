const Contorllers = require('../contorllers/EducationalDetail.contorllers');
const router = require('express').Router();


router.post("/EducationalDetail/create", Contorllers.create);
router.get("/EducationalDetail/read", Contorllers.read);
router.post("/EducationalDetail/update", Contorllers.update);
router.post("/EducationalDetail/delete", Contorllers.delete);

module.exports=router;  