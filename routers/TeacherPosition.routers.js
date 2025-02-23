const Contorllers = require('../contorllers/TeacherPosition.contorllers');
const router = require('express').Router();


router.post("/TeacherPosition/create", Contorllers.create);
router.get("/TeacherPosition/read", Contorllers.read);
router.post("/TeacherPosition/update", Contorllers.update);
router.post("/TeacherPosition/delete", Contorllers.delete);

module.exports=router;  