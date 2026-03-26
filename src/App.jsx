import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProfileForm from "./pages/ProfileForm";
import ResultPage from "./pages/ResultPage";

export default function App() {
  const [profileData, setProfileData] = useState({
    role: "student", // tillfälligt hårdkodat, annars null,        // 'student' | 'company'
    name: "Patricia Frykberg", // tillfälligt hårdkodat, annars "",
    education: "webbutvecling", // tillfälligt hårdkodat, annars "", // used by students
    company: "",
    interests: ["frontend", "ux"], // tillfälligt hårdkodat, annars [], // array of interest-id:s
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              profileData={profileData}
              setProfileData={setProfileData}
            />
          }
        />
        <Route
          path="/profile"
          element={
            profileData.role ? (
              <ProfileForm
                profileData={profileData}
                setProfileData={setProfileData}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/result"
          element={
            profileData.name ? (
              <ResultPage profileData={profileData} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
