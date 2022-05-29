import React from "react";

import { Outlet } from "react-router-dom";

import CustomLink from "../../hooks/CustomLink";

export default function Dashboard() {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content   p-5">
        <h2 className="text-3xl font-bold text-primary">Dashboard</h2>
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side border-r-2 border-primary border-opacity-50 mx-10">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
          <li>
            <CustomLink to={"/dashboard/"}>My Profile</CustomLink>
          </li>
          <li>
            <CustomLink to={"/dashboard/addreview"}>Add A Review</CustomLink>
          </li>
          <li>
            <CustomLink to={"/dashboard/myorders"}>My Orders</CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
