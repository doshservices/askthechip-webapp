// import blogImg from "../../../assets/blog-img.svg";
import { servicesData } from "../../../data";

const ServiceProviders = () => {
  return (
    <section>
      <div className='font-Inter pl-4 bg-[#F7F9FA] rounded-xl'>
                <div className='font-bold text-xl pl-3 py-3 my-3 border-b border-[#EBEEF0]'>Explore Service Providers</div>
                {servicesData.map(service=>(
                  <div className='grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]'>
                    <div className='col-span-9 ml-3'>
                        <div className='text-[#5B7083] font-medium text-sm'>{service.category}</div>
                        <div className='font-bold text-[#0F1419] mb-1.5'>{service.title}</div>
                        <div className='text-[#5B7083] font-medium text-sm'>Rated by {service.rating} people</div>
                    </div>
                    <div className='col-span-3 ml-auto mr-3'>
                        <img src={service.image} alt="blog" className="" />
                    </div>
                  </div>
                ))}
                <div className='text-tertiary font-medium cursor-pointer ml-3 pb-2'>Show more</div>
            </div>
    </section>
  );
};

export default ServiceProviders;
