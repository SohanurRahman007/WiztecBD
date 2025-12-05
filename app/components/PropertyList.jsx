// components/PropertyList.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
// lucide-react থেকে আইকন ইমপোর্ট করা হয়েছে
import {
  BedDouble,
  Bath,
  Square,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ডেটা ফাইল থেকে ITEMS_PER_PAGE ইমপোর্ট করা হয়েছে (Relative Import)
import { ITEMS_PER_PAGE } from "../data/properties";
import PropertyModal from "./PropertyModal"; // মডাল কম্পোনেন্ট ইমপোর্ট করা হলো

// --- Property Card Component ---
const PropertyCard = ({ property, onCardClick }) => (
  <div
    className="block border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    onClick={() => onCardClick(property)}
  >
    <div className="relative h-48 bg-gray-200">
      {/* 🛑 আসল ইমেজ লিংক ব্যবহার করা হলো 🛑 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${property.image})`,
        }}
      ></div>
      <button
        type="button"
        className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-500 hover:text-red-500 shadow-md z-10"
        onClick={(e) => {
          e.stopPropagation(); // হার্ট আইকনে ক্লিক করলে যেন Modal ওপেন না হয়
          console.log("Favourite toggled");
        }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </button>
    </div>

    {/* Card Details */}
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
        {property.name}
      </h3>
      <p className="text-xl font-extrabold text-purple-700 mb-2">
        ${property.price}
        <span className="text-sm font-medium text-gray-500">
          /{property.freq || "week"}
        </span>
      </p>
      <div className="flex space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <BedDouble className="w-4 h-4 mr-1" /> {property.beds} Bed
        </div>
        <div className="flex items-center">
          <Bath className="w-4 h-4 mr-1" /> {property.baths} Bathroom
        </div>
        <div className="flex items-center">
          <Square className="w-4 h-4 mr-1" /> {property.sqft} sqft
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">{property.location}</p>
    </div>
  </div>
);

// --- Pagination Component ---
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // ছবির সাথে মিল রেখে পেজ নম্বর ডিসপ্লে লজিক
  const displayPages =
    pages.length > 5 ? [...pages.slice(0, 4), "...", totalPages] : pages;

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Previous
      </button>
      <nav className="flex space-x-1" aria-label="Pagination">
        {displayPages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3 py-1 text-sm text-gray-700">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
                page === currentPage
                  ? "bg-purple-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}
      </nav>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
      >
        Next <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

// --- Main PropertyList Component ---
const PropertyList = ({ allProperties = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedProperty, setSelectedProperty] = useState(null); // Selected card data

  // Modal ওপেন করার হ্যান্ডলার
  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Modal বন্ধ করার হ্যান্ডলার
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null); // ডেটা রিসেট
  };

  // পেজিনেশন লজিক
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProperties = allProperties.slice(startIndex, endIndex);

  // পেজ পরিবর্তন হ্যান্ডলার
  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(allProperties.length / ITEMS_PER_PAGE)) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onCardClick={handleCardClick}
            />
          ))
        ) : (
          <p className="md:col-span-2 text-center text-gray-500 py-10">
            No properties found.
          </p>
        )}
      </div>

      {/* Pagination Component */}
      {allProperties.length > ITEMS_PER_PAGE && (
        <Pagination
          totalItems={allProperties.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      {/* Modal Component */}
      {selectedProperty && (
        <PropertyModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
      )}
    </div>
  );
};

export default PropertyList;
