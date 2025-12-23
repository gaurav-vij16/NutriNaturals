"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/Logo.png";
import { productCategories } from "@/app/Data/productCategories";

import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);

  const router = useRouter();

  const handleNavigate = (path: string) => {
    setOpen(false);
    setShowProducts(false);
    setMobileProducts(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-100 shadow-md">
      {/* ================= DESKTOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Image
          src={Logo}
          alt="NutriNaturals Logo"
          width={120}
          height={50}
          className="cursor-pointer"
          onClick={() => handleNavigate("/")}
        />

        {/* Search + Menu */}
        <div className="hidden lg:flex flex-col gap-2 w-1/2">
          {/* Search */}
          <div className="relative w-full">
            <CiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              placeholder="Search products"
              className="w-full pl-10 py-2 rounded-md bg-amber-50 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Menu */}
          <ul className="flex gap-10 text-black font-medium">
            <li
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
              className="relative flex items-center gap-1 cursor-pointer hover:text-green-600"
            >
              Product
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showProducts ? "rotate-180" : ""
                }`}
              />
            </li>

            <li onClick={() => handleNavigate("/OurStory")} className="cursor-pointer hover:text-green-600">Our Story</li>
            <li onClick={() => handleNavigate("/Authenticity")} className="cursor-pointer hover:text-green-600">Authenticity</li>
            <li onClick={() => handleNavigate("/Blogs")} className="cursor-pointer hover:text-green-600">Blogs</li>
            <li onClick={() => handleNavigate("/TrackOrder")} className="cursor-pointer hover:text-green-600">Track Order</li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <CiShoppingCart className="text-3xl cursor-pointer text-gray-700 hover:text-green-700 transition" />
          <CiMenuBurger
            className="text-3xl lg:hidden cursor-pointer text-green-900"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {/* ============ DESKTOP PRODUCT MEGA MENU ============ */}
      {showProducts && (
        <div
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
          className="hidden lg:block absolute w-full bg-white shadow-xl border-t"
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
            {productCategories.map((item) => (
              <div
                key={item.name}
                onClick={() =>
                  handleNavigate(`/products?category=${encodeURIComponent(item.name)}`)
                }
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-green-50 hover:scale-105 transition cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain"
                />
                <p className="mt-3 font-medium text-black">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-green-900 z-50 transform transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-green-700">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <IoClose
            className="text-2xl text-white cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Search */}
        <div className="px-5 mt-5">
          <div className="relative">
            <CiSearch className="absolute left-3 top-3 text-gray-300" />
            <input
              placeholder="Search products"
              className="w-full pl-10 py-2 rounded-md bg-green-800 text-white outline-none"
            />
          </div>
        </div>

        {/* Links */}
        <ul className="px-5 mt-6 space-y-4 text-white">
          {/* Product Toggle */}
          <li
            onClick={() => setMobileProducts(!mobileProducts)}
            className="flex items-center justify-between cursor-pointer font-semibold"
          >
            Product
            {mobileProducts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </li>

          {/* Mobile Product Grid */}
          {mobileProducts && (
            <div className="mt-3 max-h-[45vh] overflow-y-auto pr-2 grid grid-cols-2 gap-4">
              {productCategories.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    handleNavigate(`/products?category=${encodeURIComponent(item.name)}`)
                  }
                  className="flex flex-col items-center text-center bg-green-800 p-3 rounded-xl hover:bg-green-700 transition cursor-pointer"
                >
                  <Image src={item.image} alt={item.name} className="h-14 w-14" />
                  <p className="text-sm mt-2">{item.name}</p>
                </div>
              ))}
            </div>
          )}

          <li onClick={() => handleNavigate("/OurStory")} className="cursor-pointer">Our Story</li>
          <li onClick={() => handleNavigate("/Authenticity")} className="cursor-pointer">Authenticity</li>
          <li onClick={() => handleNavigate("/Blogs")} className="cursor-pointer">Blogs</li>
          <li onClick={() => handleNavigate("/TrackOrder")} className="cursor-pointer">Track Order</li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
