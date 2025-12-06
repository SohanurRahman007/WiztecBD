// components/Sidebar.jsx (Client Component)
"use client";

import React, { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";

// Filter data
const suburbs = ["Esthelby Drive", "Cranbrook", "2-6 Eshelby Dr"];
const propertyTypes = [
  "House",
  "Land",
  "Apartment",
  "Town House",
  "Villa",
  "Acreage",
];
const amenities = ["Pet-friendly", "Parking", "Private Pool", "Privatearea"];

const Sidebar = ({ onFilterChange }) => {
  // State for filters
  const [selectedSuburbs, setSelectedSuburbs] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState(["Town House", "Villa"]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Rent budget state (slider values)
  const [minBudget, setMinBudget] = useState(5300);
  const [maxBudget, setMaxBudget] = useState(670000);

  // Handle property type change
  const handleTypeChange = (type) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(newTypes);

    if (onFilterChange) {
      onFilterChange({
        propertyType: newTypes,
        suburbs: selectedSuburbs,
        amenities: selectedAmenities,
        minBudget: minBudget,
        maxBudget: maxBudget,
      });
    }
  };

  // Handle suburb change
  const handleSuburbChange = (suburb) => {
    const newSuburbs = selectedSuburbs.includes(suburb)
      ? selectedSuburbs.filter((s) => s !== suburb)
      : [...selectedSuburbs, suburb];

    setSelectedSuburbs(newSuburbs);

    if (onFilterChange) {
      onFilterChange({
        propertyType: selectedTypes,
        suburbs: newSuburbs,
        amenities: selectedAmenities,
        minBudget: minBudget,
        maxBudget: maxBudget,
      });
    }
  };

  // Handle amenity change
  const handleAmenityChange = (amenity) => {
    const newAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];

    setSelectedAmenities(newAmenities);

    if (onFilterChange) {
      onFilterChange({
        propertyType: selectedTypes,
        suburbs: selectedSuburbs,
        amenities: newAmenities,
        minBudget: minBudget,
        maxBudget: maxBudget,
      });
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Component for checkbox items
  const CheckboxItem = ({ label, checked, onChange }) => (
    <div className="flex items-center group cursor-pointer">
      <div className="relative">
        <input
          id={`filter-${label.replace(/\s+/g, "-").toLowerCase()}`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="
            h-4 w-4 sm:h-5 sm:w-5
            appearance-none 
            border border-gray-300 
            rounded 
            cursor-pointer
            transition-all
            duration-200
            checked:bg-[#7b1450]
            checked:border-[#7b1450]
            focus:outline-none
            focus:ring-2
            focus:ring-[#7b1450]
            focus:ring-offset-1
            relative
            z-10
          "
        />
        {checked && (
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-2.5 h-2.5 sm:w-3 sm:h-3 text-white pointer-events-none z-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <label
        htmlFor={`filter-${label.replace(/\s+/g, "-").toLowerCase()}`}
        className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-700 cursor-pointer select-none
                   group-hover:text-gray-900 transition-colors"
      >
        {label}
      </label>
    </div>
  );

  return (
    <aside
      className="w-full lg:max-w-md bg-white p-2 sm:p-3 md:p-2 rounded-xl shadow-md 
                      lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto
                      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      {/* Sidebar Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 sm:p-4 border border-gray-200 rounded-2xl">
        <h2 className="text-base sm:text-lg lg:text-sm text-gray-900 font-semibold">
          Property Preference
        </h2>
        <button
          onClick={() => {
            setSelectedSuburbs([]);
            setSelectedTypes([]);
            setSelectedAmenities([]);
            setMinBudget(5300);
            setMaxBudget(670000);
          }}
          className="flex items-center px-3 py-1 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 
                     bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
        >
          <span>Reset Filter</span>
          <BiReset className="w-4 h-4" />
        </button>
      </div>

      {/* Rent Budget Filter */}
      <div className="border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl mb-4 sm:mb-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Rent Budget
          </h3>
          <span className="text-gray-800 text-xs sm:text-sm">
            <FaRegWindowMinimize />
          </span>
        </div>
        <div className="space-y-3">
          <div className="relative py-3 sm:py-4 px-1">
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full relative overflow-hidden">
              <div
                className="h-full bg-gray-300 absolute left-0"
                style={{ width: "20%" }}
              ></div>

              <div
                className="h-full bg-[#7b1450] absolute"
                style={{
                  width: "60%",
                  left: "20%",
                }}
              ></div>

              <div
                className="h-full bg-gray-300 absolute right-0"
                style={{ width: "20%" }}
              ></div>

              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 
                          border-[#7b1450] rounded-full shadow-md cursor-pointer
                          hover:border-[#6b1145] transition-colors z-10"
                style={{ left: "20%" }}
              >
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7b1450] rounded-full absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>

              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 
                          border-[#7b1450] rounded-full shadow-md cursor-pointer
                          hover:border-[#6b1145] transition-colors z-10"
                style={{ left: "80%" }}
              >
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7b1450] rounded-full absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 pt-2">
            <div className="text-center bg-gray-50 px-4 sm:px-6 md:px-8 py-2 rounded-md w-full sm:w-auto">
              <div className="text-xs text-gray-500 font-medium mb-1">
                Minimum
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">
                {formatCurrency(minBudget)}
              </div>
            </div>

            <div className="text-center bg-gray-50 px-4 sm:px-6 md:px-8 py-2 rounded-md w-full sm:w-auto">
              <div className="text-xs text-gray-500 font-medium mb-1">
                Maximum
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">
                {formatCurrency(maxBudget)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suburb Filter */}
      <div className="border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl mb-4 sm:mb-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Suburb
          </h3>
          <span className="text-gray-800 text-xs sm:text-sm">
            <FaRegWindowMinimize />
          </span>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {suburbs.map((suburb) => (
            <CheckboxItem
              key={suburb}
              label={suburb}
              checked={selectedSuburbs.includes(suburb)}
              onChange={() => handleSuburbChange(suburb)}
            />
          ))}
        </div>
      </div>

      {/* Property Type Filter */}
      <div className="border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl mb-4 sm:mb-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Property Type
          </h3>
          <span className="text-gray-800 text-xs sm:text-sm">
            <FaRegWindowMinimize />
          </span>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {propertyTypes.map((type) => (
            <CheckboxItem
              key={type}
              label={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
          ))}
        </div>
      </div>

      {/* Amenities Filter */}
      <div className="border border-gray-200 p-3 sm:p-4 md:p-5 rounded-xl mb-4 sm:mb-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Amenities
          </h3>
          <span className="text-gray-800 text-xs sm:text-sm">
            <FaRegWindowMinimize />
          </span>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {amenities.map((amenity) => (
            <CheckboxItem
              key={amenity}
              label={amenity}
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
            />
          ))}
          <button
            className="text-xs sm:text-sm font-medium text-[#7b1450] hover:text-[#6b1145] 
                      transition-colors mt-2 focus:outline-none focus:underline underline"
          >
            See more
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
