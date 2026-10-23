
import {
  Gift,
  Truck,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useState } from "react";
import kidsImage from '../assets/kids.jpg'
import menImage from '../assets/men.webp'
import womenImage from '../assets/women.webp'
// Collection data
const collections = [
  {
    badge: "🎈 Age 0 - 12",
    title: "Gifts For Kids",
    description: "Spark imagination, joy & wonder",
    image: kidsImage,
    gifts: [
      "STEM Toys",
      "Personalized Books",
      "Creative Art Sets",
      "Cozy Glow Blankets",
    ],
    button: "Browse Gifts For Kids",
  },
  {
    badge: "👔 Him / Men",
    title: "Gifts For Men",
    description: "Thoughtful, practical & timeless picks",
    image: menImage,
    gifts: [
      "Whiskey Sets",
      "Leather Accessories",
      "Smart Gadgets",
      "Grooming Casks",
    ],
    button: "Browse Gifts For Men",
  },
  {
    badge: "🌸 Her / Women",
    title: "Gifts For Women",
    description: "Elegant, pampering & unforgettable",
    image: womenImage,
    gifts: [
      "Spa & Bath Hampers",
      "Zodiac Jewelry",
      "Preserved Rose Domes",
      "Mulberry Silk",
    ],
    button: "Browse Gifts For Women",
  },
];

function GiftCollections() {
  const [activeCategory, setActiveCategory] = useState("All Gifts");

  const categories = [
    { name: "All Gifts", emoji: "" },
    { name: "For Kids", emoji: "🎈" },
    { name: "For Men", emoji: "👔" },
    { name: "For Women", emoji: "🌸" },
  ];

  return (
    <>
      {/* Benefits Bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-12 gap-y-4 text-xs text-slate-600 sm:text-sm">
          <div className="flex items-center gap-2">
            <Gift size={16} className="text-rose-500" />
            <span>Free Luxury Wrap</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck size={16} className="text-orange-500" />
            <span>Fast 2-Day Delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span>100% Smile Guarantee</span>
          </div>
        </div>
      </section>

      {/* Curated Gifting Collections */}
      <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Curated Gifting Collections
            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
              Carefully categorized for the special people in your life.
              Every item comes with custom gift wrap options & handwritten
              greeting card notes.
            </p>
          </div>

          {/* Collection Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Card Image */}
                <div className="group relative h-[210px] overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/10 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                    {item.badge}
                  </span>

                  {/* Image Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Popular Gift Types:
                  </p>

                  <ul className="space-y-2">
                    {item.gifts.map((gift) => (
                      <li
                        key={gift}
                        className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm"
                      >
                        <Check
                          size={14}
                          strokeWidth={2}
                          className="shrink-0 text-rose-500"
                        />
                        {gift}
                      </li>
                    ))}
                  </ul>

                  {/* Browse Button */}
                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-3 py-3 text-xs font-bold text-slate-800 transition hover:bg-rose-100 hover:text-rose-600 sm:text-sm">
                    {item.button}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explore All Curated Gifts */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">

            {/* Heading */}
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-500">
                <Sparkles size={15} />
                Thoughtfully Handcrafted
              </p>

              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore All Curated Gifts 🎁
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-5 text-slate-500">
                Showing 21 unique gift ideas with custom packaging, gift
                message options, and delivery tracking.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex max-w-full flex-wrap items-center gap-1 rounded-2xl border border-slate-200 bg-slate-100 p-1.5">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`whitespace-nowrap rounded-xl px-3 py-3 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    activeCategory === category.name
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white/70"
                  }`}
                >
                  {category.emoji && `${category.emoji} `}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default GiftCollections;
