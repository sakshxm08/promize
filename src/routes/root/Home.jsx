import { Link } from "react-router-dom";
import { dashboard, dashboardDark } from "../../assets/assets";
import Theme from "../../context/darkModeContext";
import { useContext } from "react";

const Home = () => {
  const { darkMode } = useContext(Theme);

  return (
    <>
      <div>
        <div
          className="h-[800px] -translate-y-80 absolute inset-0 -z-50 scale-150  after:w-full after:h-full after:bg-gray-800  after:opacity-0 dark:after:opacity-10 after:absolute after:top-0 after:left-0"
          style={{
            // backgroundImage:
            //   "linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)",
            backgroundImage: "linear-gradient(0deg, #E2B0FF 10%, #9F44D3 100%)",

            borderRadius: "25% 25% 20% 62% / 0% 0% 0% 27%",
          }}
        ></div>
        <div className="flex  pl-16 pb-20 pt-16 dark:text-slate-50">
          <div className=" flex flex-col justify-center gap-8 -translate-y-20 -mr-20">
            <div className="text-5xl flex flex-col justify-center gap-4">
              <h1>
                <span className="font-extrabold">Maximize</span> your
              </h1>
              <h1>
                <span className="font-extrabold text-purple-600 dark:text-purple-700 ">
                  Freelance
                </span>{" "}
                potential
              </h1>
            </div>
            <div className="text-base font-medium leading-relaxed tracking-wide w-full">
              We provide the tools, resources, and community you need to
              supercharge your freelance career and unlock unlimited
              possibilities.
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className=" text-center w-48 py-4 rounded-full bg-purple-600  text-white text-sm font-medium cursor-pointer hover:bg-purple-700 active:bg-purple-800 transition-all"
              >
                Get Started
              </Link>
              <button className="w-48 py-4 rounded-full border text-white text-sm font-medium cursor-pointer hover:bg-purple-200/40 active:bg-purple-200/30 transition-all">
                See how it works
              </button>
            </div>
          </div>

          <img
            src={darkMode ? dashboardDark : dashboard}
            className="shadow-lg dark:shadow-slate-700/60  rounded-xl translate-x-48  w-2/3"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
