import React from "react";
import SideBarPage from "@/components/dashboard/Sidebar/sidebar";
import Navbar from "@/components/dashboard/Navbar/navbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-dashboardBg w-full min-h-screen flex flex-row">
      <div className="fixed w-[300px] h-screen">
        <SideBarPage />
      </div>
      <div className="w-5/6 lg:ml-[300px]">
        <div className="flex flex-col"><Navbar /></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
