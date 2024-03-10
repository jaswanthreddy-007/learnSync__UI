import React, { useState, useEffect } from "react";
import "./css/externals.css"
import { Skeleton } from "@/components/ui/skeleton";
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

 

const External = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const testString = searchParams.get("test");
  const test = JSON.parse(decodeURIComponent(testString));

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable for loading state
  const useremail = sessionStorage.getItem("username");
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/questions?test_name=${encodeURIComponent(
            test.name
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
        setAnswers(Array(data.length).fill(""));
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleSubmit = async () => {
    const confirmSubmission = window.confirm(
      "Are you sure you want to submit your answers?"
    );

    if (confirmSubmission) {
      try {
        const response = await fetch("http://127.0.0.1:5000/submit-answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username:useremail,
            testName: test.name,
            answers: answers,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to submit answers");
        } else {
          window.location.href = "/home";
        }
      } catch (error) {
        console.error("Error submitting answers:", error);
      }
    }
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col space-y-3 m-5">
          <Skeleton className="h-[125px] w-[550px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[450px]" />
            <Skeleton className="h-4 w-[420px]" />
            <Skeleton className="h-4 w-[390px]" />
            <Skeleton className="h-4 w-[360px]" />
          </div>
        </div>
      ) : (
        <div className="container mt-4">
          {/* <div className="info">
            <p>Test Name: {test.name}</p>
            <p>Time: {test.time}</p>
            <p>Date: {test.date}</p>
          </div> */}

          <Card className="w-[1350px] bg-gray-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center font-bold text-xl">
                <p>Test: {test.name}</p>
                <p>Time: {test.time}</p>
                <p>Date: {test.date}</p>
              </CardTitle>
              <CardDescription>
                Please Read the questionas carefully and answer them
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {questions.map((question, index) => (
                  <Card className="bg-gray-700 mb-6">
                    <CardHeader>
                      <CardTitle
                        key={index}
                        class="flex justify-between items-center"
                      >
                        <p className="question-text">
                          {index + 1}: {question}
                        </p>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Input
                        type="text"
                        placeholder="Type Here"
                        value={answers[index]}
                        onChange={(e) =>
                          handleAnswerChange(index, e.target.value)
                        }
                        className="bg-gray-800"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              {/* <button className="submit-button" onClick={handleSubmit}>
                Submit Answers
              </button> */}
              <Button variant="destructive" onClick={handleSubmit}>
                Submit Answers
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default External;
