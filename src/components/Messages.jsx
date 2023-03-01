import React from 'react'
import { Search } from './home/search/search';


const Messages = () => {
  return (
    <div className='grid grid-cols-12 pl-8'>
        <div className="col-span-6 h-screen pt-4 overflow-y-auto pr-20">
            <Search />
            <div>Loading...</div>
        </div>
        <div className="col-span-6 h-screen pt-4 overflow-y-auto pr-16">
           <div>Loading...</div>
        </div>
    </div>
  )
}

export default Messages