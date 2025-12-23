"use client";

export default function AnnouncementSlider() {
  return (
    <div className="w-full bg-green-600 text-white text-sm h-12 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap items-center h-full">
        <span className="mx-8">⚡ FREE HOME DELIVERY • ALL OVER INDIA</span>
        <span className="mx-8">🌾 YOUR FAMILY DESERVES THE BEST</span>
        <span className="mx-8">🚫 NO PRESERVATIVES</span>
        <span className="mx-8">🍚 PREMIUM BASMATI RICE</span>
        <span className="mx-8">🌱 100% NATURAL PRODUCTS</span>

        {/* duplicate for seamless scroll */}
        <span className="mx-8">⚡ FREE HOME DELIVERY • ALL OVER INDIA</span>
        <span className="mx-8">🌾 YOUR FAMILY DESERVES THE BEST</span>
        <span className="mx-8">🚫 NO PRESERVATIVES</span>
        <span className="mx-8">🍚 PREMIUM BASMATI RICE</span>
        <span className="mx-8">🌱 100% NATURAL PRODUCTS</span>
      </div>
    </div>
  );
}
