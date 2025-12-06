"use client";

import React, { useState } from "react";

const CreatorHeroSection = () => {
  const [email, setEmail] = useState("");

  const stats = [
    {
      label: "CO-SELLERS IN NETWORK",
      value: "21,500+",
      description: "People who can co-promote",
    },
    {
      label: "EXPECTED BUYERS / MONTH",
      value: "86",
      description: "With zero personal audience",
    },
    {
      label: "EST. MIR AT US$9/MO",
      value: "US$774",
      description: "From membership sales",
    },
    {
      label: "EARN W/O A PRODUCT",
      value: "US$300",
      description: "Just by co-selling",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#2A0019] text-white">
      {/* White dots in header section - SAME */}
      <div className="absolute top-32 left-[18%] w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
      <div className="absolute top-52 right-[23%] w-1 h-1 rounded-full bg-white/30 blur-[1px]" />
      <div className="absolute top-68 left-[28%] w-1 h-1 rounded-full bg-white/25 blur-[1px]" />
      <div className="absolute top-24 right-[18%] w-1.5 h-1.5 rounded-full bg-white/35 blur-[1px]" />
      <div className="absolute top-84 left-[20%] w-1 h-1 rounded-full bg-white/20 blur-[1px]" />
      <div className="absolute top-40 right-[28%] w-1 h-1 rounded-full bg-white/25 blur-[1px]" />

      {/* Small shadows only near heading section - left side */}
      <div className="absolute top-16 left-[8%] w-44 h-44 rounded-full bg-[#ECD6C5CC] blur-3xl opacity-22" />
      <div className="absolute top-28 left-[13%] w-30 h-30 rounded-full bg-[#ECD6C5CC] blur-2xl opacity-16" />

      {/* Small shadows only near heading section - right side */}
      <div className="absolute top-16 right-[8%] w-44 h-44 rounded-full bg-[#ECD6C5CC] blur-3xl opacity-22" />
      <div className="absolute top-28 right-[13%] w-30 h-30 rounded-full bg-[#ECD6C5CC] blur-2xl opacity-16" />

      {/* Light blue glow near heading text - LEFT SIDE - COMBINED COLOR */}
      <div className="absolute top-24 left-[13%] w-22 h-22 rounded-full bg-gradient-to-br from-[#579ECEB2]/45 via-[#ECD6C5CC]/35 to-[#579ECEB2]/45 blur-2xl opacity-27" />
      <div className="absolute top-32 left-[18%] w-15 h-15 rounded-full bg-gradient-to-br from-[#ECD6C5CC]/35 via-[#579ECEB2]/45 to-[#ECD6C5CC]/35 blur-xl opacity-22" />

      {/* Light blue glow near heading text - RIGHT SIDE - COMBINED COLOR */}
      <div className="absolute top-24 right-[13%] w-22 h-22 rounded-full bg-gradient-to-bl from-[#579ECEB2]/45 via-[#ECD6C5CC]/35 to-[#579ECEB2]/45 blur-2xl opacity-27" />
      <div className="absolute top-32 right-[18%] w-15 h-15 rounded-full bg-gradient-to-bl from-[#ECD6C5CC]/35 via-[#579ECEB2]/45 to-[#ECD6C5CC]/35 blur-xl opacity-22" />

      {/* Top gradient accent - SAME */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3A0029] to-transparent" />

      {/* Bottom gradient accent - SAME */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1A0009] to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Top Badge - SAME */}
        <div className="text-center mb-6">
          <span className="inline-block px-6 py-2.5 text-xs tracking-[0.3em] uppercase rounded-full border border-[#ECD6C5]/30 bg-[#ECD6C5]/10 backdrop-blur-sm font-medium text-[#ECD6C5]">
            BUILD FOR YOU
          </span>
        </div>

        {/* Main Heading Section with Glow Effects - Gl */}
        <div className="relative text-center max-w-3xl mx-auto mb-6">
          {/* Extra white dots around heading - SAME */}
          <div className="absolute top-0 left-[13%] w-1 h-1 rounded-full bg-white/30 blur-[1px]" />
          <div className="absolute top-8 right-[16%] w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px]" />
          <div className="absolute top-1/2 left-[8%] w-1 h-1 rounded-full bg-white/25 blur-[1px]" />
          <div className="absolute top-1/2 right-[8%] w-1 h-1 rounded-full bg-white/25 blur-[1px]" />

          {/* Glow effect behind "Built for Creators." */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-lg h-44 bg-gradient-to-r from-[#579ECEB2]/18 via-[#ECD6C5CC]/12 to-[#579ECEB2]/18 blur-2xl opacity-33 rounded-full" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 relative z-10">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c6f0c2] to-[#91c4e9]">
              Built for Creators.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c6f0c2] to-[#91c4e9]">
              Powered for Profit
            </span>
          </h1>

          {/* Glow effect behind paragraph text  */}
          <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-[85%] max-w-xl h-32 bg-gradient-to-r from-[#579ECEB2]/12 via-[#ECD6C5CC]/10 to-[#579ECEB2]/12 blur-xl opacity-22 rounded-full" />

          <p className="text-lg text-[#ECD6C5]/90 max-w-2xl mx-auto leading-relaxed mt-4 relative z-10">
            Create and sell courses, consulting services, and communities - with
            <span className="font-semibold text-white ml-1">
              Zero marketing cost
            </span>{" "}
            and a built-in sales network.
          </p>
        </div>

        {/* Email Input Section - SAME */}
        <div className="max-w-xl mx-auto mb-10 relative">
          {/* Glow effect behind email section */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl h-24 bg-gradient-to-r from-[#579ECEB2]/12 via-[#ECD6C5CC]/10 to-[#579ECEB2]/12 blur-xl opacity-16 rounded-full" />

          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 pl-5 pr-36 rounded-full bg-gray-800 border border-[#ECD6C5]/20 text-white placeholder-[#ECD6C5]/60 focus:outline-none focus:ring-2 focus:ring-[#ECD6C5]/30 backdrop-blur-sm relative z-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4A0039] to-[#3A0029] border border-[#ECD6C5]/20 text-[#ECD6C5] font-semibold hover:from-[#5A0049] hover:to-[#4A0039] hover:border-[#ECD6C5]/30 transition-all duration-300 shadow-lg hover:shadow-[#ECD6C5]/20 z-20">
                Start for Free
              </button>
            </div>

            {/* Additional text lines below the form */}
            <div className="text-center mt-4 space-y-2">
              <p className="text-[#ECD6C5]/60 text-xs">
                By proceeding you agree to our Platform terms & Privacy Notice
              </p>
            </div>
          </div>
        </div>
        {/* Stats Section */}

        {/* Stats Section */}
        <div className="border-[#505152] border bg-[#2e041d] text-white rounded-2xl  max-w-5xl w-full mx-auto font-display">
          {/* Title and Button Section */}
          <div className="flex justify-between items-center p-4 mb-4">
            <h2 className="text-3xl font-semibold text-gray-100">
              Sell from day one - even with zero audience
            </h2>
            <button className="px-5 py-2 border border-gray-400 rounded-full text-sm text-gray-100 hover:bg-white/10 transition-colors">
              Open calculator
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <p className="text-xs uppercase text-gray-400 tracking-wider">
                  {stat.label}
                </p>
                <p className="text-4xl font-semibold mt-2 text-gray-100">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-2">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Quote / Testimonial Section (The floating card) */}
          <div className="relative pb-6">
            {/* Testimonial Card */}
            <div className="bg-gray-200 text-gray-700 p-3">
              <p className="text-base">
                Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
                convert clients inside the platform so you can sell from day
                one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorHeroSection;
