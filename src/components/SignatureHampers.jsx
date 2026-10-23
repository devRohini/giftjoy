
import { useState } from "react";
import {
  Gift,
  Star,
  Eye,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import hamper1 from "../assets/hamper1.jpg"
import hamper2 from "../assets/hamper2.jpg"
import hamper3 from "../assets/hamper3.jpg"

const hampers = [
  {
    id: 1,
    label: "For Women",
    emoji: "🌸",
    title: 'The Ultimate "Royal Celebration" Luxury Gift Hamper',
    description:
      "Our flagship hamper for her! Hand-woven wicker basket filled with artisanal sparkling cider, dark chocolate truffles and elegant keepsakes.",
    image: hamper1,
    rating: 5.0,
    reviews: 94,
    price: 135,
    oldPrice: 175,
  },
  {
    id: 2,
    label: "For Men",
    emoji: "🎁",
    title: 'The "Gentleman’s Reserve" Executive Hamper',
    description:
      "An executive hamper curated with premium coffee beans, a stainless steel French press and dark roast espresso essentials.",
    image: hamper2,
    rating: 4.9,
    reviews: 83,
    price: 129,
    oldPrice: 165,
  },
  {
    id: 3,
    label: "For Kids",
    emoji: "🎈",
    title: 'The "Little Explorer Wonder Box" Super Gift Crate',
    description:
      "The ultimate birthday surprise for curious minds! Packed with an explorer telescope, interactive puzzle map and creative toys.",
    image: hamper3,
    rating: 4.9,
    reviews: 67,
    price: 89,
    oldPrice: 115,
  },
];

function SignatureHampers() {
  const [addedItems, setAddedItems] = useState([]);
  const [previewItem, setPreviewItem] = useState(null);

  function addHamper(id) {
    setAddedItems((previous) =>
      previous.includes(id) ? previous : [...previous, id]
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#0d1527] px-5 py-10 text-white sm:px-8 lg:px-12">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-fuchsia-700/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-80 w-80 rounded-full bg-orange-500/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-300">
            <Gift size={14} />
            All-in-One Curations
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Signature Luxury Hampers
          </h2>

          <p className="mt-1 max-w-xl text-sm leading-5 text-slate-300 sm:text-base">
            Elevate birthdays, anniversaries, and milestones with our
            signature grand baskets. Pre-packaged in keepsake wooden
            crates and woven wicker baskets.
          </p>
        </div>

        {/* Hamper Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">

          {hampers.map((hamper) => (
            <article
              key={hamper.id}
              className="group overflow-hidden rounded-[25px] border border-slate-700 bg-slate-800/90 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-rose-500/60 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden bg-slate-700">

                <img
                  src={hamper.image}
                  alt={hamper.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Curated Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-md">
                  ⭐ Curated Hamper
                </span>

                {/* Audience Badge */}
                <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                  {hamper.emoji} {hamper.label}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6">

                {/* Rating */}
                <div className="mb-3 flex items-center gap-2 text-xs">
                  <Star
                    size={16}
                    fill="#fbbf24"
                    className="text-amber-400"
                  />

                  <span className="font-bold text-amber-400">
                    {hamper.rating}
                  </span>

                  <span className="text-slate-400">
                    ({hamper.reviews} reviews)
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="min-h-13 font-display text-xl font-bold leading-6 text-white transition group-hover:text-rose-300">
                  {hamper.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-11 overflow-hidden text-sm leading-5 text-slate-300">
                  {hamper.description}
                </p>

                <div className="my-5 border-t border-slate-700" />

                {/* Price and Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      ${hamper.price.toFixed(2)}
                    </p>

                    <p className="mt-1 text-xs text-slate-400 line-through">
                      ${hamper.oldPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">

                    {/* Preview Button */}
                    <button
                      type="button"
                      aria-label={`Preview ${hamper.title}`}
                      onClick={() => setPreviewItem(hamper)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700 text-white transition hover:bg-slate-600"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Add Hamper Button */}
                    <button
                      type="button"
                      onClick={() => addHamper(hamper.id)}
                      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-bold text-white transition sm:text-sm ${
                        addedItems.includes(hamper.id)
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-rose-600 hover:bg-rose-500"
                      }`}
                    >
                      <ShoppingBag size={16} />

                      {addedItems.includes(hamper.id)
                        ? "Added"
                        : "Add Hamper"}
                    </button>

                  </div>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={previewItem.title}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setPreviewItem(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-900/80 p-2"
            >
              <X size={20} />
            </button>

            <img
              src={previewItem.image}
              alt={previewItem.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <p className="mb-2 flex items-center gap-2 text-sm text-amber-400">
                <Sparkles size={16} />
                Signature Collection
              </p>

              <h3 className="font-display text-2xl font-bold">
                {previewItem.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {previewItem.description}
              </p>

              <p className="mt-4 text-2xl font-bold">
                ${previewItem.price.toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => {
                  addHamper(previewItem.id);
                  setPreviewItem(null);
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3 font-semibold hover:bg-rose-500"
              >
                <ShoppingBag size={18} />
                Add Hamper
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default SignatureHampers;
