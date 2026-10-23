
import {
  Gift,
  Truck,
  ShieldCheck,
  Send,
} from "lucide-react";

const footerCategories = [
  {
    title: "FOR KIDS 🎈",
    color: "text-amber-400",
    links: [
      "STEM & Coding Toys",
      "Personalized Storybooks",
      "Glow-in-the-Dark Blankets",
      "Art & Craft Studios",
      "Wonder Explorer Crates",
    ],
  },
  {
    title: "FOR MEN 👔",
    color: "text-blue-400",
    links: [
      "Engraved Decanter Sets",
      "Full-Grain Leather Wallets",
      "Organic Beard Grooming",
      "Wireless Desk Chargers",
      "Executive Reserve Hampers",
    ],
  },
  {
    title: "FOR WOMEN 🌸",
    color: "text-rose-400",
    links: [
      "Rose Quartz Spa Boxes",
      "18K Gold Zodiac Jewelry",
      "Forever Preserved Roses",
      "Mulberry Silk Pillowcases",
      "Gourmet Macaron Vaults",
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#030819] px-5 text-white sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 gap-4 border-b border-slate-800 py-4 md:grid-cols-3">

          {/* Benefit 1 */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
              <Gift size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold">
                Free Luxury Gift Box
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Double satin ribbons & handwritten cards
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Truck size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold">
                Fast 2–3 Day Delivery
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Guaranteed delivery dates with live tracking
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold">
                100% Smile Guarantee
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Hassle-free replacements if they don't love it
              </p>
            </div>
          </div>

        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 py-10 md:grid-cols-2 xl:grid-cols-[1.8fr_0.9fr_0.9fr_0.9fr]">

          {/* Brand and Newsletter */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white">
                <Gift size={23} />
              </div>

              <h2 className="font-display text-2xl font-bold">
                GiftJoy
              </h2>
            </div>

            <p className="mt-4 max-w-md text-[13px] leading-5 text-slate-400">
              The premier platform for thoughtful, stress-free gifting.
              We curate premium presents categorized for Kids, Men, and
              Women, wrapped in elegance and delivered right on time.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <label
                htmlFor="footer-email"
                className="mb-2 block text-xs font-bold text-white"
              >
                Join Joy Club & get 20% OFF coupon:
              </label>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="flex max-w-md overflow-hidden rounded-xl border border-slate-700 bg-slate-900"
              >
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-white outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex w-12 shrink-0 items-center justify-center bg-rose-600 text-white transition hover:bg-rose-500"
                >
                  <Send size={17} />
                </button>
              </form>
            </div>
          </div>

          {/* Category Columns */}
          {footerCategories.map((category) => (
            <div key={category.title}>
              <h3 className={`mb-3 text-xs font-bold ${category.color}`}>
                {category.title}
              </h3>

              <ul className="space-y-2.5">
                {category.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs leading-5 text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 GiftJoy Inc. All rights reserved. Made with love for
            all celebrations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <span>•</span>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>

            <span>•</span>

            <a href="#" className="transition hover:text-white">
              Track Order
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
