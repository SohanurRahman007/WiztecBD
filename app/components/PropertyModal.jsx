// components/PropertyModal.jsx
"use client";

import React from "react";
import { X } from "lucide-react";

// আপনার দেওয়া ৭টি ইমেজ লিংক ব্যবহার করা হলো
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
  if (!isOpen) return null;

  // মেইন ইমেজ হিসেবে প্রথম লিংকটি ডিফল্ট সেট করা হলো
  const mainImage = dummyGallery[0];
  const [activeImage, setActiveImage] = React.useState(mainImage);

  const handleClose = () => {
    setActiveImage(mainImage);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg z-10 text-gray-700 hover:text-purple-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col space-y-4">
            {/* Main Image View */}
            <div className="h-96 w-full rounded-lg overflow-hidden relative bg-gray-100">
              <img
                src={activeImage} // আসল লিংক ব্যবহার করা হলো
                alt={`${property.name} main view`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Carousel Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2 justify-center">
              {dummyGallery.map((img, index) => (
                <div
                  key={index}
                  className={`w-24 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === img
                      ? "border-purple-700 shadow-md"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img
                    src={img} // আসল লিংক ব্যবহার করা হলো
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <h4 className="font-bold text-gray-800">{property.name}</h4>
              <p className="text-sm text-gray-500">
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
