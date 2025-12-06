"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Gallery images
const dummyGallery = [
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_3_otfmrr.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936497/image_vgytkr.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_2_a6fj13.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_4_uwg0qh.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_6_lfb0fk.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_1_ygokbh.png",
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_5_gsofek.png",
];

const PropertyModal = ({ isOpen, onClose, property }) => {
  const mainImage = dummyGallery[0];
  const [activeImage, setActiveImage] = React.useState(mainImage);

  if (!isOpen) return null;

  const handleClose = () => {
    setActiveImage(mainImage);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/30 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-3 sm:p-4 md:p-6">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-lg z-10 text-gray-700 hover:text-purple-700 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            {/* Main Image View */}
            <div className="h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden relative bg-gray-100">
              <Image
                src={activeImage}
                alt={`${property.name} main view`}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 896px"
                priority
              />
            </div>

            {/* Carousel Thumbnails */}
            <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {dummyGallery.map((img, index) => (
                <div
                  key={index}
                  className={`w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 relative ${
                    activeImage === img
                      ? "border-purple-700 shadow-md"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <div className="text-center pt-1 sm:pt-2">
              <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 px-2">
                {property.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                ${property.price}/{property.freq}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
