import React from 'react'


const ConnectCard = ({title, text, icon}) => {
  return (
    <div className='border-[0.5px] border-[#00008233] max-w-[274px] rounded-xl px-2 pt-8 pb-4'>
        <div className='flex justify-center mb-4'>
            <img src={icon} alt="Icon" />
        </div>
        <div className='text-center'>
            <h2 className='font-semibold text-lg text-[#333] mb-3'>{title}</h2>
            <h3 className=' text-[#667085]'>{text}</h3>
        </div>
    </div>
  )
}

export default ConnectCard