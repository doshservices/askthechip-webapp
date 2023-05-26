import React from 'react'
import { Navbar } from '../components'
import Back from "../assets/icons/back-button.svg";
import cancel from "../assets/icons/cancel-icon.svg";

const Payment = () => {
  return (
    <div className="font-DMSans">
      <Navbar />
      <div className='pt-32 px-20'>
        <div className='flex'>
            <div className='cursor-pointer'>
                <img src={Back} alt="Back" />
            </div>
            <div className='text-primary110 font-bold text-3xl mx-auto'>Premium Plan Purchase</div>
            <div className='cursor-pointer'>
                <img src={cancel} alt="Back" />
            </div>
        </div>
        <div className='flex'>
            <div className='w-1/2'>
                
            </div>
            <div className="w-1/2">

            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
