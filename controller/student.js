const Student = require("../schemas/Student");

exports.getStudentById = (req, res, next) => {
  res.send("studentId");
};

exports.getStudentsByCollegeId = (req, res, next) => {
  res.send("students by collegeid");
};

