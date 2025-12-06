import Navbar from "./components/Navbar";
import "./globals.css";

const metadata = {
  title: "WiztecBD - Premier Software & Real Estate Solutions",
  description:
    "Wizard Software & Technology Bangladesh Ltd. - Professional software development and property services",
};

export default function RootLayout({ children }) {
  // Get current path
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

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
