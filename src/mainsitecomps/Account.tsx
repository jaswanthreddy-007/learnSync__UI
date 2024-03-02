import React, { useState, useEffect } from "react";
import LoaderCOmp from "./Loader";
import Navbar from "./Navbar";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ActivityGraph from "./ActivityGraph";
const Account = () => {
  const [accountDetails, setAccountDetails] = useState(null);
  const imageurl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg";
  useEffect(() => {
    const email = sessionStorage.getItem("username");
    if (email) {
      fetch("http://127.0.0.1:5000/api/account_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setAccountDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching account details:", error);
        });
    }
  }, []);
  return (
    <div>
      <Navbar />
      {/* <h2>Account Details</h2> */}

      {accountDetails ? (
        <div className="p-3">
          <Card className="border-2 border-gray-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Account Details
              </CardTitle>
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-xl">
                    Name : {accountDetails.name}
                  </p>
                  <p className="font-bold text-xl">
                    Email : {accountDetails.email}
                  </p>
                </div>
                <div>
                  <img
                    src={imageurl}
                    alt="Profile"
                    className="w-[100px] h-[120px] rounded-full"
                  />
                  <p className="mt-5 font-bold"> Profile Photo</p>
                </div>
              </CardContent>
            </CardHeader>
          </Card>

          <Tabs defaultValue="overview" className="space-y-4  mt-5 ">
            <TabsList className="flex justify-between  mr-20 ml-20 align-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Hours spent studying
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">451.89 Hrs</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      No: of courses opted till now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">
                      {/* +180.1% from last month */}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      No:of courses completed
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground">
                      {/* +19% from last month */}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Best class rank
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1</div>
                    <p className="text-xs text-muted-foreground">
                      5 months ago
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 ">
                  <CardHeader>
                    <CardTitle>Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <ActivityGraph></ActivityGraph>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Performances</CardTitle>
                    <CardDescription>
                      You gave 14 tests this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{/* <RecentSales /> */}</CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div
          style={{
            width: "100px",
            margin: "auto",
          }}
        >
          <LoaderCOmp />
        </div>
      )}
    </div>
  );
};

export default Account;
