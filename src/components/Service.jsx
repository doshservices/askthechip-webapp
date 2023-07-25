import { useState } from "react";
import expandIcon from './../assets/icons/expand-icon.svg';

const Service = ({serviceData}) => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  }
  return (
    <div className="col-span-8 mb-3">
      <div onClick={handleClick} className="flex justify-between border border-[#000000]/10 rounded py-3 px-7">
        <div>
        {serviceData.category}
        </div>
        <div className="flex">
          <img className={expand ? `rotate-180 transition duration-200`: `rotate-0 transition`} src={`${expandIcon}`} alt="" />
        </div>
      </div>
      {expand && <div className="grid grid-cols-12 gap-0">
        {serviceData.data.map((service, index) => (
          <div key={index} className="col-span-6 grid grid-cols-12 pt-5 pb-4 my-2 border-b border-[#000000]/20 w-[85%] mx-auto">
            <div className="col-span-3 ml-auto mr-3">
              <img src={service.image} alt="blog" className="rounded" />
            </div>
            <div className="col-span-9 ml-3">
              <div className="font-medium text-sm text-dark2D/80 mb-1.5">
                {service.title}
              </div>
              <div className="text-xs text-dark2D/80">
                {service.rating}k views
              </div>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Service;