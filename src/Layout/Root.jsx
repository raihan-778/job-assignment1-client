import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
