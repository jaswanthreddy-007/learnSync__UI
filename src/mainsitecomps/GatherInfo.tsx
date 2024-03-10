import React, { useState } from "react";
import axios from "axios";
import "./css/signup.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


function GatherInfo() {
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, name: "DSA" },
    { id: 2, name: "PYTHON" },
    { id: 3, name: "DBMS" },
    { id: 4, name: "DIP" },

    // Add more courses here
  ]);
  const [optedCourses, setOptedCourses] = useState([]);
  const username = sessionStorage.getItem("username");
  // console.log(username)


  // Function to handle course selection
  const handleCourseSelect = (course) => {
    setOptedCourses([...optedCourses, course]);
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Filter courses based on search text
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchText.toLowerCase())
  );


  const handleSubmit = async () => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/gatherinfo", {
        user,
        college,
        semester,
        branch,
        optedCourses,
      });
      window.location.href = "/gatherinfo";
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-600 flex justify-center pt-20">
        <h1 className="inline">
          {/* Hii{" "} */}
          <span className="inline  bg-gradient-to-r from-[#f6f6f6]  to-[#21279d] text-transparent bg-clip-text">
            {/* Jaswanth */}
          </span>{" "}
        </h1>{" "}
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <div className="w-3/4">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Please enter the following details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">College Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your college name"
                      onChange={(e) => setCollege(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Semester</Label>
                    <Input
                      id="name"
                      placeholder="Enter your semester"
                      onChange={(e) => setSemester(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Branch</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your branch"
                      onChange={(e) => setBranch(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Choose Some Courses</Label>
                    <Input
                      type="text"
                      placeholder="Search for courses"
                      value={searchText}
                      onChange={handleSearchInputChange}
                    />
                    <br></br>
                    <ul className="flex flex-wrap">
                      {searchText &&
                        filteredCourses.map((course) => (
                          <li key={course.id} className="w-1/3 px-2 mb-4">
                            <Button className="font-bold" onClick={() => handleCourseSelect(course)}>
                              + {course.name}
                            </Button>
                          </li>
                        ))}
                    </ul>
                    <h2>Opted Courses:</h2>
                    <ul>
                      {optedCourses.map((course) => (
                        <li key={course.id}>{course.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSubmit}>continue</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GatherInfo;










