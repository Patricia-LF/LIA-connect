import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Header from "./components/Header";
import ProfileForm from "./pages/ProfileForm";
import ResultPage from "./pages/ResultPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [profileData, setProfileData] = useState({
    role: "",
    name: "",
    education: "", // used by students
    company: "",
    interests: [], // array of interest-id:s
    portfolioUrl: "",
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
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
            profileData.interests.length > 0 ? (
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
