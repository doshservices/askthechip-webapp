import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ForgotPassword,
  LandingPage,
  MentorshipPage,
  MessagesPage,
  NotificationsPage,
  Onboarding,
  Pricing,
  ProfilePage,
  ServicesPage,
  SettingsPage,
  SignIn,
  SignUp,
  SignUpAsProvider
} from "./pages";

import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/provider-sign" element={<SignUpAsProvider />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Pages after signing in */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
