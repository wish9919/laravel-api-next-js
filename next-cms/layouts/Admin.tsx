import React, { FC } from "react";
import SideBar from "../components/SideBar/SideBar";

const Admin = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 ">{children}</div>
    </>
  );
};

export default Admin;
