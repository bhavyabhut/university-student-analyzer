import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Scrollbars } from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";
import Spinner from "../../Spinner";
import CustomResponsiveContainer from "./Container";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#fe0033",
  "#005fc4",
  "#cb8c02",
  "#a7a09b",
  "#9652ba",
  "#d603e5",
  "#57ff28",
  "#08cdef",
];

const renderCustomizedLabel = ({ percent, index }) =>
  `${(percent * 100).toFixed(0)}%`;

const Example = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/v1/college/chart/pie").then((data) => {
      data.json().then((data) => {
        setCollegeData(data.data);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Scrollbars
          thumbSize={100}
          autoHide
          style={{ height: "100%", width: "100%" }}
        >
          <CustomResponsiveContainer>
            <PieChart width={800} height={800}>
              <Pie
                data={collegeData}
                cx={210}
                cy={210}
                labelLine
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {collegeData.map((entry, index) => (
                  <Cell
                    style={{ cursor: "pointer" }}
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    onClick={() => history.push(`state/${entry.name}`)}
                  />
                ))}
              </Pie>
              }
              <Tooltip />
              <Legend />
            </PieChart>
          </CustomResponsiveContainer>
        </Scrollbars>
      )}
    </>
  );
};

export default Example;
