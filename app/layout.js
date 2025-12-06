"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import "./globals.css";

const metadata = {
  title: "WiztecBD - Premier Software & Real Estate Solutions",
  description:
    "Wizard Software & Technology Bangladesh Ltd. - Professional software development and property services",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define which pages should hide navbar
  const hideNavbarPages = [
    "/auth/signin",
    "/auth/signup",
    "/auth/login",
    "/auth/register",
  ];

  const shouldHideNavbar = hideNavbarPages.some((page) =>
    pathname.startsWith(page)
  );

  return (
    <html lang="en" className="light">
      <body className="antialiased">
        {!shouldHideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
