// app/buy/page.js
"use client";

import React, { useState } from "react";
import PropertyList from "../components/PropertyList";
import Sidebar from "../components/Sidebar";
import { initialProperties } from "../data/properties";

export default function BuyPage() {
  // ১. State-এ initialProperties লোড করা হয়েছে
  const [properties, setProperties] = useState(initialProperties);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOption, setSortOption] = useState("Low To High");

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);

    // ডামি ফিল্টারিং লজিক: Property Type অনুযায়ী ফিল্টার
    const filtered = initialProperties.filter((p) => {
      // যদি propertyType ফিল্টার থাকে
      if (newFilters.propertyType && newFilters.propertyType.length > 0) {
        return newFilters.propertyType.includes(p.type);
      }
      // কোনো ফিল্টার না থাকলে সব দেখাও
      return true;
    });
    setProperties(filtered);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // TODO: এখানে properties state এর উপর sorting লজিক প্রয়োগ করুন।
  };

  const resultsCount = properties.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar / Filter Column (339px width, sticky on desktop) */}
        <div className="w-full lg:w-[339px] flex-shrink-0 lg:sticky lg:top-16 self-start">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Main Content / Property List Column (Fluid width) */}
        <div className="flex-grow">
          {/* Header Row: Property Title, Reset, Sort */}
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Property —{" "}
              <span className="text-gray-500">
                Showing results ({resultsCount})
              </span>
            </h2>
            <div className="flex items-center space-x-3">
              <button className="text-sm text-gray-500 hover:text-purple-700">
                Reset Filter
              </button>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm text-gray-600">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="Low To High">Low To High</option>
                  <option value="High To Low">High To Low</option>
                  {/* Add more sorting options */}
                </select>
              </div>
            </div>
          </div>

          {/* Property Cards Grid */}
          <PropertyList allProperties={properties} />
        </div>
      </div>
    </div>
  );
}
