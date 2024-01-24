import React, { useEffect } from "react";
import {
  ConnectWithFounders,
  Footer,
  Header,
  Navbar,
  WhyJoining,
} from "../components";
import Testimonial from "../components/Testimonial";
import { useLocation, useNavigate } from "react-router-dom";

const Landing = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || "/home";
  const token = localStorage.getItem("token")
  const navigateTo = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigateTo(from, { replace: true });
    }
  }, [])

  return (
    <div className="bg-[#fff]">
      <Navbar />
      <Header />
      <WhyJoining />
      <Testimonial />
      {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
        <p>{count && <CountUp end={100} duration={5} />}</p>
      </ScrollTrigger> */}
      <ConnectWithFounders />
      <Footer />
    </div>
  );
};

export default Landing;
