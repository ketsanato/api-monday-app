const Contorllers = require('../contorllers/CourseOfSector.contorllers');
const router = require('express').Router();


router.post("/CourseOfSector/create", Contorllers.create);
router.get("/CourseOfSector/read", Contorllers.read);
router.post("/CourseOfSector/update", Contorllers.update);
router.post("/CourseOfSector/delete", Contorllers.delete);

module.exports=router;  