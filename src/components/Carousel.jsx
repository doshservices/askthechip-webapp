import { useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from "./../assets/images/test1.png";
import test2 from "./../assets/images/test2.png";
import test3 from "./../assets/images/test3.png";


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="absolute top-1/2 right-0 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
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
                className="z-50 absolute top-1/2 left-0 -translate-y-1/2 transform rounded-full bg-primary p-2 text-white"
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
        beforeChange: (current, next) => setCurrentSlide(next),
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        infinite: true,
        cssEase: "ease-in-out",
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
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
            id: 0,
            image: test1,
            content:
                `Current slide ipsum
                dolor sit amet consectetur, adipisicing elit. Itaque suscipit
                repellendus magni illum quidem! Minima voluptate quo similique
                incidunt quibusdam.`
        },
        {
            id: 1,
            image: test2,
            content:
                `Current slide ipsum
                dolor sit amet consectetur, adipisicing elit. Itaque suscipit
                repellendus magni illum quidem! Minima voluptate quo similique
                incidunt quibusdam.`
        },
        {
            id: 2,
            image: test3,
            content:
                `Current slide ipsum
                dolor sit amet consectetur, adipisicing elit. Itaque suscipit
                repellendus magni illum quidem! Minima voluptate quo similique
                incidunt quibusdam.`
        }
        // add more testimonial objects as needed
    ];

    return (
        <div className=" overflow-hidden pt-5" id="testimonials">
            <div className="container mx-auto ">
                <Slider
                    {...settings}
                    afterChange={(index) => setCurrentSlide(index)}
                    dots={true}
                    autoplay={true}
                    autoplaySpeed={2000}
                    className="center-padding"
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="mb-16 px-4">
                            <div
                                className={
                                    currentSlide === testimonial.id
                                        ? `bg-[#75b8c880] py-8 min-h-[253px] flex justify-center items-center rounded-lg px-6`
                                        : `bg-[#A1C5CF] py-4 min-h-[179px] flex justify-center items-center rounded-lg px-6`
                                }
                            >
                                &quot;{testimonial.content}&quot;
                            </div>
                            <div className="flex justify-center items-center my-4">
                                <img src={testimonial.image} alt="Testimonial" />
                            </div>
                        </div>))}

                </Slider>
            </div>
        </div>
    );
};

export default Carousel
