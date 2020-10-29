import React, { useState, useEffect } from "react";
import { Table } from "antd";
import columns from "./columns";
const Student = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/v1/student/").then((data) => {
      data.json().then((data) => {
        setData(data.data);
        setLoading(false);
      });
    });
  }, []);
  console.log(data);
  return (
    <Table
      loading={loading}
      columns={columns}
      bordered
      rowKey={(render) => render._id}
      dataSource={data}
      pagination
      scroll={{ x: 1300 }}
    />
  );
};

export default Student;
