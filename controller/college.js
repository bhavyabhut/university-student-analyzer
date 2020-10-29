const College = require("../schemas/College");
const { resourceError, serverError } = require("../helper/errorHandler");
const { success } = require("../helper/successHandler");
const { NO_RESOURCE } = require("../consts");

exports.getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    success(res, colleges);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegeById = async (req, res) => {
  const { collegeId } = req.params;
  console.log(collegeId);
  if (!collegeId) resourceError(res, "Please enter college");
  try {
    const college = await College.findById(collegeId);
    if (college) success(res, college);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesByState = async (req, res) => {
  const { stateId } = req.params;
  if (!stateId) resourceError(res, "Please enter state");
  try {
    const regex = new RegExp(stateId, "i");
    const colleges = await College.find({ state: { $regex: regex } });
    if (colleges) success(res, colleges);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};

exports.getCollegesByLocation = async (req, res) => {
  const { locationId } = req.params;
  if (!locationId) resourceError(res, "Please enter city or location");
  try {
    const regex = new RegExp(locationId, "i");
    const colleges = await College.find({ city: { $regex: regex } });
    if (colleges) success(res, colleges);
    else resourceError(res, NO_RESOURCE);
  } catch (error) {
    serverError(res, error);
  }
};
