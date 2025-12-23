"use client";

import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-green-900 pt-16 pb-10 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP LOGO + TAGLINE */}
        <div className="flex flex-col gap-3 mb-10">
          <Image src={Logo} alt="Logo" width={140} height={50} />

          <p className="max-w-3xl text-green-700 text-lg">
            Your one-stop solution for all your supplement needs! Fuel your hustle
            with premium products built and tested for top-tier performance.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* For Customers */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-green-800">For Customers</h3>
            <ul className="space-y-2 text-green-700">
              <li>About Us</li>
              <li>Refer & Earn</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Return & Shipping</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-green-800">Product</h3>
            <ul className="space-y-2 text-green-700">
              <li>Protein</li>
              <li>Gainer</li>
              <li>Peanut Butter</li>
              <li>Creatine</li>
              <li>BCAA</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-green-800">Explore</h3>
            <ul className="space-y-2 text-green-700">
              <li>Blogs</li>
              <li>Lab Reports</li>
              <li>Track Order</li>
              <li>CSR Initiative</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-green-800">Connect With Us</h3>

            <div className="flex gap-4 text-green-600 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-green-800 transition" />
              <FaInstagram className="cursor-pointer hover:text-green-800 transition" />
              <FaWhatsapp className="cursor-pointer hover:text-green-800 transition" />
              <FaYoutube className="cursor-pointer hover:text-green-800 transition" />
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-green-200 pt-6 text-center mt-12 text-green-500 text-sm">
  © {new Date().getFullYear()} NUTRINATURALS. All rights reserved.
</div>

      </div>
    </footer>
  );
}
