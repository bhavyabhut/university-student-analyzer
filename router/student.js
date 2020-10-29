const student = require("express").Router();

const {
  getStudentById,
  getStudentsByCollegeId,
} = require("../controller/student");

student.route("/college/:collegeId").get(getStudentsByCollegeId);
student.route("/:studentId").get(getStudentById);

module.exports = student;
