// import blogImg from "../../../assets/blog-img.svg";
import { servicesData } from "../../../data";

const ServiceProviders = () => {
  return (
    <section>
      <div className="font-Inter rounded-xl">
        <div className="font-medium text-lg pt-10 pb-3">Trending</div>
        {servicesData.map((service, index) => (
          <div key={index} className="grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]">
            <div className="col-span-9 ml-3">
              <div className="text-[#5B7083] text-xs">{service.category}</div>
              <div className="font-medium text-sm text-[#0F1419] mb-1.5">
                {service.title}
              </div>
              <div className="text-[#5B7083] text-xs">
                {service.rating}k views
              </div>
            </div>
            <div className="col-span-3 ml-auto mr-3">
              <img src={service.image} alt="blog" className="" />
            </div>
          </div>
        ))}
        <div className="text-primary80 text-xs font-medium cursor-pointer ml-3 pb-2">
          Show more
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
