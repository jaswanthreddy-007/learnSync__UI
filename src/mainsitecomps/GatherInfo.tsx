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


function GatherInfo() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/signup", {
        name,
        email,
        password,
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
          Hii{" "}
          <span className="inline  bg-gradient-to-r from-[#f6f6f6]  to-[#21279d] text-transparent bg-clip-text">
            Jaswanth
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
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your Name"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input
                      id="name"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password</Label>
                    <Input
                      id="name"
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
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










