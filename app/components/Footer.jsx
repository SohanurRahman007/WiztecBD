import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
// Note: The 'X' icon (formerly Twitter) can be represented by a custom element or FaTwitter for simplicity
// Since the image uses the specific 'X' logo, a custom styling is applied to a generic icon.

const Footer = () => {
  // Custom colors derived from the provided image
  const footerBgColor = "#321434"; // A deep, slightly reddish-purple
  const linkColor = "#C1B6C4"; // Muted light text color for links
  const iconBorderColor = "#5B415D"; // Darker border color for social icons

  return (
    // Outer container with the custom background color
    <footer className="w-full pt-16" style={{ backgroundColor: footerBgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative">
        {/* 1. Main Footer Content (3 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 pb-12 border-b border-gray-700/50">
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

          {/* Column 3: Follow Us */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-3 items-center">
              {/* Social Icons Container */}
              {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors border"
                    style={{ borderColor: iconBorderColor }} // Custom border color
                  >
                    {/* For the 'X' icon (index 1), the image uses a unique logo. Using FaTwitter as a placeholder. */}
                    <Icon className="w-4 h-4" style={{ color: linkColor }} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* 2. Large Watermark Text */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden">
          <h1
            className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-extrabold opacity-10 leading-none"
            style={{
              color: "#FFFFFF", // White base color
              textShadow: "0 0 10px rgba(255, 255, 255, 0.1)", // Subtle shadow
              transform: "translateY(10%)", // Shift down to show top half clearly
              whiteSpace: "nowrap",
            }}
          >
            WiztecBD
          </h1>
        </div>

        {/* 3. Copyright Text (Bottom) */}
        <div className="text-right py-4 text-sm z-10 relative">
          <p style={{ color: linkColor }}>
            © 2025 Havenix. All rights reserved.
          </p>
        </div>
      </div>
      {/* Darker bottom strip (as seen in the image) */}
      <div className="h-4 bg-gray-900 w-full"></div>
    </footer>
  );
};

export default Footer;
