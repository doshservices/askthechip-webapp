import { useState } from "react";
import expandIcon from './../assets/icons/expand-icon.svg';
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
      <div onClick={handleClick} className="flex justify-between border border-[#000000]/10 rounded py-3 px-4 sm:px-7 cursor-pointer">
        <h3>
          {type}
        </h3>
        <div className="flex">
          <img className={expand ? `rotate-180 transition duration-200` : `rotate-0 transition`} src={`${expandIcon}`} alt="" />
        </div>
      </div>
      {expand &&
        <div className="flex flex-wrap justify-between gap-x-[1rem] max-w-[600px] mx-auto">
          {serviceData.map((service, index) => (
            <div key={index} className="flex grow basis-[250px] pt-4 pb-4 border-b border-[#000000]/20">
              <div onClick={() => goToProfile(service?._id)} className="">
                {service?.image ?
                  <img src={service?.image} alt={service?.firstName} className="provider-img rounded cursor-pointer" />
                  :
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-primary100 font-bold text-xl">
                    {service?.firstName ?
                      <span className="text-white">{service?.firstName?.[0]}</span>
                      :
                      <span className="text-white">U</span>
                    }
                  </div>
                }
              </div>
              <div className="ml-3">
                <div onClick={() => goToProfile(service?._id)} className="cursor-pointer font-medium text-[.85rem] text-dark2D/80">
                  {service?.fullName}
                </div>
                <p className="font-[600] text-[.9rem] text-dark2D/80">
                  {service?.bio ? service?.bio : service?.serviceType}
                </p>
                <p className="text-xs text-dark2D/80">
                  {/* {service?.rating} */}
                  100k views
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Service;