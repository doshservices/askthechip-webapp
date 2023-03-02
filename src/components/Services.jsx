import React from 'react'
import { Search } from './home/search/search';
import { servicesData } from '../data';


const Services = () => {
  return (
    <div className='grid grid-cols-12 pl-8'>
        <div className="col-span-6 h-screen pt-4 overflow-y-auto pr-20">
            <Search />
            <div className='font-Inter pl-4'>
                <div className=' font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]'>Graphics Designing</div>
                {servicesData.map(service=>(
                    <div className='grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]'>
                    <div className='col-span-9 ml-3'>
                        <div className='font-bold text-[#0F1419] mb-1.5'>{service.title}</div>
                        <div className='text-[#5B7083] font-medium text-sm'>Rated by {service.rating} people</div>
                    </div>
                    <div className='col-span-3 ml-auto mr-3'>
                        <img src={service.image} alt="blog" className="" />
                    </div>
                </div>
                ))}
                <div className='text-tertiary font-medium cursor-pointer ml-3'>Show more</div>
            </div>
            <div className='font-Inter pl-4'>
                <div className=' font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]'>Accounting</div>
                {servicesData.map(service=>(
                    <div className='grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]'>
                    <div className='col-span-9 ml-3'>
                        <div className='font-bold text-[#0F1419] mb-1.5'>{service.title}</div>
                        <div className='text-[#5B7083] font-medium text-sm'>Rated by {service.rating} people</div>
                    </div>
                    <div className='col-span-3 ml-auto mr-3'>
                        <img src={service.image} alt="blog" className="" />
                    </div>
                </div>
                ))}
                <div className='text-tertiary font-medium cursor-pointer ml-3'>Show more</div>
            </div>
        </div>
        <div className="col-span-6 h-screen pt-4 overflow-y-auto pr-16">
            <div className='font-Inter pl-4'>
                <div className=' font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]'>Marketing</div>
                {servicesData.map(service=>(
                    <div className='grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]'>
                    <div className='col-span-9 ml-3'>
                        <div className='font-bold text-[#0F1419] mb-1.5'>{service.title}</div>
                        <div className='text-[#5B7083] font-medium text-sm'>Rated by {service.rating} people</div>
                    </div>
                    <div className='col-span-3 ml-auto mr-3'>
                        <img src={service.image} alt="blog" className="" />
                    </div>
                </div>
                ))}
                <div className='text-tertiary font-medium cursor-pointer ml-3'>Show more</div>
            </div>
            <div className='font-Inter pl-4'>
                <div className=' font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]'>Fashion Designing</div>
                {servicesData.map(service=>(
                    <div className='grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]'>
                    <div className='col-span-9 ml-3'>
                        <div className='font-bold text-[#0F1419] mb-1.5'>{service.title}</div>
                        <div className='text-[#5B7083] font-medium text-sm'>Rated by {service.rating} people</div>
                    </div>
                    <div className='col-span-3 ml-auto mr-3'>
                        <img src={service.image} alt="blog" className="" />
                    </div>
                </div>
                ))}
                <div className='text-tertiary font-medium cursor-pointer ml-3'>Show more</div>
            </div>
        </div>
    </div>
  )
}

export default Services