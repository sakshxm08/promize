import { Link } from "react-router-dom";
import { logoDark, logoLight } from "../../assets/assets";
import { useContext, useEffect } from "react";
import DarkModeToggle from "../DarkModeToggle";
import Theme from "../../context/darkModeContext";

const Navbar = () => {
  const { darkMode } = useContext(Theme);

  useEffect(() => {
    window.onscroll = function () {
      const nav = document.getElementById("navbar");
      if (document.documentElement.scrollTop >= 80) {
        darkMode
          ? nav.classList.add("nav-dark")
          : nav.classList.add("nav-light");
        nav.classList.remove("nav-transparent");
      } else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-dark");
        nav.classList.remove("nav-light");
      }
    };
  });
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (document.documentElement.scrollTop >= 80) {
      if (darkMode) {
        nav.classList.add("nav-dark");
        nav.classList.remove("nav-light");
      } else {
        nav.classList.add("nav-light");
        nav.classList.remove("nav-dark");
      }
    } else {
      nav.classList.remove("nav-dark");
      nav.classList.remove("nav-light");
    }
  }, [darkMode]);

  return (
    <div
      className="pt-12 pb-4 px-16 flex justify-between items-center sticky -top-8 z-50 transition-all"
      id="navbar"
    >
      <Link to="/" className="flex items-center gap-4">
        <img src={darkMode ? logoLight : logoDark} className="w-10" alt="" />
        <span className="text-3xl font-bold dark:text-white">ProMize</span>
      </Link>
      <div className="flex gap-10 text-base font-medium items-center">
        <Link
          to="/"
          className="text-black hover:text-purple-900/80 dark:text-white hover:dark:text-purple-100/80  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-purple-900/80 dark:before:bg-purple-100/80 hover:translate-y-1 transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
        >
          Home
        </Link>
        <span className="text-black hover:text-purple-900/80 dark:text-white hover:dark:text-purple-100/80  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-purple-900/80 dark:before:bg-purple-100/80 hover:translate-y-1 transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Features
        </span>
        <span className="text-black hover:text-purple-900/80 dark:text-white hover:dark:text-purple-100/80  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-purple-900/80 dark:before:bg-purple-100/80 hover:translate-y-1 transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Resources
        </span>
        <span className="text-black hover:text-purple-900/80 dark:text-white hover:dark:text-purple-100/80  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-purple-900/80 dark:before:bg-purple-100/80 hover:translate-y-1 transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Blog
        </span>
        <Link
          to="/contact"
          className="text-black hover:text-purple-900/80 dark:text-white hover:dark:text-purple-100/80  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-purple-900/80 dark:before:bg-purple-100/80 hover:translate-y-1 transition-all py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
        >
          Contact Us
        </Link>
      </div>
      <div></div>
      <div className="flex gap-8 items-center justify-between">
        <DarkModeToggle />
        <div className="flex gap-2 items-center justify-between">
          <Link
            to="/login"
            className="py-2 text-center rounded-full w-28 font-medium border shadow-lg border-purple-600 bg-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
