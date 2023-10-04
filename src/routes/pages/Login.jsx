import { Link } from "react-router-dom";
import { loginBg, logoDark, logoLight } from "../../assets/assets";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { useContext, useRef } from "react";
import Theme from "../../context/darkModeContext";
import DarkModeToggle from "../../components/DarkModeToggle";

const Login = () => {
  const { darkMode } = useContext(Theme);
  const loginScreen = useRef();
  const imgText = useRef();
  const shift = () => {
    loginScreen.current.classList.toggle("-translate-x-[41%]");
    imgText.current.classList.toggle("-translate-x-1/2");
  };
  return (
    <div
      className="flex justify-between w-[170%] duration-700"
      ref={loginScreen}
    >
      <div className="w-2/3 px-16 pt-12 duration-700 origin-left">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={darkMode ? logoLight : logoDark}
              className="w-10"
              alt=""
            />
            <span className="text-3xl font-bold dark:text-gray-50">
              ProMize
            </span>
          </Link>
          <DarkModeToggle />
        </div>
        <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14 dark:text-gray-50">
          <h1 className="text-5xl font-extrabold ">Login to Your Account</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-purple-100/40 dark:hover:bg-purple-100/20 active:bg-purple-100/80 dark:active:bg-purple-100/10 transition-all items-center text-sm justify-center">
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-purple-100/40 dark:hover:bg-purple-100/20 active:bg-purple-100/80 dark:active:bg-purple-100/10 transition-all items-center text-sm justify-center">
              <RxGithubLogo className="text-2xl" />
              Login with Github
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
            <span className="w-full flex-grow h-[1px] bg-slate-300"></span>or
            <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
          </div>
          <div className="w-full flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="email-login"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email-login"
                id="email-login"
                className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                placeholder="user@promize.com"
              />
            </div>
            <div className="w-full flex flex-col gap-4  items-center justify-center">
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="password-login"
                  className="text-xs text-slate-400 dark:text-slate-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password-login"
                  id="password-login"
                  className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                  placeholder="Min. 8 characters"
                />
              </div>
              <div className=" w-full px-2 flex justify-between items-center text-xs">
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className=" accent-purple-600"
                  />
                  <label
                    htmlFor="remember"
                    className="text-slate-500 dark:text-slate-300"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-purple-600 dark:text-purple-500 hover:dark:text-purple-400 hover:text-purple-700 transition-all relative cursor-pointer after:absolute after:bottom-0 py-1 after:left-0 after:w-full after:h-[1px] after:bg-purple-700 after:dark:bg-purple-400 after:opacity-0 after:transition-all hover:after:opacity-100">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 dark:active:bg-purple-500 transition-all text-white w-1/3 px-4 py-3 text-sm rounded-full">
            Sign In
          </button>
        </div>
      </div>
      <div className="w-1/3 relative h-screen overflow-hidden ">
        <img
          src={loginBg}
          className="w-full h-screen absolute top-0 right-0 -z-20"
          alt=""
        />
        <div
          className="w-[200%] flex h-full items-center justify-center overflow-hidden duration-700 -translate-x-1/2"
          ref={imgText}
        >
          <div className="flex overflow-hidden w-1/2 origin-bottom duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">
              Already a user?
            </h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Login to your account
            </div>
            <button
              onClick={shift}
              className="py-2 px-20 bg-white text-purple-700 font-medium mt-6 hover:bg-purple-200 transition-all rounded-full shadow-lg"
            >
              Login
            </button>
          </div>
          <div className="flex overflow-hidden w-1/2 origin-top duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">New Here?</h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Sign up and discover a great amount of new opportunities
            </div>
            <button
              onClick={shift}
              className="py-2 px-20 bg-white text-purple-700 font-medium mt-6 hover:bg-purple-200 transition-all rounded-full shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/3 px-16 pt-12 duration-700 origin-right">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={darkMode ? logoLight : logoDark}
              className="w-10"
              alt=""
            />
            <span className="text-3xl font-bold dark:text-gray-50">
              ProMize
            </span>
          </Link>
          <DarkModeToggle />
        </div>
        <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14 dark:text-gray-50">
          <h1 className="text-5xl font-extrabold ">Create an Account</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-purple-100/40 dark:hover:bg-purple-100/20 active:bg-purple-100/80 dark:active:bg-purple-100/10 transition-all items-center text-sm justify-center">
              <FcGoogle className="text-2xl" />
              Signup with Google
            </button>
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-purple-100/40 dark:hover:bg-purple-100/20 active:bg-purple-100/80 dark:active:bg-purple-100/10 transition-all items-center text-sm justify-center">
              <RxGithubLogo className="text-2xl" />
              Signup with Github
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
            <span className="w-full flex-grow h-[1px] bg-slate-300"></span>
            <span className="whitespace-nowrap"> or continue with email</span>
            <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
          </div>

          <form className="w-full flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="fname"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Name
              </label>
              <div className="flex  gap-2 items-center justify-between">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                  placeholder="First"
                />
                <input
                  name="lname"
                  id="lname"
                  type="text"
                  className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                  placeholder="Last"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="email-signup"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email-signup"
                id="email-signup"
                className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                placeholder="user@promize.com"
              />
            </div>

            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="password-signup"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password-signup"
                id="password-signup"
                className="w-full px-3 placeholder:text-slate-300 dark:placeholder:text-slate-500 py-2 rounded-lg border focus-visible:outline-purple-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-purple-500 dark:focus-visible:outline"
                placeholder="Min. 8 characters"
              />
            </div>
          </form>
          <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 dark:active:bg-purple-500 transition-all text-white w-1/3 px-4 py-3 text-sm rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
