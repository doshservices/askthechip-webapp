import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import adunab from "./../assets/images/adunab.png";
import openQuot from "./../assets/icons/opening-quotation.svg";
import closeQuot from "./../assets/icons/closing-quotation.svg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 md:-right-2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="z-50 absolute top-1/2 left-0 md:-left-2 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const Dot = ({ onClick, active }) => {
    return (
      <div
        className={`mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-700 ${active && "bg-primary"
          }`}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    // dots: true,
    dots: <Dot />,
    beforeChange: (current, next) => setCurrentSlide(1 + next),
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: adunab,
      content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
    },
    {
      id: 2,
      image: adunab,
      content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
    },
    {
      id: 3,
      image: adunab,
      content: `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`,
    },

    // add more testimonial objects as needed
  ];

  return (
    <div className="-z-10 overflow-hidden pt-5" id="testimonials">
      <div className="hidden md:block container mx-auto ">
        <Slider
          {...settings}
          afterChange={(index) => setCurrentSlide(index)}
          dots={true}
          autoplay={true}
          autoplaySpeed={4000}
          className="center-padding"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-16 px-4">
              <div
                className={
                  currentSlide === testimonial.id
                    ? `bg-[#EFF4F4] border border-[#000000]/5 py-8 min-h-[253px] flex justify-start items-start rounded-lg px-6 text-DMSans`
                    : `bg-[#EFF4F4] border border-[#000000]/5 py-4 mt-0 md:mt-8 min-h-[179px] flex justify-start items-start rounded-lg px-6 text-DMSans`
                }
              >
                <div className="flex justify-start w-full max-w-[6rem] md:max-w-[242px]">
                  <img
                    src={testimonial.image}
                    alt="Testimonial"
                    className="w-20 h-auto aspect-square md:h-[142px] md:w-[142px]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex ">
                    <div className="w-20 mr-2">
                      <img src={openQuot} alt='"' />
                    </div>
                    <div className="my-3 text-justify mr-2 text-[0.85rem] md:text-normal">
                      {testimonial.content}&quot;
                    </div>
                    <div className="flex mt-auto justify-end w-20 mr-2">
                      <img src={closeQuot} alt='"' />
                    </div>
                  </div>
                  <div className="px-6 mt-[1.88rem]">
                    <div className="flex text-xl text-[#0A1E25] font-medium">
                      <p className="mr-3">Omobolaji A.</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                        <path d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z" fill="#0072B1" />
                      </svg>
                    </div>
                    <div className="text-xl text-primary80">
                      Founder of Adunab Designs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="block md:hidden container mx-auto ">
        {testimonials.slice(0, 2).map((testimonial) => (
          <div key={testimonial.id} className="mb-16 px-4">
            <div
              className={`bg-[#EFF4F4] border border-[#000000]/5 py-8 min-h-[253px] flex justify-start items-start rounded-lg px-6 text-DMSans`}
            >
              <div className="flex justify-start w-20 md:max-w-[242px]">
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-32 h-auto aspect-square md:h-[142px] md:w-[142px]"
                />
              </div>
              <div className="flex flex-col w-full max-w-[100%_-_6rem]">
                <div className="flex">
                  <div className="w-full max-w-[1rem] mx-2">
                    <img src={openQuot} alt='"' />
                  </div>
                  <div className="my-3 text-justify mr-2 text-[0.85rem] md:text-normal">
                    {testimonial.content}&quot;
                  </div>
                </div>
                <div className="ml-2 px-6 mt-[1.88rem]">
                  <div className="text-xl text-[#0A1E25] font-medium">
                    Omobolaji A.
                  </div>
                  <div className="text-xl text-primary80">
                    Founder of Adunab Designs
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
