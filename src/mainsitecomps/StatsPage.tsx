import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import Navbar from "./Navbar";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  LineElement
);
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./css/statspage.css"
import "./Footer"
import Footer from "./Footer";

const StatsPage = () => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [barChartOptions, setBarChartOptions] = useState({});

  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [pieChartOptions, setPieChartOptions] = useState({});

  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [lineChartOptions, setLineChartOptions] = useState({});

  const [selectedUser, setSelectedUser] = useState("vivek"); // Default user
  const [userNames, setUserNames] = useState([]); // Array to store user names

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data2.csv");
        const text = await response.text();
        const results = Papa.parse(text, { header: true });
        const data = results.data;
        const headers = Object.keys(results.data[0]);
        console.log(headers)
        const getRandomColor = () => {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        // Extract user names
        const uniqueUserNames = [...new Set(data.map((item) => item.user))];
        setUserNames(uniqueUserNames);
        console.log(uniqueUserNames);

        // Extract subjects from the headers excluding the "user" column
        const subjects = Object.keys(data[0]).slice(1);

        // Bar chart data
        setBarChartData({
          labels: uniqueUserNames,
          datasets: subjects.map((subject, index) => ({
            label: subject,
            data: data.map((item) => item[subject]),
            backgroundColor: getRandomColor(), // Assign a random color
          })),
        });

        setBarChartOptions({
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top",
            },
            title: {
              display: true,
              text: "Marks bar chart",
            },
          },
        });

        // Doughnut chart data - Average marks of each student
        const averageMarks = uniqueUserNames.map((userName) => {
          const userMarks = data.filter((item) => item.user === userName);
          const totalMarks = subjects.reduce(
            (acc, subject) => acc + userMarks[0][subject],
            0
          );
          return totalMarks / subjects.length;
        });

        setPieChartData({
          labels: uniqueUserNames,
          datasets: [
            {
              data: averageMarks,
              backgroundColor: uniqueUserNames.map(() => getRandomColor()), // Assign random colors
              borderColor: "black",
            },
          ],
        });

        setPieChartOptions({
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "bottom",
              textAlign: "left",
            },
            title: {
              display: true,
              text: "Average Marks of each student",
            },
          },
        });

        // Line chart data for selected user
        const userData = data.filter((item) => item.user === selectedUser);

        setLineChartData({
          labels: subjects,
          datasets: [
            {
              label: selectedUser,
              data: subjects.map((subject) => userData[0][subject]),
              borderColor: getRandomColor(),
              fill: false,
            },
          ],
        });

        setLineChartOptions({
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: `Test Scores - ${selectedUser}`,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedUser]);

  // Handle dropdown change
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="statscontent">
        <h1 style={{ textAlign: "center" }}>Students Dashboard</h1>
        <div
          className="cont"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "1300px",
              height: "800px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="barchart">
              {barChartData.datasets.length > 0 ? (
                <Bar options={barChartOptions} data={barChartData} />
              ) : (
                <div className="loading">Loading...</div>
              )}
            </div>
            <div className="piechart">
              {pieChartData.datasets.length > 0 ? (
                <Doughnut options={pieChartOptions} data={pieChartData} />
              ) : (
                <div className="loading">Loading...</div>
              )}
            </div>
          </div>
          <div
            style={{ width: "1000px", height: "500px", marginTop: "-300px" }}
          >
            <select value={selectedUser} onChange={handleUserChange}>
              {userNames.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
            {lineChartData.datasets.length > 0 ? (
              <Line options={lineChartOptions} data={lineChartData} />
            ) : (
              <div className="loading">Loading...</div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StatsPage;

