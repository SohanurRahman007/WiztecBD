// data/properties.js

// আপনার দেওয়া ইমেজ লিংকগুলো একটি অ্যারেতে রাখা হলো
const propertyImages = [
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_3_otfmrr.png", // 1
  "https://res.cloudinary.com/bytestore/image/upload/v1764936497/image_vgytkr.png", // 2
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_2_a6fj13.png", // 3
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_4_uwg0qh.png", // 4
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_6_lfb0fk.png", // 5
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_1_ygokbh.png", // 6
  "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_5_gsofek.png", // 7
  // বাকি 8 ও 9 নম্বর কার্ডের জন্য প্রথম দুটি ইমেজ রিপিট হবে
];

export const initialProperties = [
  {
    id: 1,
    name: "Maple Grove Garden House",
    price: 280,
    freq: "week",
    beds: 4,
    baths: 4,
    sqft: 2500,
    location: "New York, USA",
    type: "House",
    image: propertyImages[0], // লিংক ব্যবহার করা হলো
  },
  {
    id: 2,
    name: "Sunset Towers Ekloabet",
    price: 340,
    freq: "week",
    beds: 7,
    baths: 4,
    sqft: 6500,
    location: "New York, USA",
    type: "Apartment",
    image: propertyImages[1],
  },
  {
    id: 3,
    name: "Riverside Retreat",
    price: 280,
    freq: "month",
    beds: 4,
    baths: 3,
    sqft: 3500,
    location: "New York, USA",
    type: "House",
    image: propertyImages[2],
  },
  {
    id: 4,
    name: "Golden Meadows",
    price: 280,
    freq: "week",
    beds: 6,
    baths: 4,
    sqft: 4500,
    location: "New York, USA",
    type: "Villa",
    image: propertyImages[3],
  },
  {
    id: 5,
    name: "Ocean Sea Breeze",
    price: 280,
    freq: "week",
    beds: 8,
    baths: 5,
    sqft: 9500,
    location: "New York, USA",
    type: "Villa",
    image: propertyImages[4],
  },
  {
    id: 6,
    name: "The Urban Nest Lofts",
    price: 280,
    freq: "month",
    beds: 6,
    baths: 4,
    sqft: 8500,
    location: "New York, USA",
    type: "Town House",
    image: propertyImages[5],
  },
  {
    id: 7,
    name: "Luxury Sky Tower",
    price: 450,
    freq: "week",
    beds: 3,
    baths: 3,
    sqft: 2200,
    location: "Miami, USA",
    type: "Apartment",
    image: propertyImages[6],
  },
  {
    id: 8,
    name: "Garden Side Bungalow",
    price: 180,
    freq: "week",
    beds: 5,
    baths: 3,
    sqft: 4000,
    location: "Texas, USA",
    type: "House",
    image: propertyImages[0], // রিপিট
  },
  {
    id: 9,
    name: "Elite Duplex Loft",
    price: 320,
    freq: "month",
    beds: 5,
    baths: 4,
    sqft: 6000,
    location: "LA, USA",
    type: "Town House",
    image: propertyImages[1], // রিপিট
  },
];

export const ITEMS_PER_PAGE = 6;
