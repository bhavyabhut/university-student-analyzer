import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageHeader, Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import MainDetails from "./MainDetails";
import Address from "./Address";
import Spinner from "../../Spinner";

const { TabPane } = Tabs;

const StudentProfile = () => {
  const [studentData, setStudentData] = useState([]);
  const [studentLoading, setStudentLoading] = useState(false);

  const { studentId } = useParams();
  useEffect(() => {
    console.log(studentId);
    setStudentLoading(true);
    fetch(`http://localhost:5000/v1/student/${studentId}`).then((data) =>
      data.json().then((data) => {
        setStudentData(data.data);
        setStudentLoading(false);
      })
    );
  }, [studentId]);
  return (
    <>
      {studentLoading ? (
        <Spinner />
      ) : (
        <>
          <PageHeader title="Student profile" />
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Personal info
                </span>
              }
              key="1"
            >
              <MainDetails data={studentData} />
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
              <Address data={studentData} />
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  );
};

export default StudentProfile;
