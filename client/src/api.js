const API = {
  students: "http://localhost:5000/v1/student/",
  student: "http://localhost:5000/v1/student/:studentId",
  colleges: "http://localhost:5000/v1/college/",
  college: "http://localhost:5000/v1/college/:collegeId",
  collegeStudent: "http://localhost:5000/v1/student/college/:collegeId",
  collegeByState: "http://localhost:5000/v1/college/state/:stateId",
  collegeByLocation: "http://localhost:5000/v1/college/location/:locationId",
  collegeChart: "http://localhost:5000/v1/college/chart/pie",
};
export default API;
