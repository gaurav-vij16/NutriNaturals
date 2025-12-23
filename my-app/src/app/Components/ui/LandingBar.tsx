import { Truck, ShieldCheck, ShoppingBag, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Home Delivery Service",
    desc: "Fast & reliable doorstep delivery",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    desc: "100% protected payments",
  },
  {
    icon: ShoppingBag,
    title: "Shop With Confidence",
    desc: "Quality products you can trust",
  },
  {
    icon: Headphones,
    title: "24/7 Help Center",
    desc: "We’re here whenever you need",
  },
];

export default function LandingBar() {
  return (
    <section className="w-full bg-linear-to-b from-white to-green-50 border-y">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl 
                         bg-white shadow-sm hover:shadow-lg transition-all duration-300
                         hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="mb-4 flex items-center justify-center w-14 h-14 rounded-full 
                              bg-green-100 group-hover:bg-green-600 transition"
              >
                <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
