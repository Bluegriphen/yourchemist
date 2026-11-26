"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/Logo.svg";
import ChevronDown from '../icons/ChevronDown';
import Search from '../icons/Search';
import ShoppingCart from '../icons/ShoppingCart';

const navItems = [
  {
    label:"NHS Care & Support",
    hasDropdown:true,
    items:["NHS Prescription", "Pharmacy First", "Flu Vaccinations."],

  },
  {
    label: "Everyday Ailments",
    hasDropdown: true,
    items: ["Allergies & Hayfever", "Cold & Flu", "Pain Relief"],
  },
  {
    label: "Lifestyle treatments",
    hasDropdown: true,
    items: ["Weight Management", "Hair Loss", "Travel Health"],
  },
  {
    label: "Shop",
    hasDropdown: false,
    src: "/shop",
  },
]
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState<string | null>(null); 
  return (
    <header className='sticky top-4 sm:px-6 lg"px-8'>
      <nav className='mx-auto flex justify-between py-3 px-6 rounded-[30px] shadow-[0px_0.48px_9.97px_0px_#FAAE4303,0px_1.09px_22.64px_0px_#FAAE4304,0px_1.89px_39.41px_0px_#FAAE4305,0px_3.01px_62.61px_0px_#FAAE4306,0px_4.64px_96.6px_0px_#FAAE4307,0px_7.24px_150.74px_0px_#FAAE4308,0px_12.01px_250px_0px_#FAAE430D,0px_24px_250px_0px_#FAAE430D] mb-300 items-center'>

        {/* logo  */}
        <Link href="#">
        <Image
        src={Logo}
        alt="Logo"/></Link>

        {/* nav link  */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item)=>(

            <div key={item.label} className='group relative'>
              
              {item.hasDropdown ? 
              <button className='flex items-center gap-0.5 font-medium text-[14px]'>
                {item.label}
                <span><ChevronDown/></span>
              </button>
              :(<Link href="#" className='font-medium text-[14px'>{item.label}</Link>)
              }

              {/* DropDown  */}
              {/* {item.hasDropdown && item.items &&(
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block rounded-xl px-3.5 py-2 text-sm text-[#0B3B45] transition-colors hover:bg-slate-50 hover:text-[#7DC22B]"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
              {item.hasDropdown && item.items &&(
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block rounded-xl px-3.5 py-2 text-sm text-[#0B3B45] transition-colors hover:bg-slate-50 hover:text-[#7DC22B]"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* buttons  */}
        <div className="flex gap-3 items-center">
          <span className=' rounded-[100vw] h-11 w-11 hover:bg-primary'><Search/></span>
          <span className=" rounded-[100vw] h-11 w-11 hover:bg-tibet"><ShoppingCart/></span>
          <button className="bg-primary py-4 px-6 flex items-center gap-2.5 rounded-[100px]">
            <span className='font-semibold font-agenda  text-[16px] text-white text-center'>Order Prescription</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
