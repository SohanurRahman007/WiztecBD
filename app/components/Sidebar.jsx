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

    // Send filter changes to parent
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
      {/* Custom Checkbox with Project Color */}
      <div className="relative">
        <input
          id={`filter-${label.replace(/\s+/g, "-").toLowerCase()}`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="
            h-5 w-5 
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
        {/* Checkmark SVG */}
        {checked && (
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-3 h-3 text-white pointer-events-none z-20"
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
        className="ml-3 text-sm text-gray-700 cursor-pointer select-none
                   group-hover:text-gray-900 transition-colors"
      >
        {label}
      </label>
    </div>
  );

  return (
    <aside className="w-full max-w-md bg-white p-3 rounded-xl shadow-md sticky top-6">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6 p-4 border border-gray-200 rounded-2xl">
        <h2 className="text-lg text-gray-900">Property Preference</h2>
        <button
          onClick={() => {
            setSelectedSuburbs([]);
            setSelectedTypes([]);
            setSelectedAmenities([]);
            setMinBudget(5300);
            setMaxBudget(670000);
          }}
          className="flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-gray-700 
                     bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span>Reset Filter</span>
          <BiReset className="w-4 h-4" />
        </button>
      </div>

      {/* Rent Budget Filter */}
      <div className="border border-gray-200 p-5 rounded-xl mb-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-900">Rent Budget</h3>
          <span className="text-gray-800">
            <FaRegWindowMinimize />
          </span>
        </div>
        <div className="space-y-3">
          {/* Slider with space on both sides */}
          <div className="relative py-4 px-1">
            {/* Slider Track with space on sides */}
            <div className="h-2 bg-gray-200 rounded-full relative overflow-hidden">
              {/* Left side normal color (20%) */}
              <div
                className="h-full bg-gray-300 absolute left-0"
                style={{ width: "20%" }}
              ></div>

              {/* Middle active range - Project Color */}
              <div
                className="h-full bg-[#7b1450] absolute"
                style={{
                  width: "60%",
                  left: "20%",
                }}
              ></div>

              {/* Right side normal color (20%) */}
              <div
                className="h-full bg-gray-300 absolute right-0"
                style={{ width: "20%" }}
              ></div>

              {/* Min Handle - Project Color */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 
                          border-[#7b1450] rounded-full shadow-md cursor-pointer
                          hover:border-[#6b1145] transition-colors z-10"
                style={{ left: "20%" }}
              >
                <div
                  className="w-2 h-2 bg-[#7b1450] rounded-full absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>

              {/* Max Handle - Project Color */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 
                          border-[#7b1450] rounded-full shadow-md cursor-pointer
                          hover:border-[#6b1145] transition-colors z-10"
                style={{ left: "80%" }}
              >
                <div
                  className="w-2 h-2 bg-[#7b1450] rounded-full absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2"
                ></div>
              </div>
            </div>
          </div>

          {/* Min Max text below slider */}
          <div className="flex justify-between items-center pt-2">
            <div className="text-center bg-gray-50 px-8 p-2 rounded-md">
              <div className="text-xs text-gray-500 font-medium mb-1">
                Minimum
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {formatCurrency(minBudget)}
              </div>
            </div>

            <div className="text-center bg-gray-50 px-8 p-2 rounded-md">
              <div className="text-xs text-gray-500 font-medium mb-1">
                Maximum
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {formatCurrency(maxBudget)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suburb Filter */}
      <div className="border border-gray-200 p-5 rounded-xl mb-6 bg-white shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Suburb</h3>
        <div className="space-y-3">
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
      <div className="border border-gray-200 p-5 rounded-xl mb-6 bg-white shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Property Type
        </h3>
        <div className="space-y-3">
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
      <div className="border border-gray-200 p-5 rounded-xl mb-6 bg-white shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Amenities
        </h3>
        <div className="space-y-3">
          {amenities.map((amenity) => (
            <CheckboxItem
              key={amenity}
              label={amenity}
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
            />
          ))}
          <button
            className="text-sm font-medium text-[#7b1450] hover:text-[#6b1145] 
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
