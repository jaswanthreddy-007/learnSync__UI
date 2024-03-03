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

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
// const PLAYLIST_ID = 'PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK';
const API_KEY = "AIzaSyDHcE1_ijkP_viU1vyOis3_6X4eukikuwM"; // Replace with your actual API key

const CourseVedio = () => {
  const { courseName } = useParams();
  const [playlistUrl, setPlaylistUrl] = useState(
    "PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK"
  );
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const fetchPlaylisturl = async () => {
      try {
        const playlistUrlResponse = await fetch(
          `http://127.0.0.1:5000/playlist_id?courseName=${courseName}`
        );
        const playlistUrlData = await playlistUrlResponse.json();
        console.log(playlistUrlData)
        setPlaylistUrl(playlistUrlData["playlist_id"]);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    

    fetchPlaylisturl();
     

  }, []);

  useEffect(() => {
   const fetchPlaylistItems = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistUrl}&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);

        setPlaylistItems(data['items']);
        
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };
     fetchPlaylistItems();

  }, []);

        // console.log(playlistItems);


  return (
    <>
      <Navbar />
      <div className="App">
        <div id="player">
          <iframe
            width="740"
            height="390"
            src="https://www.youtube.com/embed/V3iEsLPAD68"
          ></iframe>
          <p className="playlist-url">
            Playlist URL:{" "}
            <a href={`https://www.youtube.com/playlist?list=${playlistUrl}`}>
              https://www.youtube.com/playlist?list={playlistUrl}
            </a>
          </p>
          <div className="questions">
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
          </div>
        </div>
        <div className="card-container flex flex-col items-end p-2">
          {playlistItems &&
            playlistItems.map((item) => (
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






// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./css/coursevedio.css";
// import Navbar from "./Navbar";

// const YOUTUBE_PLAYLIST_ITEMS_API =
//   "https://www.googleapis.com/youtube/v3/playlistItems";
// // const PLAYLIST_ID = 'PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK';
// const API_KEY = "AIzaSyCviqYgr6TphifAwk0kgIWe4NOLEAadwQY"; // Replace with your actual API key

// const CourseVedio = () => {
//   const { courseName } = useParams();
//   const [playlistUrl, setPlaylistUrl] = useState("");
//   const [playlistItems, setPlaylistItems] = useState([]);

//   useEffect(() => {
//     const fetchPlaylistItems = async () => {
//       try {
//         const playlistUrlResponse = await fetch(
//           `http://127.0.0.1:5000/playlist_id?courseName=${courseName}`
//         );
//         const playlistUrlData = await playlistUrlResponse.json();
//         setPlaylistUrl(playlistUrlData["playlist_id"]);
//         console.log(playlistUrl);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };

//     fetchPlaylistItems();
//   }, []);
//   useEffect(() => {
//     const fetchPlaylistItems = async () => {
//       try {
//         const response = await fetch(
//           `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistUrl}&key=${API_KEY}`
//         );
//         const data = await response.json();
//         console.log(data);
//         setPlaylistItems(data.items);
//       } catch (error) {
//         console.error("Error fetching playlist items:", error);
//       }
//     };

//     fetchPlaylistItems();
//   }, [playlistUrl]);

//   const handleCheckboxChange = (itemId) => {
//     // Handle checkbox change logic
//     console.log("Checkbox clicked for item:", itemId);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="App">
//         <div id="player">
//           {/* The <iframe> (and video player) will replace this <div> tag. */}
//           <iframe
//             width="740"
//             height="390"
//             src="https://www.youtube.com/embed/V3iEsLPAD68"
//             frameborder="0"
//             allowfullscreen
//           ></iframe>
//           <p className="playlist-url">
//             Playlist URL:{" "}
//             <a href={`https://www.youtube.com/playlist?list=${playlistUrl}`}>
//               https://www.youtube.com/playlist?list={playlistUrl}
//             </a>
//           </p>
//           <div className="questions">
//             <h2>Questions Regarding Probability</h2>
//             <div className="question">
//               <h3>Question 1</h3>
//               <p>What is the definition of probability?</p>
//             </div>
//             <div className="question">
//               <h3>Question 2</h3>
//               <p>What are the basic rules of probability?</p>
//             </div>
//             <div className="question">
//               <h3>Question 3</h3>
//               <p>Explain the concept of conditional probability.</p>
//             </div>
//           </div>
//         </div>

//         <ul id="playlist" className="playlist">
//           {playlistItems &&
//             playlistItems.map((item) => (
//               <li key={item.id} className="card">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckboxChange(item.id)}
//                 />
//                 <a
//                   href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
//                 >
//                   <img src={item.snippet.thumbnails.medium.url} alt="" />
//                   <div className="card-info">
//                     <h3>{item.snippet.title}</h3>
//                   </div>
//                 </a>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default CourseVedio;