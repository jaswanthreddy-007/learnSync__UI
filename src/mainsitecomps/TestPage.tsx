import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/testpage.css"; // Import the CSS file for styling
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";import LoaderCOmp from "./Loader";


const TestPage = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Fetch tests from the server
    fetch("http://127.0.0.1:5000/tests")
      .then((response) => response.json())
      .then((data) => {
        setTests(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching tests:", error);
      });
  }, []); // Empty dependency array to fetch tests only once when component mounts

  return (
    <>
      <Navbar />
      <div className="testlist">
        <p className="font-bold text-4xl p-5">Available Tests</p>
        {isLoading ? (
          <div
            style={{
              width: "100px",
              margin: "auto",
            }}
          >
            <LoaderCOmp />
          </div>
        ) : (
          <div className="flex justify-between  items-center pl-40 pr-40 mt-10">
            {tests.map((test, index) => (
              <div key={index} className="test-card">
                <Link
                  to={`/external?test=${encodeURIComponent(
                    JSON.stringify(test)
                  )}`}
                  className="test-link"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{test.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="card-text">
                        <strong>Time:</strong> {test.time}
                      </p>
                      <p className="card-text">
                        <strong>Date:</strong> {test.date}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TestPage;