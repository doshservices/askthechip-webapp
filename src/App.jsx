import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  LandingPage,
  MentorshipPage,
  MessagesPage,
  NotificationsPage,
  Onboarding,
  Pricing,
  ProfilePage,
  Register,
  RegisterAsProvider,
  ServicesPage,
  SettingsPage,
  SignIn,
} from "./pages";

import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-as-provider" element={<RegisterAsProvider />} />
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
