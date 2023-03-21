import checkMark from "./../assets/icons/checkmark.svg";
import user from "./../assets/blog-img.svg";
const Notifications = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="overflow-y-hidden sm:h-screen h-[calc(100vh_-_4.5rem)] flex flex-col col-span-12 md:col-span-11 xm:col-span-8 ml-4 xm:ml-10 font-Inter pt-2">
        <div className="h-16 flex flex-col sm:flex-row justify-between">
          <div className="flex font-medium justify-between sm:justify-start text-xl items-center">
            <div className="mr-2 sm:mr-4">Notifications</div>
            <select
              className="outline-none bg-smoke/50 text-[#9EA0AA] rounded-full pl-1"
              name="notifications"
              id="notifications"
            >
              <option value="All">All</option>
              <option value="Read">Read</option>
              <option value="Unread">Unread</option>
            </select>
          </div>
          <div className="flex text-secondary text-xl items-center">
            <div className="mr-2">Mark all as read</div>
            <div>
              <img src={checkMark} alt="Checked" />
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh_-_10rem)] sm:h-screen overflow-y-auto mt-4">
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-2 sm:col-span-1">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-10 ml-3 font-medium">
              <div className="text-lg mb-2">Lex Murphy liked your post</div>
              <div className="text-[#A5ACB8]">Today at 9:42 AM</div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-2 sm:col-span-1">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-10 ml-3 font-medium">
              <div className="text-lg mb-2">Lex Murphy liked your post</div>
              <div className="text-[#A5ACB8]">Today at 9:42 AM</div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-2 sm:col-span-1">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-10 ml-3 font-medium">
              <div className="text-lg mb-2">
                Dennis Nedry commented on Isla Nublar SOC2 post
              </div>
              <div className="my-4 mx-2 border-l-[0.1875rem] pl-2 border-[#DDDEE1]">
                “Oh, I finished de-bugging the phones, but the system's
                compiling for eighteen minutes, or twenty. So, some minor
                systems may go on and off for a while.”
              </div>
              <div className="text-[#A5ACB8]">Yesterday at 5:42 PM</div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4">
            <div className="col-span-2 sm:col-span-1">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-10 ml-3 font-medium">
              <div className="text-lg mb-2">
                Dennis Nedry commented on Isla Nublar SOC2 post
              </div>
              <div className="my-4 mx-2 border-l-[0.1875rem] pl-2 border-[#DDDEE1]">
                “Oh, I finished de-bugging the phones, but the system's
                compiling for eighteen minutes, or twenty. So, some minor
                systems may go on and off for a while.”
              </div>
              <div className="text-[#A5ACB8]">Yesterday at 5:42 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
