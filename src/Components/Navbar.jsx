import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiGrid, FiUser, FiMail } from "react-icons/fi";

const navItems = [
  { label: "Home", to: "/", icon: <FiHome size={22} /> },
  { label: "Services", to: "/services", icon: <FiGrid size={22} /> },
  { label: "About", to: "/about", icon: <FiUser size={22} /> },
  { label: "Contact", to: "/contact", icon: <FiMail size={22} /> },
];

export default function Navbar() {
  const location = useLocation();
  const active = navItems.findIndex(item => item.to === location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed bg-white/80 backdrop-blur-md shadow-lg"
            : "absolute"
        }`}
      >
        <div className="container mx-auto flex justify-end items-center py-3 px-6">
          <ul className="flex gap-8">
            {navItems.map((item, idx) => (
              <motion.li
                key={item.label}
                className="relative flex flex-col items-center cursor-pointer group"
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Link to={item.to}>
                  <span
                    className={`transition-colors duration-300 text-base font-semibold tracking-wide ${
                      active === idx
                        ? isScrolled
                          ? "text-indigo-700"
                          : "text-indigo-200"
                        : isScrolled
                        ? "text-gray-800 group-hover:text-indigo-500"
                        : "text-gray-800 group-hover:text-indigo-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
                {active === idx && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-8 rounded-full ${
                      isScrolled ? "bg-indigo-500" : "bg-indigo-300"
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar - Only Icons, Centered */}
      <nav className="fixed md:hidden top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg">
        <ul className="flex justify-center items-center py-2 gap-8">
          {navItems.map((item, idx) => (
            <li key={item.label} className="flex flex-col items-center">
              <Link to={item.to} className="flex flex-col items-center group">
                <motion.span
                  whileTap={{ scale: 0.92 }}
                  className={`rounded-full p-2 transition-colors duration-200 ${
                    active === idx
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-500 group-hover:text-indigo-400"
                  }`}
                >
                  {item.icon}
                </motion.span>
                {active === idx && (
                  <motion.div
                    layoutId="mobile-nav-underline"
                    className="w-6 h-1 rounded-full bg-indigo-400 mt-1"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}