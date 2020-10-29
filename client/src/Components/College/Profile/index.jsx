import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageHeader, Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import MainDetails from "./MainDetails";
import CollegeStudent from "./CollegeStudent";
import Address from "./Address";
import Spinner from "../../Spinner";

const { TabPane } = Tabs;

const CollegeProfile = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);

  const { collegeId } = useParams();
  useEffect(() => {
    console.log(collegeId);
    setCollegeLoading(true);
    setStudentLoading(true);
    fetch(`http://localhost:5000/v1/college/${collegeId}`).then((data) =>
      data.json().then((data) => {
        setCollegeData(data.data);
        setCollegeLoading(false);
      })
    );
    fetch(`http://localhost:5000/v1/student/college/${collegeId}`).then(
      (data) =>
        data.json().then((data) => {
          setStudentData(data.data);
          setStudentLoading(false);
        })
    );
  }, [collegeId]);
  console.log(collegeData, studentData);
  return (
    <>
      {collegeLoading ? (
        <Spinner />
      ) : (
        <>
          <PageHeader title={collegeData.name} />
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  College Info
                </span>
              }
              key="1"
            >
              <MainDetails data={collegeData} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Students
                </span>
              }
              key="2"
            >
              <CollegeStudent data={studentData} loading={studentLoading} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Address
                </span>
              }
              key="3"
            >
              <Address data={collegeData} />
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  );
};

export default CollegeProfile;
