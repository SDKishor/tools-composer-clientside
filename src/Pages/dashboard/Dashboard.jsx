import React from "react";

import { Outlet } from "react-router-dom";

import CustomLink from "../../hooks/CustomLink";
import UseIsAdmin from "../../hooks/UseIsAdmin";

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = UseIsAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   p-5">
        <h2 className="text-3xl font-bold text-primary">Dashboard</h2>
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side border-r-2 border-primary border-opacity-50 mx-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content ">
          <li>
            <CustomLink to={"/dashboard/"}>My Profile</CustomLink>
          </li>

          {!isAdmin && (
            <>
              <li>
                <CustomLink to={"/dashboard/addreview"}>
                  Add A Review
                </CustomLink>
              </li>
              <li>
                <CustomLink to={"/dashboard/myorders"}>My Orders</CustomLink>
              </li>
            </>
          )}

          {isAdmin && (
            <>
              <li>
                <CustomLink to={"/dashboard/addproduct"}>
                  Add Product
                </CustomLink>
              </li>
              <li>
                <CustomLink to={"/dashboard/makeadmin"}>Make Admin</CustomLink>
              </li>
              <li>
                <CustomLink to={"/dashboard/manageorders"}>
                  Manage Orders
                </CustomLink>
              </li>
              <li>
                <CustomLink to={"/dashboard/manageproducts"}>
                  Manage Products
                </CustomLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
