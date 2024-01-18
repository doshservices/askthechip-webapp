import { Swiper, SwiperSlide } from 'swiper/react';
import adunab from "../assets/images/MelaniePerkins_Canva.png"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602V23.8602Z" fill="#0072B1" />
</svg>

const testimony = [
  {
    id: 1,
    image: adunab,
    icon: icon,
    name: "Omobolaji A",
    role: "Founder of Adunab Designs",
    content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
  },
  {
    id: 2,
    image: adunab,
    icon: icon,
    name: "Omobolaji A",
    role: "Founder of Adunab Designs",
    content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
  },
  {
    id: 3,
    image: adunab,
    icon: icon,
    name: "Omobolaji A",
    role: "Founder of Adunab Designs",
    content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
  },
]

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="font-DMSans mx-4 xm:mx-0 my-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary110 text-[1.375rem] md:text-[46px] text-center max-w-[29ch] leading-[50px] mb-8">
          What Others Have to Say
        </h1>
      </div>
      <div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          effect={'fade'}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
          modules={[Navigation, Pagination]}
          className="testimonial__slider">
          {testimony.map((testimonial, index) =>
            <SwiperSlide className='slides' key={index}>
              <figure>
                <img src={testimonial.image} alt="" />
              </figure>
              <div className='flex flex-col'>
                <div>
                  <svg className='shrink-0' width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76 0.0799975C8.96 0.679997 9.06 1.18 9.06 1.58C9.06 1.94 9 2.42 8.88 3.02C6.2 3.02 4.86 4.4 4.86 7.16C4.86 8.16 5.38 8.72 6.42 8.84C7.94 8.96 8.7 9.94 8.7 11.78C8.7 13.18 8.36 14.26 7.68 15.02C7.04 15.74 5.86 16.1 4.14 16.1C1.78 16.1 0.6 14.5 0.6 11.3C0.6 8.1 1.24 5.44 2.52 3.32C3.8 1.16 5.88 0.0799975 8.76 0.0799975ZM19.62 0.0799975C19.82 0.679997 19.92 1.18 19.92 1.58C19.92 1.94 19.86 2.42 19.74 3.02C17.06 3.02 15.72 4.4 15.72 7.16C15.72 8.16 16.24 8.72 17.28 8.84C18.8 8.96 19.56 9.94 19.56 11.78C19.56 13.18 19.22 14.26 18.54 15.02C17.9 15.74 16.72 16.1 15 16.1C12.64 16.1 11.46 14.5 11.46 11.3C11.46 8.1 12.1 5.44 13.38 3.32C14.66 1.16 16.74 0.0799975 19.62 0.0799975Z" fill="#068978" />
                  </svg>
                  <p className='testimony px-[1.5rem]'>{testimonial.content}</p>
                  <svg className='shrink-0 block ml-auto' style={{ marginTop: "-10px" }} width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.24 16.92C11.04 16.32 10.94 15.82 10.94 15.42C10.94 15.06 11 14.58 11.12 13.98C13.8 13.98 15.14 12.6 15.14 9.84C15.14 8.84 14.62 8.28 13.58 8.16C12.06 8.04 11.3 7.06 11.3 5.22C11.3 3.82 11.64 2.74 12.32 1.98C12.96 1.26 14.14 0.900001 15.86 0.900001C18.22 0.900001 19.4 2.5 19.4 5.7C19.4 8.9 18.76 11.56 17.48 13.68C16.2 15.84 14.12 16.92 11.24 16.92ZM0.380001 16.92C0.18 16.32 0.0799999 15.82 0.08 15.42C0.08 15.06 0.14 14.58 0.260001 13.98C2.94 13.98 4.28 12.6 4.28 9.84C4.28 8.84 3.76 8.28 2.72 8.16C1.2 8.04 0.440001 7.06 0.440002 5.22C0.440002 3.82 0.780002 2.74 1.46 1.98C2.1 1.26 3.28 0.9 5 0.9C7.36 0.9 8.54 2.5 8.54 5.7C8.54 8.9 7.9 11.56 6.62 13.68C5.34 15.84 3.26 16.92 0.380001 16.92Z" fill="#068978" />
                  </svg>
                  <div className='flex gap-[1rem] font-[500] px-[1.5rem] pt-[1rem]'>
                    <p className='text-[#0A1E25] text-[1.2rem]'>{testimonial.name}</p>
                    {testimonial.icon}
                  </div>
                  <p className='text-[#068978] mt-1 px-[1.5rem]'>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <div className='w-fit mx-auto flex mt-4 gap-4'>
          <button onClick={() => swiperRef?.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <circle cx="18.5" cy="18.5" r="18.5" fill="#068978" />
              <path d="M13.7122 18.5018L20.2416 25.0313L21.7651 23.5077L16.7593 18.5018L21.7651 13.496L20.2416 11.9724L13.7122 18.5018Z" fill="white" />
            </svg>
          </button>
          <button onClick={() => swiperRef?.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <circle cx="18.5" cy="18.5" r="18.5" fill="#068978" />
              <path d="M22.1999 18.5018L15.6705 25.0313L14.147 23.5077L19.1529 18.5018L14.147 13.496L15.6705 11.9724L22.1999 18.5018Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
