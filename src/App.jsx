import { Route, Routes, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import {
  ChatPage,
  Error,
  ForgotPassword,
  LandingPage,
  Homepage,
  Onboarding,
  Payment,
  Pricing,
  ProfilePage,
  SettingsPage,
  SignIn,
  SignUp,
  SignUpAsProvider,
  Verify,
} from "./pages";
import { AuthProvider, PostProvider, ProfileProvider, SocketProvider } from "./contexts";
import { ProtectedRoute } from "./utils";
import ConversationProvider from "./contexts/ConversationContext/ConversationContext";
import UserProfile from "./pages/UserProfile";
import Search from "./pages/Search";
import ResetPassword from "./pages/resetPassword";
import { Mentorship, Messages, Notifications, Profile, Services } from "./components";
import { store, persistor } from "./store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { jwtDecode } from "jwt-decode";

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>
              <ProfileProvider>
                <PostProvider>
                  <ConversationProvider>
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
                      <Route path="/reset-password" element={<ResetPassword />} />
                      <Route path="/*" element={<Error />} />
                      {/* Protected routes */}
                      <Route element={<ProtectedRoute />}>
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/mentorship" element={<Mentorship />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/messages/:id" element={window.innerWidth <= 990 ? <ChatPage /> : <Navigate to="/messages" />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/users-profile" element={<UserProfile />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/search" element={<Search />} />
                      </Route>
                    </Routes>
                  </ConversationProvider>
                </PostProvider>
              </ProfileProvider>
            </AuthProvider>
          </PersistGate>
        </Provider>
      </SocketProvider>
    </div>
  );
}

export default App;
