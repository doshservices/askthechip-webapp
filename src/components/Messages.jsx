import React from 'react'
import { servicesData } from '../data';
import { Search } from './home/search/search';
import mic from '../assets/icons/mic.svg';
import emoji from '../assets/icons/emoji.svg';
import camera from '../assets/icons/camera.svg';


const Messages = () => {
  return (
    <div className='grid grid-cols-12 pl-8'>
      <div className="col-span-6 h-screen pt-4 overflow-y-auto pr-10">
        <Search background="#fff" />
        <div className='mt-7'>
          <div className='border border-[#EBEEF0] rounded-3xl'>
            <div className='font-Inter pl-4'>
              <div className=' font-semibold text-xl py-1 my-1'>Groups</div>
              {servicesData.map((service, index) => (
                <div key={index} className='grid grid-cols-12 pt-1 pb-3 my-2 border-b last:border-b-0 border-[#EBEEF0] mr-4'>
                  <div className='col-span-2 ml-auto mr-3'>
                    <img src={service.image} alt="blog" className="rounded-full" />
                  </div>
                  <div className='col-span-6 ml-3'>
                    <div className='font-bold text-[#303030] text-sm mb-1.5'>{service.title}</div>
                    <div className='text-[#303030] font-light text-xs'>haha {service.rating}</div>
                  </div>
                  <div className='col-span-4 ml-auto mr-3'>
                    <div className='text-[#7C7C7C] font-light text-sm mb-1'>
                      Today, 9:52pm
                    </div>
                    <div className='ml-auto w-fit text-xs'>
                      <span className='bg-[#F24E1E] text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex'>4</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='text-tertiary font-medium cursor-pointer mr-6 my-3'>Show more</div>
          </div>
          <div className='border border-[#EBEEF0] rounded-3xl mb-4'>
            <div className='font-Inter pl-4'>
              <div className=' font-semibold text-xl py-1 my-1'>People</div>
              {servicesData.map((service, index) => (
                <div key={index} className='grid grid-cols-12 pt-1 pb-3 my-2 border-b last:border-b-0 border-[#EBEEF0] mr-4'>
                  <div className='col-span-2 ml-auto mr-3'>
                    <img src={service.image} alt="blog" className="rounded-full" />
                  </div>
                  <div className='col-span-6 ml-3'>
                    <div className='font-bold text-[#303030] text-sm mb-1.5'>{service.title}</div>
                    <div className='text-[#303030] font-light text-xs'>haha {service.rating}</div>
                  </div>
                  <div className='col-span-4 ml-auto mr-3'>
                    <div className='text-[#7C7C7C] font-light text-sm mb-1'>
                      Today, 9:52pm
                    </div>
                    <div className='ml-auto w-fit text-xs'>
                      <span className='bg-[#F24E1E] text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex'>4</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 h-screen pt-1 pl-4 overflow-y-auto pr-8 font-Inter">
        <div className='h-20 fixed top-0 bg-white w-full'>
          <div className='font-semibold text-3xl mt-2'>Anil</div>
          <div className='text-[#303030] font-light'>Last seen, 2:02pm</div>
        </div>
        <div className='h-[100vh_-_5rem]'>
          <div className='min-h-[100vh_-_10rem] mt-20 mb-24 overflow-y-auto'>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hey there</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>How are you?</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hii</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>I'm fine what about you?</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>I'm fine too</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>Long time no see</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hey there</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>How are you?</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hii</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>I'm fine what about you?</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>I'm fine too</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>Long time no see</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hey there</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>How are you?</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>Hii</div>
            <div className='text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto'>I'm fine what about you?</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>I'm fine too</div>
            <div className='text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto'>Long time no see</div>
          </div>
          <div className='fixed bg-white bottom-0 pb-3 pr-10 pt-2 grid grid-cols-12'>
            <div className='col-span-11 grid grid-cols-12 bg-[#eff6fcde] px-4 rounded-3xl mr-3'>
              <textarea className='col-span-8 resize-none w-full min-h-fit text-sm bg-transparent outline-none ml-2 my-4' placeholder='Type your message here...' />
              <img src={emoji} className='col-span-2 my-auto ml-6' alt="Emoji" />
              <img src={camera} className='col-span-2 my-auto ml-4' alt="Camera" />
            </div>
            <div className='col-span-1 my-auto ml-auto'>
              <img src={mic} alt="Microphone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages