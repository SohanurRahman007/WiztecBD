// components/PropertyList.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoBedOutline, IoWaterOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { ITEMS_PER_PAGE } from "../data/properties";
import PropertyModal from "./PropertyModal";

// Property Card Component
const PropertyCard = ({ property, onCardClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onCardClick(property)}
    >
      {/* Property Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full 
                     hover:bg-white transition-colors shadow-md z-10"
        >
          {isFavorite ? (
            <BsHeartFill className="w-4 h-4 text-red-500" />
          ) : (
            <BsHeart className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Property Features - Bed, Bath, Area */}
        <div className="flex items-center gap-4 text-gray-600 text-xs mb-3">
          <div className="flex items-center gap-1">
            <IoBedOutline className="w-4 h-4" />
            <span>Bed: {property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoWaterOutline className="w-4 h-4" />
            <span>Bathroom: {property.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiArea className="w-4 h-4" />
            <span>{property.sqft}sqft</span>
          </div>
        </div>

        {/* Property Name & Options Menu */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 leading-tight">
            {property.name}
          </h3>
          <button
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <HiOutlineDotsVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Price & Location */}
        <div className="flex items-center gap-3">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${property.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              /{property.freq || "week"}
            </span>
          </div>
          <span className="text-md text-gray-500">{property.location}</span>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Don't show pagination if only 1 page
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Show first 4 pages, then "...", then last page
  const displayPages =
    pages.length > 5 ? [...pages.slice(0, 4), "...", totalPages] : pages;

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 
                   bg-white border border-gray-300 rounded-md hover:bg-gray-50 
                   disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Previous
      </button>

      {/* Page Numbers */}
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
                  ? "bg-[#7b1450] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}
      </nav>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 
                   bg-white border border-gray-300 rounded-md hover:bg-gray-50 
                   disabled:opacity-50"
      >
        Next <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

// Main PropertyList Component
const PropertyList = ({ allProperties = [] }) => {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Open modal with selected property
  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Close modal and reset selected property
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  // Calculate properties for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProperties = allProperties.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    const totalPages = Math.ceil(allProperties.length / ITEMS_PER_PAGE);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Property Cards Grid - 2 columns on medium+ screens */}
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

      {/* Show Pagination only if more than one page */}
      {allProperties.length > ITEMS_PER_PAGE && (
        <Pagination
          totalItems={allProperties.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      {/* Property Details Modal */}
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
