import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo1 from "../assets/logo3.png";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Privacy Policy", },
  { label: "Licensing", },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo1}
              className="h-10"
              alt="HustleHub Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap cursor-default dark:text-white">
              HustleHub
            </span>
          </div>
          <ul className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 mb-6 sm:mb-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            {navItems.map((item, idx) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={` hover:text-gray-50 ${
                    location.pathname === item.to
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            HustleHub™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}