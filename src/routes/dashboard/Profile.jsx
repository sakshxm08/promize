import { banner, dp } from "../../assets/assets";
import { BiSolidPencil } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillInfoCircle } from "react-icons/ai";
import UpdateProfile from "../../components/dashboard/UpdateProfile";
import { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);
  const close = () => {
    setShow(false);
  };
  const outsideClick = (e) => e.stopPropagation();
  return (
    <div>
      <div className="text-xl font-bold pl-2 dark:text-slate-50">
        Your Profile
      </div>
      <div className="rounded-ss-2xl w-full h-max  bg-white dark:bg-gray-800 mt-4 overflow-hidden">
        <div className="w-full relative">
          <img className=" w-full " src={banner} />
          <button className="hover:scale-105 active:scale-95 z-10 duration-200 cursor-pointer transition-all flex gap-2 absolute top-4 right-4 rounded-xl text-xs items-center p-2 bg-purple-50 text-purple-600">
            <BiSolidPencil className="text-base text-purple-600" />
            Change cover
          </button>
        </div>
        <div className=" px-8  -translate-y-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 ">
              <img
                src={dp}
                className="bg-slate-400 rounded-full h-44 border-4 border-white dark:border-slate-500 shadow-lg"
                alt=""
              />
              <div className="flex flex-col justify-center translate-y-4">
                <div className="font-semibold text-4xl tracking-wide dark:text-slate-50">
                  Saksham Gambhir
                </div>
                <div className="text-base text-slate-400">@sakshxm08</div>
              </div>
            </div>
            <div
              onClick={() => setShow(true)}
              className="flex items-center gap-2 text-sm px-3 py-2 border dark:border-slate-400 rounded-xl  translate-y-4 bg-slate-50 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 active:bg-slate-300 dark:active:bg-slate-500 text-slate-600 dark:text-slate-100 select-none cursor-pointer duration-200"
            >
              <GoPencil />
              Edit Profile
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <div className="text-lg flex items-center gap-3 text-slate-800 dark:text-slate-50">
              <MdWorkOutline className="text-xl text-purple-400 " />
              From Code to Frames, I shape Digital Dreams!
            </div>
            <div className="text-lg flex items-center gap-3 text-slate-800 dark:text-slate-50">
              <HiLocationMarker className="text-xl text-purple-400" />
              New Delhi, Delhi, India
            </div>
          </div>
          <div className="mt-5 pt-5 border-t flex flex-col gap-3">
            <h1 className="flex gap-3 items-center dark:text-slate-50">
              <AiFillInfoCircle className="text-xl text-purple-400" />
              About
            </h1>
            <p className="text-slate-600 font-light dark:text-slate-200">
              I&apos;m a versatile professional — both a frontend web developer
              and a video editor. In web development, I harness HTML, CSS,
              JavaScript, React, and Tailwind CSS to create seamless, visually
              stunning websites. My passion lies in crafting engaging user
              experiences. As a video editor, I transform raw footage into
              captivating narratives, using creativity and technical skill to
              convey messages effectively. Whether it&apos;s designing
              interactive web interfaces or editing compelling videos, I&apos;m
              dedicated to delivering top-notch results that resonate with
              audiences.
            </p>
          </div>
        </div>
      </div>
      <UpdateProfile
        show={show}
        close={close}
        outsideClick={(e) => outsideClick(e)}
      />
    </div>
  );
};

export default Profile;
