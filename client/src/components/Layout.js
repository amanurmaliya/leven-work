import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./Colorful_Abstract_Infinity_Technology_Free_Logo-removebg-preview.png";

function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "About Us", path: "/", icon: "ri-information-line" },
    { title: "Services", path: "/home", icon: "ri-service-line" },
    { title: "Contact Us", path: "/contact", icon: "ri-user-star-fill" },
    { title: "Our Team", path: "/team", icon: "ri-team-line" },
    { title: "Clients", path: "/clients", icon: "ri-heart-2-line" },
    { title: "Our Work", path: "/work", icon: "ri-home-heart-line" },
  ];

  return (
    <div className="flex flex-col min-screen">
      {/* Navigation bar */}
      <header className="fixed bg-[#fff] h-25 top-0 w-full z-50 shadow-md">
        <div className="flex w-full">
          {/* Logo and site name */}
          <div className="name-box flex ml-4 md:ml-10 justify-start align-middle mt-3 pt-2 md:mb-0 md:pt-0 md:ml-1 td:mb-0 td:ml-0 td:pl-0">
            <img
              className="h-12 w-12 md:h-14 md:w-14 align-top justify-start bg-gray-900 rounded-full"
              src={logo}
              alt="Leven-work"
            />
            <div className="text-xl md:text-3xl align-bottom text-[#000] flex pt-3 ml-3 md:ml-5">
              <Link to="/">𝑳𝒆𝒗𝒆𝒏𝒘𝒐𝒓𝒌</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center ml-auto mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-black"></i>
          </button>

          {/* Tablet and Mobile Navigation */}
          <nav className="hidden lg:flex w-full justify-end align-middle mt-0 pt-0 mb-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-end align-middle"
              >
                {location.pathname === item.path && (
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-10 text-black rounded-t-full"></div>
                    <div className="h-5 w-20 rounded-t-full text-center">
                      <i className={`${item.icon} text-black text-xl`}></i>
                    </div>
                  </div>
                )}
                <div
                  className={`px-7 py-2.5 text-black text-xl ${
                    index === 0 ? "rounded-l" : ""
                  } ${
                    index === navItems.length - 1 ? "rounded-r" : ""
                  } flex items-center justify-center space-x-2`}
                >
                  {location.pathname !== item.path && (
                    <i className={`${item.icon} text-black text-xl`}></i>
                  )}
                  <Link to={item.path} className="text-black">
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <nav className="lg:hidden fixed inset-0 bg-white shadow-lg z-50 flex flex-col items-start p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-2 text-black text-lg ${
                  location.pathname === item.path
                    ? "bg-gray-200 rounded-lg"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">{children}</main>
    </div>
  );
}

export default Layout;
