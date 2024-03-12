import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/coursevedio.css";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
// const PLAYLIST_ID = 'PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK';
const API_KEY = "AIzaSyDHcE1_ijkP_viU1vyOis3_6X4eukikuwM"; // Replace with your actual API key

const CourseVedio = () => {
  const { courseName } = useParams();
  const [playlistUrl, setPlaylistUrl] = useState(

  );
  const [firstVideoLink, setFirstVideoLink] = useState("");

  const [playlistItems, setPlaylistItems] = useState([]);
useEffect(() => {
  const fetchPlaylisturl = async () => {
    try {
      const playlistUrlResponse = await axios.post(
        "http://127.0.0.1:5000/playlist_id",
        { courseName }
      );
      const playlistUrlData = playlistUrlResponse.data;
      console.log(playlistUrlData["playlist_id"]);
      setPlaylistUrl(playlistUrlData["playlist_id"]);
      setFirstVideoLink(playlistUrlData["first_vedio_link"]);
      console.log(firstVideoLink)
      if (firstVideoLink) {
        document.getElementById("player-iframe").src = firstVideoLink;
      }
      // Call fetchPlaylistItems only after fetchPlaylisturl is completed
      fetchPlaylistItems(playlistUrlData["playlist_id"]);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  fetchPlaylisturl();
}, [courseName]);

const fetchPlaylistItems = async (playlistId) => {
  try {
    console.log("in the google call", playlistId);
    const response = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setPlaylistItems(data["items"]);
  } catch (error) {
    console.error("Error fetching playlist items:", error);
  }
};
  const getVideoIdFromLink = (link) => {
    if(link){
    const urlParams = new URLSearchParams(new URL(link).search);
    return urlParams.get("v");
    }
  };

  // Construct embed link
  const getEmbedLink = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };
        // console.log(playlistItems);


  return (
    <>
      <Navbar />
      <div className="App">
        <div id="player">
          <iframe
            width="740"
            height="390"
            src={getEmbedLink(getVideoIdFromLink(firstVideoLink))}
          ></iframe>
          <p className="playlist-url">
            Playlist URL:{" "}
            <a href={`https://www.youtube.com/playlist?list=${playlistUrl}`}>
              https://www.youtube.com/playlist?list={playlistUrl}
            </a>
          </p>
          {/* <div className="questions">
            <h2>Questions Regarding Probability</h2>
            <div className="question">
              <h3>Question 1</h3>
              <p>What is the definition of probability?</p>
            </div>
            <div className="question">
              <h3>Question 2</h3>
              <p>What are the basic rules of probability?</p>
            </div>
            <div className="question">
              <h3>Question 3</h3>
              <p>Explain the concept of conditional probability.</p>
            </div>
  </div>*/}
        </div>
        <div className="card-container flex flex-col items-end p-2">
          {playlistItems &&
            playlistItems.slice(1).map((item) => (
              // <li key={item.id} className="card">

              //   <a
              //     href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
              //   >
              //     <img src={item.snippet.thumbnails.medium.url} alt="" />
              //     <div className="card-info">
              //       <h3>{item.snippet.title}</h3>
              //     </div>
              //   </a>
              // </li>

              <Card key={item.id} className="w-[400px]">
                <CardHeader className="">
                  <CardTitle>{}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                  >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                  </a>
                </CardContent>
                <CardFooter>{item.snippet.title}</CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default CourseVedio;





