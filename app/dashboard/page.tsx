"use client";
import React from "react";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
const dashboard = () => {
  const { user } = useUser();
  console.log("user", user);
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    signOut({ redirectUrl: "/" });
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black text-[5rem] font-helvetica">dashboard</h1>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <button className="bg-black text-white p-4" onClick={handleSignOut}>
        SignOut
      </button>
    </div>
  );
};

export default dashboard;
