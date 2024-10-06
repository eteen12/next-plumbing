"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function DropDownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-center ml-10 darkColor">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-4 py-1.5 text-lg font-semibold shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        More
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-7 w-5" />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className=" flex flex-col gap-2 py-2 ">
        <MenuItem>
          <Link href="/services">Book Online</Link>
        </MenuItem>
        <MenuItem>
        <Link href="/services">Projects</Link>
        </MenuItem>
        <MenuItem>
        <Link href="/services">Faq</Link>
        </MenuItem>
        
      </div>
    </MenuItems>
  </Menu>
  );
}
