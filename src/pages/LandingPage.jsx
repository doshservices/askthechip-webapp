import React from "react";
import {
  ConnectWithFounders,
  Footer,
  Header,
  Navbar,
  WhyJoining,
} from "../components";
import Testimonial from "../components/Testimonial";

const Landing = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <Navbar />
      <Header />
      <WhyJoining />
      <ConnectWithFounders />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
