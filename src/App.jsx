import { Route, Routes } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import {
  Error,
  ForgotPassword,
  LandingPage,
  HomePage,
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

const authUser = localStorage.getItem('authUser');
const AuthenticatedRoute = ({ Component, ...rest }) => {
  if (!authUser) {
    window.location.href = '/login';
    return;
  }

  return <Component {...rest} />;
};


function App() {
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
          {/* Pages after signing in */}
          <Route
            path="/home"
            element={<AuthenticatedRoute Component={HomePage} />}
          />
          <Route
            path="/mentorship"
            element={<AuthenticatedRoute Component={MentorshipPage} />}
          />
          <Route
            path="/messages"
            element={<AuthenticatedRoute Component={MessagesPage} />}
          />
          <Route
            path="/notifications"
            element={<AuthenticatedRoute Component={NotificationsPage} />}
          />
          <Route
            path="/profile"
            element={<AuthenticatedRoute Component={ProfilePage} />}
          />
          <Route
            path="/settings"
            element={<AuthenticatedRoute Component={SettingsPage} />}
          />
          <Route
            path="/services"
            element={<AuthenticatedRoute Component={ServicesPage} />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
