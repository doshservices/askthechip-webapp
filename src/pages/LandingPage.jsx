import React from 'react'
import { ConnectWithFounders, ConnectWithProviders, Footer, Header, Navbar, WhyJoining } from '../components'
import Testimonial from '../components/Testimonial'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <WhyJoining />
        <ConnectWithFounders />
        <ConnectWithProviders />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Landing