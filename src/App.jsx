import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Header from "./components/Header";
import ProfileForm from "./pages/ProfileForm";
import ResultPage from "./pages/ResultPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [profileData, setProfileData] = useState({
    role: "student" | "company",
    name: "Patricia Loayza Frykberg", // tillfälligt hårdkodat, annars "",
    education: "", // used by students
    company: "",
    interests: [], // array of interest-id:s
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
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
