// import Navbar from "./components/Navbar";
import "./globals.css";

const metadata = {
  title: "WiztecBD - Premier Software & Real Estate Solutions",
  description:
    "Wizard Software & Technology Bangladesh Ltd. - Professional software development and property services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
