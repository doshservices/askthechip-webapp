import like from "./../assets/icons/like-icon.svg"
import share from "./../assets/icons/share-icon.svg"
import comment from "./../assets/icons/comment-icon.svg"
import reply from "./../assets/icons/reply-icon.svg"
import user from "./../assets/blog-img.svg";

const reactions = [
  {
    icon: like,
    value: 61
  },
  {
    icon: comment,
    value: 61
  },
  {
    icon: share,
    value: 61
  }
]
const Notifications = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="overflow-y-hidden sm:h-screen h-[calc(100vh_-_4.5rem)] flex flex-col col-span-12 md:col-span-11 xm:col-span-7 ml-4 xm:ml-10 font-DMSans pt-2">
        <div className="h-16 flex flex-col sm:flex-row justify-between">
          <div className="flex font-medium justify-between sm:justify-start items-center">
            <div className="mr-2 sm:mr-4 text-2xl">Notifications</div>
          </div>
        </div>
        <div className="h-[calc(100vh_-_10rem)] sm:h-screen overflow-y-auto mt-4">
          <div className="grid grid-cols-24 mt-2 bg-[#f3f3f3] py-3 border-b border-[#000]/10">
            <div className="col-span-3 sm:col-span-3 ml-5">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-21 mx-5 my-3">
              <div className="mb-3">Lex Murphy liked your post</div>
              <div className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</div>
            </div>
          </div>
          <div className="grid grid-cols-24 mt-2 py-3 border-b border-[#000]/10">
            <div className="col-span-3 sm:col-span-3 ml-5">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-21 mx-5 my-3">
              <div className="mb-3">Dennis Nedry commented on Isla Nublar SOC2 post</div>
              <div className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</div>
            </div>
          </div>
          <div className="grid grid-cols-24 mt-2 bg-[#f3f3f3] py-3 border-b border-[#000]/10">
            <div className="col-span-3 sm:col-span-3 ml-5">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-21 mx-5 my-3">
              <div className="mb-3">Lex Murphy liked your post</div>
              <div className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</div>
            </div>
          </div>
          <div className="grid grid-cols-24 mt-2 bg-[#f3f3f3] py-3 border-b border-[#000]/10">
            <div className="col-span-3 sm:col-span-3 ml-5">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-21 mx-5 my-3">
              <div className="mb-3">Dennis Nedry commented on Isla Nublar SOC2 post</div>
              <div className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="xm:flex flex-col hidden md:hidden xm:col-span-5">
        <div className="grid grid-cols-24 mt-20 py-3">
            <div className="col-span-3 sm:col-span-3 ml-4">
              <img src={user} alt="User" className="rounded-full p-1.5" />
            </div>
            <div className="col-span-21 mx-4 mt-1">
              <div className="mb-1.5">Dennis Nedry commented on Isla Nublar SOC2 post</div>
              <div className="text-[#A5ACB8] italic text-sm leading-8 font-medium">
                “Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, some minor systems may go on and off for a while.”
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex">
                  {reactions.map((rxn)=> 
                  <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center">
                    <div className="mr-3">
                      <img src={rxn.icon} alt="Comment" />
                    </div>
                    <span className="text-center mt-1 mr-10">{rxn.value}</span>
                  </div>
                    )}
                </div>
                <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center">
                    <div className="mr-3">
                      <img src={reply} alt="Reply" />
                    </div>
                    <span className="text-center mt-1">Reply</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Notifications;
