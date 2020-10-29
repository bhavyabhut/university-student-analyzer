const College = require('../schemas/College')

exports.getColleges = (req,res,next)=>{
    res.send('all clgs')

}

exports.getCollegeById = (req, res, next) => {
  res.send(" clg by id");
};


exports.getCollegesByState = (req,res,next)=>{
    res.send(' clgs by state')

}

exports.getCollegesByLocation = (req,res,next)=>{
    res.send(' clgs by location')

}