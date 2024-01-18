import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { FaBalanceScaleRight } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { LiaBookmark } from "react-icons/lia";
import { LuHeartOff } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaGgCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const RightNavbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" overflow-y-scroll h-[600px] w-[350px] ">
      <div className="  rounded-md border-2 border-gray-100 px-4 py-2 ">
        {lists.map((list, index) => (
          <Link
            to={list.link}
            key={index}
            className={`${
              location.pathname === list.link
                ? " px-2 bg-blue-800  text-white"
                : " "
            } flex items-center gap-2 px-2  cursor-pointer rounded-sm`}
          >
            <h1 className=" py-3 text-2xl flex items-center">{list.icon}</h1>
            <h1
              className={`${list.name === "name" ? " text-white" : ""}text-md`}
            >
              {list.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightNavbar;

const lists = [
  {
    icon: <BsQuestionCircle />,
    name: "Faqs",
    link: "/faqs",
  },
  {
    icon: <IoIosHeartEmpty />,
    name: "Testimonial",
    link: "/testimonial",
  },
  {
    icon: <FaRegCalendarAlt />,
    name: "Admins",
    link: "/admins",
  },
  {
    icon: <MdOutlinePeopleAlt />,
    name: "Committeess",
    link: "/committees",
  },
  {
    icon: <LiaBookmark />,
    name: "About",
    link: "/about",
  },
  {
    icon: <IoCallOutline />,
    name: "Contacts",
    link: "/contacts",
  },
  {
    icon: <FaGgCircle />,
    name: "Features",
    link: "/features",
  },
  {
    icon: <FaUserDoctor />,
    name: "Doctors",
    link: "/doctors",
  },
 
  {
    icon: <MdOutlineEventNote />,
    name: "Notices",
    link: "/notices",
  },
  {
    icon: <SiBookstack />,
    name: "Accrediatipons",
    link: "/accrediations",
  },
  {
    icon: <FaBalanceScaleRight />,
    name: "Departments",
    link: "/departments",
  },
  {
    icon: <FiAward />,
    name: "Awards",
    link: "/awards",
  },

  {
    icon: <GrGallery />,
    name: "Galleries",
    link: "/galleries",
  },
  {
    icon: <LuHeartOff />,
    name: "Values",
    link: "/values",
  },
];
