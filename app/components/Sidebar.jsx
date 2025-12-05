// components/Sidebar.jsx (Client Component)
"use client";

import React, { useState } from "react";

// ডামি ফিল্টার ডেটা
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
  const [selectedTypes, setSelectedTypes] = useState(["Town House", "Villa"]); // ছবির মতো ডিফল্ট চেক
  // অন্যান্য ফিল্টারের জন্য state এখানে থাকবে...

  const handleTypeChange = (type) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(newTypes);

    // প্রধান পেজ কম্পোনেন্টকে ফিল্টারের পরিবর্তন সম্পর্কে জানানো
    onFilterChange({
      propertyType: newTypes,
      // অন্যান্য ফিল্টার মান এখানে যুক্ত হবে
    });
  };

  const FilterSection = ({ title, children }) => (
    <div className="border border-gray-200 p-4 rounded-lg mb-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );

  const CheckboxItem = ({ label, checked, onChange }) => (
    <div className="flex items-center">
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
      />
      <label htmlFor={label} className="ml-2 text-sm text-gray-600">
        {label}
      </label>
    </div>
  );

  return (
    <aside className="bg-white p-0">
      <h2 className="text-md font-semibold text-gray-800 mb-4">
        Property Preference
      </h2>

      {/* Rent Budget (Slider - Need external library for complex slider) */}
      <FilterSection title="Rent Budget">
        {/* ডামি স্লাইডার */}
        <div className="h-2 bg-gray-200 rounded-full my-4">
          <div className="h-full bg-purple-600 rounded-full w-2/3"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Minimum</span>
          <span>Maximum</span>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-800">$5300</span>
          <span className="text-gray-800">$670000</span>
        </div>
      </FilterSection>

      {/* Suburb Filter */}
      <FilterSection title="Suburb">
        {suburbs.map((suburb) => (
          <CheckboxItem
            key={suburb}
            label={suburb}
            checked={false}
            onChange={() => {}}
          />
        ))}
      </FilterSection>

      {/* Property Type Filter */}
      <FilterSection title="Property Type">
        {propertyTypes.map((type) => (
          <CheckboxItem
            key={type}
            label={type}
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
          />
        ))}
      </FilterSection>

      {/* Amenities Filter */}
      <FilterSection title="Amenities">
        {amenities.map((amenity) => (
          <CheckboxItem
            key={amenity}
            label={amenity}
            checked={false}
            onChange={() => {}}
          />
        ))}
        <button className="text-sm text-purple-600 mt-2">see more</button>
      </FilterSection>
    </aside>
  );
};

export default Sidebar;
