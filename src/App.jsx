import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage, Onboarding, Pricing, Register, RegisterAsProvider, SignIn } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-as-provider' element={<RegisterAsProvider />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
