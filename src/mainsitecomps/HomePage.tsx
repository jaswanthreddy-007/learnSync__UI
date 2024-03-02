import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses based on username from local storage
    const username = sessionStorage.getItem("username");
    if (username) {
      fetch(`http://127.0.0.1:5000//courses?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          setCourses(data["opted_courses"]);
          console.log(data);
        })
        .catch((error) => console.error("Error fetching courses:", error));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="homecontent">
        <h2>Opted Courses</h2>
        <br></br>
        <div>
          <div className="card-container">
            {courses.map((course, index) => (
              <Link to={`/course/${course}`} className="card-link">
                <Card className="w-[380px]">
                  <CardHeader className="">
                    <CardTitle>{course}</CardTitle>
                  </CardHeader>
                  {/* <CardContent className="grid gap-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{course}</h5>
                      
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  <Button className="w-full">
                    <Check className="mr-2 h-4 w-4" /> Mark all as read
                  </Button>
                </CardFooter> */}
                </Card>
              </Link>
            ))}
            {courses.length === 0 && <p>No courses opted yet.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
