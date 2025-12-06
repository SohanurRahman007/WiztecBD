import Image from "next/image";
import {
  FaLaptopCode,
  FaUsers,
  FaHandshake,
  FaTshirt,
  FaPodcast,
  FaCalendarAlt,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import { MdOutlineSecurity } from "react-icons/md";

const Earnings = () => {
  return (
    // Outer container with light background padding
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* 1. Trusted By Section */}
        <div className="text-center mb-8 pt-8 pb-4">
          <p className="text-gray-600 uppercase tracking-widest text-sm mb-4">
            Trusted by +10,000 consultants & organisations
          </p>

          <div className="flex justify-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-6 items-center gap-8 flex-wrap">
            {/* Left Side - Lighter Text */}
            <span className="text-sm font-semibold text-gray-400 opacity-70">
              NEXUS
            </span>

            <span className="text-sm font-semibold text-gray-400 opacity-70">
              CODERA
            </span>

            {/* Middle - Darker Text */}
            <MdOutlineSecurity className="text-2xl text-gray-600" />

            <span className="text-sm font-semibold text-gray-600">
              TM LEVELS
            </span>

            <span className="text-sm font-semibold text-gray-600">KUDNET</span>

            <span className="text-sm font-semibold text-gray-600">UIA</span>

            <span className="text-sm font-semibold text-gray-600">PlannIT</span>

            {/* Right Side - Lighter Text (Mirroring the left) */}
            <span className="text-sm font-semibold text-gray-400 opacity-70">
              FINTECH
            </span>

            <span className="text-sm font-semibold text-gray-400 opacity-70">
              DIGI
            </span>
          </div>
        </div>

        {/* 2. Headline and Subtitle */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase font-semibold text-black bg-gradient-to-r from-[#FCC3FF] to-[#F75EFF] px-4 py-3 rounded-full inline-block mb-1">
            Diversity Revenue Stream
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none text-gray-900 mb-4">
            Maximise earnings with <br /> limitless revenue streams.
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>
        </div>

        {/* 3. Static Icons Row (Not Clickable) */}
        <div className="flex flex-wrap justify-center sm:justify-around rounded-full p-2 sm:p-3 bg-white mb-8 sm:mb-12 max-w-5xl lg:max-w-6xl mx-auto gap-1 sm:gap-2">
          {/* Courses Button - Active State */}
          <div className="bg-[#2A0019] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-bold shadow-lg ring-2 ring-[#2A0019]/50 m-0.5 sm:m-1">
            <FaLaptopCode className="mr-1.5 sm:mr-2 text-sm" />
            Courses
          </div>

          {/* Other Icons - Inactive State */}
          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaUsers className="mr-1.5 sm:mr-2 text-sm" />
            <span className="hidden xs:inline">Communities</span>
            <span className="xs:hidden">Comm.</span>
          </div>

          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaHandshake className="mr-1.5 sm:mr-2 text-sm" />
            <span className="hidden sm:inline">Coaching & Consulting</span>
            <span className="sm:hidden">Coaching</span>
          </div>

          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaTshirt className="mr-1.5 sm:mr-2 text-sm" />
            <span className="hidden xs:inline">Merchandise</span>
            <span className="xs:hidden">Merch</span>
          </div>

          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaPodcast className="mr-1.5 sm:mr-2 text-sm" />
            Podcasts
          </div>

          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaCalendarAlt className="mr-1.5 sm:mr-2 text-sm" />
            Events
          </div>

          <div className="text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm flex items-center font-medium m-0.5 sm:m-1 hover:bg-gray-100 transition-colors">
            <FaBriefcase className="mr-1.5 sm:mr-2 text-sm" />
            Brokerage
          </div>
        </div>

        {/* 4. Feature Card (Courses Section) */}
        <div className="bg-gradient-to-r from-[#802878] via-[#d458ce] to-[#d88ad4] rounded-l-full rounded-r-2xl p-6 sm:p-10 lg:p-16 max-w-6xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="text-white hidden md:flex flex-col">
              <h2 className="text-4xl font-extrabold mb-4">Courses</h2>

              <p className="mb-6 text-gray-200">
                Turn your knowledge into structured, sellable products.
              </p>

              <p className="mb-8 text-sm text-gray-300">
                Build online, drip, academic or challenge-based courses with
                built-in tools for gamification, accountability, and engagement.
                <br />
                <br />
                Every course is optimized to deliver value and generate
                recurring income.
              </p>

              <div className="text-white bg-[#421b40] font-semibold py-3 px-8 rounded-full flex items-center w-fit">
                Learn More <FaArrowRight className="ml-2 text-sm" />
              </div>
            </div>

            {/* Right Image/Video Preview */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="https://i.ibb.co/SDVL4dQc/DALL-E-2024-08-21-22-58-08-A-realistic-image-of-a-virtual-coaching-session-taking-place-via-video.png"
                  alt="A creator teaching a course on a laptop"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-30 left-50 bg-white rounded-lg p-3 shadow-xl w-60">
                  <div className="flex justify-between items-center">
                    {/* Lesson/Part Info */}
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
                        P1
                      </div>
                      <div className="text-xs text-gray-500">24 min</div>
                    </div>

                    {/* Date/User Info */}
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-800 leading-none">
                        Lady Dentoo
                      </p>
                      <p className="text-xs text-gray-500">Oct 17, 2024</p>
                    </div>
                  </div>

                  {/* Simple Playback bar for design (optional) */}
                  <div className="mt-2 h-1 bg-purple-500 rounded-full w-full"></div>
                </div>

                {/* The Floating 'Subscribe' Card (Existing Right Card) */}
                <div className="absolute bottom-45 left-60 *: bg-white rounded-lg p-3 shadow-md shadow-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white text-sm font-medium py-1.5 px-3 rounded-full">
                      Subscribe for $5.00/mo
                    </div>
                    <FaArrowRight className="text-gray-500 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
