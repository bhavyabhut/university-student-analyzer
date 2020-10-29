const college = require("express").Router();

const {
  getCollegeById,
  getColleges,
  getCollegesByLocation,
  getCollegesByState,
} = require("../controller/college");

college.route("/").get(getColleges);
college.route("/:collegeId").get(getCollegeById);
college.route("/state/:stateId").get(getCollegesByState);
college.route("/location/:locationId").get(getCollegesByLocation);

module.exports = college;
