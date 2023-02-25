import React from 'react'
import { whyData } from '../data'
import WhyCard from './WhyCard'

const WhyJoining = () => {
  return (
    <div className='font-Montserrat'>
        <section className="flex justify-center items-center flex-col min-h-screen">
        <h1 className="font-bold text-[30px] md:text-[36px] text-center w-[90%] max-w-[29ch] leading-[44px] mt-8 mb-4 text-[#021B38]">Why should you join our Community</h1>
        <h2 className="text-[20px] w-[90%] max-w-[36ch] text-center mb-12 text-[#343432]">
            And indeed the worst of my faults was a certain impatient gaiety of disposition
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mb-6 md:mb-0 mx-4'>
            {whyData.map((item, index) => <WhyCard key={index} title={item.title} text={item.text} />)}
        </div>
        </section>
    </div>
  )
}

export default WhyJoining