import React from "react";
import {
  ConnectWithFounders,
  Footer,
  Header,
  Navbar,
  WhyJoining,
} from "../components";
import Testimonial from "../components/Testimonial";
// import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup";
// import { useState } from "react";

const Landing = () => {
  // const [count, setCount] = useState(false)
  return (
    <div className="bg-[#f8f8f8]">
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
