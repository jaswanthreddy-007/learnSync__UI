import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from "./mainsitecomps/Landing";
import HomePage from "./mainsitecomps/HomePage";
import StatsPage from "./mainsitecomps/StatsPage";
import TestPage from "./mainsitecomps/TestPage";
import External from "./mainsitecomps/Externals";
import Account from "./mainsitecomps/Account";
import CourseVedio from "./mainsitecomps/CourseVedio";
import SignUpPage from "./mainsitecomps/signup";
import LoginPage from "./mainsitecomps/login";
import Schedule from "./mainsitecomps/Schedule";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/account" element={<Account />} />
        <Route path="/external" element={<External />} />

        {/* <Route path="/course" element={<Course />} /> */}
        <Route path="/course/:courseName" element={<CourseVedio />} />
      </Routes>
    </Router>
  );
}

export default App;
