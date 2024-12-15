"use client";
import React from "react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <>
      <div className="w-full p-8 flex flex-row justify-between">
        <div className="text-black font-helvetica text-[1rem] font-bold">
          Good Morning Sayed!
        </div>
        <div className="flex flex-row space-x-4">
          <div className="relative w-full h-full">
            <Input placeholder="Type Here..." className="rounded-2xl placeholder:pl-6" />
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-1/2 -translate-y-1/2 ml-2"
            >
              <path
                d="M13.6295 12.5959L10.8729 9.83935C11.5366 8.95586 11.8948 7.88047 11.8936 6.77549C11.8936 3.95303 9.59734 1.65674 6.77488 1.65674C3.95242 1.65674 1.65613 3.95303 1.65613 6.77549C1.65613 9.59795 3.95242 11.8942 6.77488 11.8942C7.87986 11.8954 8.95525 11.5372 9.83874 10.8735L12.5953 13.6301C12.7348 13.7548 12.9168 13.8214 13.1039 13.8162C13.291 13.8109 13.469 13.7343 13.6013 13.6019C13.7336 13.4696 13.8103 13.2916 13.8155 13.1045C13.8208 12.9174 13.7542 12.7354 13.6295 12.5959ZM3.11863 6.77549C3.11863 6.05235 3.33306 5.34545 3.73482 4.74418C4.13657 4.14292 4.7076 3.67429 5.37569 3.39755C6.04378 3.12082 6.77893 3.04841 7.48817 3.18949C8.19742 3.33057 8.8489 3.67879 9.36023 4.19013C9.87157 4.70146 10.2198 5.35294 10.3609 6.06219C10.5019 6.77143 10.4295 7.50658 10.1528 8.17467C9.87608 8.84276 9.40745 9.41379 8.80618 9.81555C8.20491 10.2173 7.49801 10.4317 6.77488 10.4317C5.80554 10.4306 4.87623 10.045 4.1908 9.35956C3.50537 8.67413 3.11979 7.74483 3.11863 6.77549Z"
                fill="#2D3748"
              />
            </svg>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
