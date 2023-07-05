import { Route, Routes } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

import { AuthProvider } from "./contexts";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext/AuthContext";
import { ProtectedRoute } from "./utils";


const toastParams = {
  position: 'top-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notify = (val) => toast.success(`${val}`, toastParams);
export const warn = (val) => toast.error(`${val}`, toastParams);
export const inform = (val) => toast.info(`${val}`, toastParams);


function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    let authUser = localStorage.getItem('authUser');
    if (authUser) setUser(JSON.parse(authUser));
  }, []);
  return (
    <div>
      <AuthProvider>
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
            <Route
              path="/home"
              element={<Homepage />}
            />
            <Route
              path="/mentorship"
              element={<MentorshipPage />}
            />
            <Route
              path="/messages"
              element={<MessagesPage />}
            />
            <Route
              path="/notifications"
              element={<NotificationsPage />}
            />
            <Route
              path="/profile"
              element={<ProfilePage />}
            />
            <Route
              path="/settings"
              element={<SettingsPage />}
            />
            <Route
              path="/services"
              element={<ServicesPage />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
