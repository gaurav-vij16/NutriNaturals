"use client";

import { useEffect, useState } from "react";
import ClientReview from "../../Data/ClientReview";

export default function ClientUi() {
  const [current, setCurrent] = useState(0);
  const reviews = ClientReview; // later: API response

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-400 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-10">
          Real experiences with NutriNaturals
        </p>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {reviews.map((client, index) => (
            <div
              key={client.id}
              className={`transition-all duration-500 ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-700 mb-6 text-lg">
                  “{client.review}”
                </p>

                <p className="font-bold text-green-400">{client.name}</p>
                <p className="text-sm text-gray-500">Customer</p>

                <div className="text-yellow-500 mt-2">
                  {"★".repeat(client.rating)}
                  {"☆".repeat(5 - client.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
