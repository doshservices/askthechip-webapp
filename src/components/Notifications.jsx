import checkMark from './../assets/icons/checkmark.svg'
import user from "./../assets/blog-img.svg";
const Notifications = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="flex flex-col col-span-7 ml-10 font-Inter pt-2">
        <div className="flex justify-between">
          <div className="flex font-medium text-xl items-center">
            <div className="mr-4">
              Notifications
            </div>
            <select className="outline-none bg-smoke/50 text-[#9EA0AA] rounded-full pl-1" name="notifications" id="notifications">
              <option value="All">All</option>
              <option value="Read">Read</option>
              <option value="Unread">Unread</option>
            </select>
          </div>
          <div className="flex text-secondary text-xl items-center">
            <div className='mr-2'>
              Mark all as read
            </div>
            <div>
              <img src={checkMark} alt="Checked" />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-1'>
              <img src={user} alt="User" className='rounded-full p-1.5' />
            </div>
            <div className='col-span-10 ml-3 font-medium'>
              <div className='text-lg mb-2'>Lex Murphy liked your post</div>
              <div className='text-[#A5ACB8]'>Today at 9:42 AM</div>
            </div>
          </div>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-1'>
              <img src={user} alt="User" className='rounded-full p-1.5' />
            </div>
            <div className='col-span-10 ml-3 font-medium'>
              <div className='text-lg mb-2'>Lex Murphy liked your post</div>
              <div className='text-[#A5ACB8]'>Today at 9:42 AM</div>
            </div>
          </div>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-1'>
              <img src={user} alt="User" className='rounded-full p-1.5' />
            </div>
            <div className='col-span-10 ml-3 font-medium'>
              <div className='text-lg mb-2'>Dennis Nedry commented on Isla Nublar SOC2 post</div>
              <div className='my-4 mx-2 border-l-[0.1875rem] pl-2 border-[#DDDEE1]'>
                “Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, 
                or twenty.  So, some minor systems may go on and off for a while.”
              </div>
              <div className='text-[#A5ACB8]'>Yesterday at 5:42 PM</div>
            </div>
          </div>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-1'>
              <img src={user} alt="User" className='rounded-full p-1.5' />
            </div>
            <div className='col-span-10 ml-3 font-medium'>
              <div className='text-lg mb-2'>Dennis Nedry commented on Isla Nublar SOC2 post</div>
              <div className='my-4 mx-2 border-l-[0.1875rem] pl-2 border-[#DDDEE1]'>
                “Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, 
                or twenty.  So, some minor systems may go on and off for a while.”
              </div>
              <div className='text-[#A5ACB8]'>Yesterday at 5:42 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications