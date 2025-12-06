"use client";

import React from "react";
import {
  FaArrowRight,
  FaCreditCard,
  FaChartBar,
  FaEnvelopeOpenText,
  FaPager,
  FaAddressBook,
  FaMailBulk,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";

const toolCards = [
  {
    title: "Payments",
    icon: FaCreditCard,
    description:
      "Responsibly sourced and eco-friendly fabrics for a better tomorrow.",
    iconColor: "text-red-500",
  },
  {
    title: "Analytics",
    icon: FaChartBar,
    description: "Understand your growth with smart, built-in analytics.",
    iconColor: "text-blue-500",
  },
  {
    title: "Newsletters",
    icon: FaEnvelopeOpenText,
    description: "Build your audience with engaging, branded newsletter.",
    iconColor: "text-yellow-500",
  },
  {
    title: "Pages",
    icon: FaPager,
    description:
      "Showcase your expertise with a personal profile that sells for you.",
    iconColor: "text-yellow-600",
  },
  {
    title: "Contact",
    icon: FaAddressBook,
    description:
      "Organize your contacts and turn them into your most valuable asset.",
    iconColor: "text-gray-700",
  },
  {
    title: "Emails",
    icon: FaMailBulk,
    description:
      "Showcase your expertise with a personal profile that sells for you.",
    iconColor: "text-pink-500",
  },
  {
    title: "Co-sell network",
    icon: FaUsers,
    description:
      "Collaborate with others to sell more without ad spend or extra effort.",
    iconColor: "text-orange-500",
    span: "md:col-span-2",
  },
  {
    title: "Enterprise plan",
    icon: FaBuilding,
    description:
      "Full white-label platform hosted on a dedicated, auto-scaling server.",
    iconColor: "text-white",
    span: "md:col-span-2",
  },
];

const ToolCard = ({
  title,
  icon: Icon,
  description,
  iconColor,
  span = "col-span-1",
}) => {
  const isEnterprise = title === "Enterprise plan";

  const gradientStyle = isEnterprise
    ? "bg-gradient-to-r from-[#A16A6B] to-[#4D5D69] text-white"
    : "bg-white text-gray-900";

  return (
    <div
      className={`${span} ${gradientStyle} rounded-xl p-5 md:p-6 shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl h-full`}
    >
      <div>
        <div
          className={`w-8 h-8 rounded-md mb-3 flex items-center justify-center ${
            isEnterprise ? "bg-white/30" : "bg-gray-50"
          }`}
        >
          <Icon
            className={`w-5 h-5 ${isEnterprise ? "text-white" : iconColor}`}
          />
        </div>
        <h3
          className={`text-lg md:text-xl font-bold mb-2 ${
            isEnterprise ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>

      <div>
        <p
          className={`text-sm mb-4 ${
            isEnterprise ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <div
          className={`flex items-center text-sm font-semibold ${
            isEnterprise
              ? "text-white hover:text-gray-300"
              : "text-[#FFD900] hover:text-[#FFC000]"
          }`}
        >
          Learn More <FaArrowRight className="ml-2 w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

const EssentialToolsSection = () => {
  return (
    <div className="bg-[#FFFDF5] py-10 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-6 lg:mb-10">
          <span className="text-xs uppercase font-semibold text-gray-600 tracking-widest bg-gradient-to-r from-[#E0D8C9] via-[#D2C9B8] to-[#BCB3A0] px-3 py-2 rounded-full inline-block mb-4 border border-gray-200">
            ESSENTIAL TOOLS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-2 text-gray-900">
            Essential Tools <br /> Zero Distractions
          </h2>
          <p className="text-gray-600 text-base md:text-md max-w-sm mx-auto">
            Create diverse products on the platform and leverage our powerful
            tools to drive sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {toolCards.slice(0, 6).map((card, index) => (
            <ToolCard key={index} {...card} />
          ))}

          <div className="md:col-span-2 lg:col-span-1">
            <ToolCard {...toolCards[6]} />
          </div>

          <div className="md:col-span-2">
            <ToolCard {...toolCards[7]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialToolsSection;
