"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonialData = [
  {
    name: "Iva Ryan",
    role: "Marketing manager at Adobe",
    review:
      "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    earned: "$2M",
    earnedContext: "EARNED IN HELENUII",
    rating: 5,
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    videoPreview:
      "https://i.ibb.co/SDVL4dQc/DALL-E-2024-08-21-22-58-08-A-realistic-image-of-a-virtual-coaching-session-taking-place-via-video.png",
  },
  {
    name: "Maria Sanchez",
    role: "Freelance Consultant",
    review:
      "The built-in analytics feature is incredibly useful for tracking audience engagement and optimizing content delivery. Highly recommended!",
    earned: "$1.5M",
    earnedContext: "EARNED IN HELENUII",
    rating: 5,
    tags: ["Consultant", "Speaker", "Author"],
    videoPreview:
      "https://i.ibb.co/SDVL4dQc/DALL-E-2024-08-21-22-58-08-A-realistic-image-of-a-virtual-coaching-session-taking-place-via-video.png",
  },
  {
    name: "Alex Chen",
    role: "Growth Strategist",
    review:
      "Zero marketing cost is a reality here. The co-sell network drives continuous sales with minimal effort from my side. Fantastic!",
    earned: "$3M",
    earnedContext: "EARNED IN HELENUII",
    rating: 5,
    tags: ["Strategist", "Entrepreneur", "Mentor"],
    videoPreview:
      "https://i.ibb.co/SDVL4dQc/DALL-E-2024-08-21-22-58-08-A-realistic-image-of-a-virtual-coaching-session-taking-place-via-video.png",
  },
];

const RatingStars = ({ count }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`h-4 w-4 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-2xl w-full min-h-[350px] md:min-h-[380px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full">
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[250px] lg:min-h-full">
          <Image
            src={data.videoPreview}
            alt={`Video preview of creator ${data.name}`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white/50 bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
              <FaPlay className="h-4 w-4 md:h-5 md:w-5 ml-1" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3 md:gap-0">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full mr-3 overflow-hidden"></div>
                <div>
                  <p className="font-bold text-lg text-gray-900 leading-tight">
                    {data.name}
                  </p>
                  <p className="text-sm text-gray-500">{data.role}</p>
                </div>
              </div>
              <RatingStars count={data.rating} />
            </div>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 italic border-l-4 border-gray-100 pl-3">
              "{data.review}"
            </p>
          </div>

          <div className="mt-auto">
            <p className="text-3xl md:text-4xl font-extrabold text-[#2A0019]">
              {data.earned}
            </p>
            <p className="text-xs md:text-sm uppercase text-gray-500 tracking-wider mt-1">
              {data.earnedContext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="relative text-white py-8 md:py-12 lg:py-16 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A0019] via-[#263542] to-[#262c31d4]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs uppercase font-semibold text-white px-3 md:px-4 py-2 md:py-3 rounded-full inline-block mb-3 tracking-widest bg-gradient-to-r from-[#F75EFF] to-[#6A1A4E]">
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
            Trusted by Creators <br /> & Proven by Results.
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto">
            See how others grow with Growhubs — real stories, real success.
          </p>
        </div>

        <div className="mt-8 md:mt-12 relative">
          <Swiper
            modules={[Navigation]}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.4,
                spaceBetween: 30,
              },
            }}
            className="p-2 md:p-4"
          >
            {testimonialData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="px-2 md:px-0">
                  <TestimonialCard data={data} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center z-10 hidden lg:flex cursor-pointer">
            <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center z-10 hidden lg:flex cursor-pointer">
            <FaChevronRight className="h-3 w-3 md:h-4 md:w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
