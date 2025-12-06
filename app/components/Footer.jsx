import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  // Custom colors derived from the provided design images
  const footerBgColor = "#321434";
  const linkColor = "#C1B6C4";
  const iconBorderColor = "#5B415D";

  return (
    // Outer container with the custom background color
    <footer className="w-full pt-16" style={{ backgroundColor: footerBgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative">
        {/* 1. Main Footer Content (3 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 pb-12  border-gray-700/50">
          {/* Column 1: About Us */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  style={{ color: linkColor }}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  style={{ color: linkColor }}
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  style={{ color: linkColor }}
                >
                  Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  style={{ color: linkColor }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-1" style={{ color: linkColor }}>
              hello.abc@gmail.com
            </p>
            <p className="text-sm" style={{ color: linkColor }}>
              +012233455667
            </p>
          </div>

          {/* Column 3: Follow Us and Copyright */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start lg:items-end">
            <h3 className="text-xl font-bold mb-4 lg:text-right">Follow Us</h3>

            {/* Social Icons */}
            <div className="flex space-x-3 items-center mb-6 lg:mb-0">
              {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors border"
                    style={{ borderColor: iconBorderColor }} // Custom border color
                  >
                    <Icon className="w-4 h-4" style={{ color: linkColor }} />
                  </a>
                )
              )}
            </div>

            {/* Copyright (Aligned to the right/bottom of the footer content) */}
            <p
              className="text-sm lg:mt-15 lg:text-right"
              style={{ color: linkColor }}
            >
              © 2025 Havenix. All rights reserved.
            </p>
          </div>
        </div>

        <div className="w-full py-16 text-center ">
          <h1
            className="w-full font-black"
            style={{
              fontSize: "clamp(4rem, 20vw, 15rem)",
              background: "linear-gradient(90deg, #8A7384 0%, #CAC3C3 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "0.03em",
              display: "block",
              width: "100%",
              lineHeight: "0.8",
              fontWeight: 700,
            }}
          >
            WiztecBD
          </h1>
        </div>
      </div>
      {/* Darker bottom strip (as seen in the image) */}
      <div className="h-4 bg-gray-900 w-full"></div>
    </footer>
  );
};

export default Footer;
