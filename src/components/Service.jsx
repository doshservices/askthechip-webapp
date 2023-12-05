import { useState } from "react";
import expandIcon from './../assets/icons/expand-icon.svg';
import demoDp from "../assets/default_profile.png";
import { useNavigate } from "react-router-dom";

const Service = ({ serviceData, type }) => {
  // console.log(serviceData);
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  }

  const navigate = useNavigate()

  const goToProfile = (id) => {
    localStorage.setItem("ask-un-id", JSON.stringify(id))
    setTimeout(() => {
      navigate("/users-profile")
    }, 1000)
  }

  return (
    <div className="">
      <div onClick={handleClick} className="flex justify-between border border-[#000000]/10 rounded py-3 px-7 cursor-pointer">
        <h3>
          {type}
        </h3>
        <div className="flex">
          <img className={expand ? `rotate-180 transition duration-200` : `rotate-0 transition`} src={`${expandIcon}`} alt="" />
        </div>
      </div>
      {expand && <div className="grid grid-cols-12 gap-0 mb-16">
        {serviceData.map((service, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 grid grid-cols-12 pt-5 pb-4 border-b border-[#000000]/20 w-[85%] mx-auto">
            <div onClick={() => goToProfile(service?._id)} className="col-span-3 ml-auto mr-3">
              <img src={service?.image ? service.image : demoDp} alt={service?.firstName} className="provider-img rounded cursor-pointer" />
            </div>
            <div className="col-span-9 ml-3">
              <div onClick={() => goToProfile(service?._id)} className="cursor-pointer font-medium text-[.85rem] text-dark2D/80 mb-1">
                {service?.fullName}
              </div>
              <p className="font-[600] text-[.9rem] text-dark2D/80 mb-1">
                {service?.bio ? service?.bio : service?.serviceType}
              </p>
              <p className="text-xs text-dark2D/80">
                {/* {service?.rating} */}
                100k views
              </p>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Service;