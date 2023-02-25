import React from 'react'
import Swiper from './Swiper'

const Testimonial = () => {
  return (
    <section className='min-h-screen'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className="font-bold text-[40px] text-center max-w-[29ch] leading-[48px] mt-8 mb-4">
              Testimonials
          </h1>
      </div>
      <div className='mx-4'>
          <Swiper />
      </div>
    </section>
  )
}

export default Testimonial