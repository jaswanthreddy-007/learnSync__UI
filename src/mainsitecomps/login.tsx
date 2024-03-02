// LoginPage.tsx
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

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });
      console.log(response.data)
      if (response.data.success) {
        sessionStorage.setItem("username", email);
        window.location.href = "/home";
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-box">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please enter your credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
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
          <Button onClick={handleSubmit}>Login</Button>
          <Button variant="ghost">
            <Link className="link" to="/signup">
              Signup
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;




