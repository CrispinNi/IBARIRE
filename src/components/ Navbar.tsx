import { useRef } from "react";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo_ Ibaruramari.png";
import search_icon from "../assets/search-w.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? "" : menu));
    setOpenSubmenu("");
  };

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu((prev) => (prev === submenu ? "" : submenu));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu("");
        setOpenSubmenu("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                Dashboard
              </Link>

              {/* Customers Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("customers")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 flex items-center space-x-1"
                >
                  <span>Customers</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "customers" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openMenu === "customers" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <Link
                      to="/invoice"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      Invoice
                    </Link>
                    <Link
                      to="/clients"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      Customers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/payment"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                Payment
              </Link>

              {/* Reporting Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("reporting")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 flex items-center space-x-1"
                >
                  <span>Reporting</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "reporting" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openMenu === "reporting" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      General Ledger
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      Trial Balance
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      Journal Audit
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      Balance Sheet
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setOpenMenu("")}
                    >
                      Profit and Loss
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Box & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="hidden sm:flex items-center bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-0 outline-0 text-white text-sm placeholder-gray-300 w-32 lg:w-48"
              />
              <img
                src={search_icon}
                alt="Search"
                className="w-4 h-4 ml-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-0 outline-0 text-white text-sm placeholder-gray-300 flex-1"
                />
                <img
                  src={search_icon}
                  alt="Search"
                  className="w-4 h-4 ml-2 cursor-pointer opacity-80"
                />
              </div>

              <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>

              {/* Mobile Customers Menu */}
              <div>
                <button
                  onClick={() => toggleMenu("customers")}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200 flex justify-between items-center"
                >
                  <span>Customers</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "customers" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMenu === "customers" && (
                  <div className="pl-6 space-y-1">
                    <Link
                      to="/sales"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Invoice
                    </Link>
                    <Link
                      to="/clients"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Customers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/payment"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payment
              </Link>

              {/* Mobile Reporting Menu */}
              <div>
                <button
                  onClick={() => toggleMenu("reporting")}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200 flex justify-between items-center"
                >
                  <span>Reporting</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "reporting" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openMenu === "reporting" && (
                  <div className="pl-6 space-y-1">
                    <a
                      href="#"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      General Ledger
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Trial Balance
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Journal Audit
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Balance Sheet
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-sm transition-colors duration-200"
                      onClick={() => {
                        setOpenMenu("");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Profit and Loss
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
