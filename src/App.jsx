import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  Error,
  ForgotPassword,
  LandingPage,
  Homepage,
  MentorshipPage,
  MessagesPage,
  NotificationsPage,
  Onboarding,
  Payment,
  Pricing,
  ProfilePage,
  ServicesPage,
  SettingsPage,
  SignIn,
  SignUp,
  SignUpAsProvider,
  Verify,
} from "./pages";

import { AuthProvider, PostProvider, ProfileProvider, SocketProvider } from "./contexts";
// import { useSocket } from "./contexts/SocketContext/SocketContext"
import { ProtectedRoute } from "./utils";
//import { useAuth } from "./contexts/AuthContext/AuthContext";
//import { useEffect } from "react";

const toastParams = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};
const loadingParams = {
  ...toastParams,
  autoClose: false
}

export const notify = (val) => toast.success(`${val}`, toastParams);
export const warn = (val) => toast.error(`${val}`, toastParams);
export const inform = (val) => toast.info(`${val}`, toastParams);
export const loadingToast = (val) => toast.info(`${val}`, loadingParams);


function App() {
  
  return (
    <div>
      <SocketProvider>
        <AuthProvider>
          <ProfileProvider>
            <PostProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/provider-signup" element={<SignUpAsProvider />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing/payment" element={<Payment />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/*" element={<Error />} />
                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/mentorship" element={<MentorshipPage />} />
                  <Route path="/messages" element={<MessagesPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                </Route>
              </Routes>
            </PostProvider>
          </ProfileProvider>
        </AuthProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
