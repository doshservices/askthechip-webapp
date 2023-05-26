import { useState } from "react";
import Slider from "react-slick"
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
        beforeChange: (current, next) => setCurrentSlide(1+next),
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
            content:
                `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`
        },
        {
            id: 2,
            image: adunab,
            content:
                `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`
        },
        {
            id: 3,
            image: adunab,
            content:
                `As a member of this community, we have enjoyed easy access to financial and legal services which has allowed us to focus on our creativity… thank you ‘askthechip’ for transforming our idea from concept to business.`
        },

        // add more testimonial objects as needed
    ];

    return (
        <div className="-z-10 overflow-hidden pt-5" id="testimonials">
            <div className="container mx-auto ">
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
                                        : `bg-[#EFF4F4] border border-[#000000]/5 py-4 mt-8 min-h-[179px] flex justify-start items-start rounded-lg px-6 text-DMSans`
                                }
                            >
                                <div className="flex justify-start w-[242px]">
                                    <img src={testimonial.image} alt="Testimonial" className="h-[142px] w-[142px]" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex ">
                                        <div className="w-20 mr-2">
                                            <img src={openQuot} alt='"' />
                                        </div>
                                        <div className="my-3 text-justify mr-2">
                                            {testimonial.content}&quot;
                                        </div>
                                        <div className="flex mt-auto justify-end w-20 mr-2">
                                            <img src={closeQuot} alt='"' />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-[30px]">
                                        <div className="text-xl text-[#0A1E25] font-medium">Omobolaji A.</div>
                                        <div className="text-xl text-primary80">Founder of Adunab Designs</div>
                                    </div>

                                </div>
                            </div>
                        </div>))}

                </Slider>
            </div>
        </div>
    );
};

export default Carousel
