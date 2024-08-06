import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const phoneMenu = {
    borderRadius: "15px",
    marginLeft: "30px",
    marginRight: "30px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundImage:
      "linear-gradient(150deg, rgba(29, 40, 56) 35%, rgba(21, 29, 41, 0.75))",
  };

  return (
    <nav className="fixed w-full z-10 ">
      <div className="w-full px-4 md:px-6 lg:px-12 py-8 flex justify-between items-center">
        <div className="text-white text-3xl font-semibold transition-transform transform hover:scale-95">
          SmartML Labs
        </div>
        <div className="hidden lg:flex space-x-10 ml-auto">
          <Link to="/" className="text-slate-400 hover:text-white text-xl">
            Home
          </Link>
          <Link to="/about" className="text-slate-400 hover:text-white text-xl">
            About
          </Link>
          <Link
            to="/technology"
            className="text-slate-400 hover:text-white text-xl"
          >
            Technology
          </Link>
          <Link
            to="/contact"
            className="text-slate-400 hover:text-white text-xl"
          >
            Contact
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-[#1d2838] text-white p-2 rounded-lg"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-18 left-4 right-4 p-4 opacity-[0.95]`}
        style={{ ...phoneMenu, transition: "0.75s ease-out" }}
      >
        <div className="space-y-2">
          <Link
            to="/"
            className="block text-slate-400 hover:text-white text-xl mb-4 px-3"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            About
          </Link>
          <Link
            to="/technology"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            Technology
          </Link>
          <Link
            to="/contact"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
