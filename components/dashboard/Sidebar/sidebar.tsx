"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBarButton = ({
  name,
  active,
  setActive,
}: {
  name: string;
  active: string;
  setActive: any;
}) => {
  
  return (

    <div
      className={`w-full ${
        active === name ? "bg-[#ff6700]" : ""
      } text-white rounded-xl flex flex-row items-center space-x-2 px-4 p-2 transition duration-500 ease-in-out cursor-pointer`}
      onClick={() => setActive(name)}
    >
      <div
        className={`${
          active !== name ? "bg-[#ff6700]" : "bg-white"
        } w-8 h-8 flex items-center justify-center rounded-xl transition duration-500 ease-in-out`}
      >
        {name === "Dashboard" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active === name ? "#000000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition duration-500 ease-in-out"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        )}
        {name === "Manage Bus" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active === name ? "#000000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition duration-500 ease-in-out"
          >
            <path d="M4 6 2 7" />
            <path d="M10 6h4" />
            <path d="m22 7-2-1" />
            <rect width="16" height="16" x="4" y="3" rx="2" />
            <path d="M4 11h16" />
            <path d="M8 15h.01" />
            <path d="M16 15h.01" />
            <path d="M6 19v2" />
            <path d="M18 21v-2" />
          </svg>
        )}
        {name === "Teams" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active === name ? "#000000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition duration-500 ease-in-out"
          >
            <path d="M18 21a8 8 0 0 0-16 0" />
            <circle cx="10" cy="8" r="5" />
            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
          </svg>
        )}
        {name === "Payments" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active === name ? "#000000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition duration-500 ease-in-out"
          >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
          </svg>
        )}
        {name === "Analytics" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active === name ? "#000000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition duration-500 ease-in-out"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
        )}
      </div>
      <h1
        className={`${
          active === name ? "text-white" : "hover:text-[#ff6700] text-gray-500"
        } text-center text-[14.4px] font-semibold transition duration-500 ease-in-out`}
      >
        {name}
      </h1>
    </div>
  );
};
const SideBarPage = () => {
  const [active, setActive] = useState("Dashboard");
  const pathname = usePathname();
  
  return (
    <div className="lg:flex hidden flex-col justify-between h-full">
      {" "}
      <div className="w-auto flex flex-col p-6 items-center space-y-6">
        <Image
          src={
            "https://res.cloudinary.com/dspoer0rv/image/upload/v1733246460/TheMVP/Login%20Page/xq0o8wepovovygmicay9.webp"
          }
          alt={"Logo"}
          width={100}
          height={200}
          className="w-[106px]"
        />
        <hr className="w-[199px] h-[0.1rem] bg-black/20" />
        <div className="w-[199px] flex flex-col space-y-2">
          <SideBarButton
            name={"Dashboard"}
            active={active}
            setActive={pathname === "/dashboard" ? setActive : undefined}
          />
          <div className="space-y-2">
            <SideBarButton
              name={"Manage Bus"}
              active={active}
              setActive={pathname === "/livebus" ? setActive : undefined}
            />
            <div className="flex flex-col font-semibold pl-14 space-y-4 cursor-pointer">
              <Link href="/livebus" className=" text-[0.8rem] text-gray-500 hover:text-[#ff6700] transition duration-500 ease-in-out">
                Live Running Buses
              </Link>
              <h1 className=" text-[0.7rem] text-gray-500 hover:text-[#ff6700] transition duration-500 ease-in-out">
                Seat Layer Management
              </h1>
              <h1 className=" text-[0.8rem] text-gray-500 hover:text-[#ff6700] transition duration-500 ease-in-out">
                Route Management
              </h1>
              <h1 className=" text-[0.8rem] text-gray-500 hover:text-[#ff6700] transition duration-500 ease-in-out">
                Staff Management
              </h1>
            </div>
          </div>
          <SideBarButton name={"Teams"} active={active} setActive={setActive} />
          <SideBarButton
            name={"Payments"}
            active={active}
            setActive={setActive}
          />
          <SideBarButton
            name={"Analytics"}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      <div className="flex flex-col justify-end mb-4">
        <div className="text-white rounded-xl flex flex-row items-center space-x-2 pl-16 p-4 transition duration-500 ease-in-out cursor-pointer">
          <div
            className="bg-[#ff6700]
        w-8 h-8 flex items-center justify-center rounded-xl transition duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition duration-500 ease-in-out"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>
          </div>
          <h1 className="hover:text-[#ff6700] text-gray-500 text-center text-[14.4px] font-semibold transition duration-500 ease-in-out">
            Change MPIN
          </h1>
        </div>
        <div className="text-white rounded-xl flex flex-row items-center space-x-2 pl-16 p-4 transition duration-500 ease-in-out cursor-pointer">
          <div
            className="bg-[#ff6700]
        w-8 h-8 flex items-center justify-center rounded-xl transition duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition duration-500 ease-in-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </div>
          <h1 className="hover:text-[#ff6700] text-gray-500 text-center text-[14.4px] font-semibold transition duration-500 ease-in-out">
            Logout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBarPage;
