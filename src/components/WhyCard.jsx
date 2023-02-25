import React from 'react'
import bulb from './../assets/icons/bulb.svg'

const WhyCard = ({title, text}) => {
  return (
    <div className='border-[0.5px] border-[#00008233] max-w-[274px] rounded-xl px-5 py-8'>
        <div className='flex justify-center mb-6'>
            <img src={bulb} alt="Bulb" />
        </div>
        <div className='text-center'>
            <h2 className='font-semibold text-lg text-[#333] mb-3'>{title}</h2>
            <h3 className=' text-[#667085]'>{text}</h3>
        </div>
    </div>
  )
}

export default WhyCard