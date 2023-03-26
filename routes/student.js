const express=require('express')
const studentController=require("../controllers/student")
const router=express.Router();

router.post('/student',studentController.studentEnrollment)
router.get("/student",studentController.getStudentData)
router.put("/student",studentController.updateStudentData)
router.delete("/student",studentController.deleteStudentData)

module.exports=router;