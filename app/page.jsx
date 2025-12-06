"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PropertyList from "./components/PropertyList";
import { initialProperties } from "./data/properties";
import { IoChevronDown } from "react-icons/io5";

export default function BuyPage() {
  const [properties, setProperties] = useState(initialProperties);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOption, setSortOption] = useState("Low To High");

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);

    const filtered = initialProperties.filter((p) => {
      if (newFilters.propertyType && newFilters.propertyType.length > 0) {
        return newFilters.propertyType.includes(p.type);
      }
      return true;
    });

    setProperties(filtered);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...properties];

    if (value === "Low To High") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "High To Low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProperties(sorted);
  };

  const resultsCount = properties.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[339px] flex-shrink-0 lg:sticky lg:top-16 self-start">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Header */}
          <div className="flex justify-between items-center border mt-3 mb-6 p-3 rounded-2xl border-gray-200 ">
            <h2 className="text-lg font-semibold text-gray-800">
              Property —{" "}
              <span className="text-gray-500 text-sm">
                Showing results ({resultsCount})
              </span>
            </h2>

            {/* Sort dropdown */}
            <div className="relative w-44">
              {/* Floating Label */}
              <span className="absolute left-3 top-1.5 text-[10px] text-gray-500 uppercase tracking-wide">
                Sort by
              </span>

              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="appearance-none bg-gray-50 pt-5 pb-2 pl-3 pr-9 w-full 
    border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer
    hover:border-gray-400 focus:outline-none focus:ring-2 
    focus:ring-[#7b1450] focus:border-[#7b1450] transition-colors"
              >
                <option value="Low To High">Low to High</option>
                <option value="High To Low">High to Low</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <IoChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Property Cards (Filtered + Sorted) */}
          <PropertyList allProperties={properties} />
        </div>
      </div>
    </div>
  );
}
