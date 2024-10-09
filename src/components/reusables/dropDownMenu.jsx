"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className={`whiteColor dm-sans text-center inline-flex items-center rounded-full ml-6 px-5 py-2 lg:text-lg lg:px-8 ${
          isOpen
            ? "bg-blue-900"
            : "blueColorBg"
        }`}
        onClick={toggleDropdown}
      >
        More{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`absolute mt-2 left-1/2 transform -translate-x-1/2 ml-3 z-10 rounded-br-xl rounded-bl-xl ${
          isOpen ? "block" : "hidden"
        } whiteColorBg divide-y shadow w-40 lg:w-48 `} 
      >
        <ul className="py-2 text-sm poppins darkColor lg:text-base ">
          
          <li>
            <Link
              href="/settings"
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/earnings"
              className="block px-4 py-2 hover:bg-gray-100 "
              role="menuitem"
            >
              Faq
            </Link>
          </li>
          <li>
            <Link
              href="/signout"
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
            >
              Terms and services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
