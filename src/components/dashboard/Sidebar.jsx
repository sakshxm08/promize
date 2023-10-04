// import React from 'react'
import { BiHomeSmile, BiPulse } from "react-icons/bi";
import { GoGraph, GoPeople } from "react-icons/go";
import { MdOutlineCalendarMonth, MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { logoDark } from "../../assets/assets";
import { logoLight } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Theme from "../../context/darkModeContext";

const Sidebar = () => {
  const { darkMode } = useContext(Theme);

  return (
    <div className="h-screen bg-white dark:bg-gray-800 sticky top-0 left-0">
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Link to="/" className="flex items-center gap-4 h-20 px-8">
            <img src={darkMode ? logoLight : logoDark} className="w-7" alt="" />
            <span className="text-2xl font-bold dark:text-gray-50">
              ProMize
            </span>
          </Link>

          <div className="py-8 w-full flex flex-col gap-2 text-slate-500 dark:text-slate-100 ">
            <Link
              to="/dashboard"
              className=" pl-8 pr-4 py-3 flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
              style={{
                color: darkMode ? "#c084fc" : "#7e22ce",
                // backgroundImage: darkMode
                //   ? "linear-gradient(90deg, rgba(0,0,0,0) 16%, rgba(148,82,208,0.6769301470588236) 85%, rgba(144,96,187,0.7861738445378151) 100%)"
                //   : "linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(197,157,232,0.6461178221288515) 77%, rgba(168,107,222,0.6937368697478992) 100%)",
                // backgroundColor: "transparent",
              }}
            >
              <span className="flex items-center gap-3">
                <BiHomeSmile className="text-xl" />
                Dashboard
              </span>
              <div className="h-8 rounded-lg w-1 bg-purple-700 dark:bg-purple-400"></div>
            </Link>
            <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <GoGraph className="text-xl" />
              Projects
            </div>
            <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <GoPeople className="text-xl" />
              Clients
            </div>
            <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <BiPulse className="text-xl" />
              Analytics
            </div>
            <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <MdOutlineCalendarMonth className="text-xl" />
              Calendar
            </div>
          </div>
        </div>
        <div className="py-8 w-full flex flex-col gap-0 text-slate-500 dark:text-slate-100 ">
          <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
            <MdOutlineSettings className="text-xl" />
            Settings
          </div>
          <div className="px-8 py-3 text-red-600 dark:text-red-400 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
            <TbLogout2 className="text-xl" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
