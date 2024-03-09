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
import { Footer } from "@/components/Footer";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [recommendations,setRecommendations]=useState([]);
  const [popular_courses, setPopular_courses] = useState([]);

  useEffect(() => {
    // Fetch courses based on username from local storage
    const username = sessionStorage.getItem("username");
    if (username) {
      fetch(`http://127.0.0.1:5000//courses?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          setCourses(data["opted_courses"]);
          setRecommendations(data["total_recommendations"]);
          setPopular_courses(data["popular_courses"]);
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
              <Link to={`/course/${course}`} className="card-link" key={index}>
                <div className="w-[380px] h-[200px] bg-gradient-to-br from-gray-900 to-rose-900 rounded-lg overflow-hidden shadow-lg relative">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-white text-3xl font-bold">
                      {course.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {courses.length === 0 && <p>No courses opted yet.</p>}
          </div>
        </div>
        <br></br>
        <div>
          <h2>Recommendations</h2>
          <div className="card-container">
            {recommendations.map((recommend, index) => (
              <Link
                to={`/course/${recommend}`}
                className="card-link"
                key={index}
              >
                <div className="w-[380px] h-[200px] bg-gradient-to-br from-gray-900 to-gray-400 rounded-lg overflow-hidden shadow-lg relative">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-white text-3xl font-bold">
                      {recommend.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {courses.length === 0 && <p>No courses opted yet.</p>}
          </div>
        </div>
        <br></br>
        <div>
          <h2>Popular courses</h2>
          <div className="card-container">
            {popular_courses.map((course, index) => (
              <Link to={`/course/${course}`} className="card-link" key={index}>
                <div className="w-[380px] h-[200px] bg-gradient-to-br from-gray-900 to-green-400 rounded-lg overflow-hidden shadow-lg relative">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-white text-3xl font-bold">
                      {course.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {courses.length === 0 && <p>No courses opted yet.</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
