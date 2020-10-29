const student = require("express").Router();

const {
  getStudentById,
  getStudentsByCollegeId,
} = require("../controller/student");

student.route("/:studentId").get(getStudentById);
student.route("/college/:collegeId").get(getStudentsByCollegeId);

module.exports = student;
