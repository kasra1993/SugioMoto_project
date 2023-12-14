"use client";
import React, { useEffect, useState } from "react";

import logo from "../../../public/images/logo.svg";
import Cart from "../Cart/Cart";
import menu from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  return (
    <>
      <header className="h-[112px] w-full px-6 md:px-[100px] lg:px-[165px]">
        <nav className="flex h-full items-center justify-between md:border-b-[1px] md:border-b-slate-200">
          <div className="flex items-center gap-4 md:gap-14">
            <div className="relative h-5 w-[137px]">
              <Image
                src={logo}
                alt="sneakers"
                fill
                style={{ backgroundSize: "object-fit" }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 md:gap-[41px]">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
                  Whish List
                </p>
              </div>
              <div
                className="flex flex-row items-center cursor-pointer"
                onClick={handleOpen}
              >
                {totalAmount > 0 ? (
                  <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                    {totalAmount}
                  </span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                )}

                <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
                  Cart
                </p>
                <div className="bg-white">
                  {open && <Cart openModal={open} setOpen={setOpen} />}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
