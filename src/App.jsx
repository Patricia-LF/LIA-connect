import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/* import StartPage from './pages/StartPage' */
import ProfileForm from "./pages/ProfileForm";
/* import ResultPage from './pages/ResultPage' */

export default function App() {
  const [profileData, setProfileData] = useState({
    role: "company", // tillfälligt hårdkodat, annars null,        // 'student' | 'company'
    name: "",
    education: "", // used by students
    company: "", // used by companies
    interests: [], // array of interest-id:s
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={<StartPage profileData={profileData} setProfileData={setProfileData} />}
        /> */}
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
        {/* <Route
          path="/result"
          element={
            profileData.name
              ? <ResultPage profileData={profileData} />
              : <Navigate to="/" replace />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
