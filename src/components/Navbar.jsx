
import {
  Gift,
  Search,
  Heart,
  Sparkles,
} from "lucide-react";
import cartImage from "../assets/cart.png";

function Navbar({ onCartClick, cartCount = 0, onWishlistClick, }) {
  return (
    <nav className="flex w-full flex-wrap cursor-pointer items-center justify-between gap-4 border-b border-gray-100 bg-white px-4 py-3 shadow-sm md:px-6">

      {/* Logo */}
      <a
        href="#"
        className="order-1 flex shrink-0 cursor-pointer items-center gap-2"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white">
          <Gift size={27} />
        </div>

        <div>
          <h1 className="font-display text-2xl font-bold leading-6 text-rose-950">
            GiftJoy
          </h1>

          <p className="mt-1 text-[9px] font-semibold uppercase leading-3 tracking-wide text-rose-600">
            The Curated Gifting
            <br />
            Platform
          </p>
        </div>
      </a>

      {/* Right Actions */}
      <div className="order-2 ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:order-3">

        {/* Gift Finder Quiz */}
        <button
          type="button"
          className="hidden items-center gap-2 rounded-full bg-linear-to-r from-orange-400 to-rose-500 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:brightness-105 sm:flex  cursor-pointer"
        >
          <Sparkles size={16} />
          <span>
            Gift Finder
            <br />
            Quiz
          </span>
        </button>


        {/* Search Bar */}
        <div className="flex h-10 w-40 items-center gap-2 rounded-full bg-slate-50 px-3 text-slate-500">
          <input
            id="gift-search"
            type="search"
            placeholder="Search gifts..."
            className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-slate-400"
          />

          <button
            type="button"
            aria-label="Focus search"
            onClick={() => {
              document.getElementById("gift-search")?.focus();
            }}
            className="cursor-pointer"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>
        </div>


        {/* Wishlist */}
        <button
          type="button"
          onClick={onWishlistClick}
          aria-label="Open wishlist"
          className="hidden h-10 w-10 cursor-pointer items-center justify-center text-slate-600 transition hover:text-rose-500 sm:flex"
        >
          <Heart size={22} />
        </button>


        {/* Cart Image with Item Count */}
        <button
          type="button"
          onClick={onCartClick}
          aria-label={`Open gift cart, ${cartCount} items`}
          className="relative flex cursor-pointer items-center justify-center"
        >
          <img
            src={cartImage}
            alt="Cart"
            className="h-10 w-10 object-contain"
          />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>


      </div>

      {/* Category Links */}
      <div className="order-3 flex w-full flex-wrap items-center justify-center gap-2 border-t border-gray-100 pt-3 lg:order-2 lg:ml-auto lg:w-auto lg:flex-1 lg:border-0 lg:pt-0">

        <a
          href="#all-gifts"
          className="cursor-pointer rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
        >
          All Gifts
        </a>

        <a
          href="#kids"
          className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-rose-50 hover:text-rose-600"
        >
          <span className="text-lg">🎈</span>
          <span>For Kids</span>
        </a>

        <a
          href="#men"
          className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-rose-50 hover:text-rose-600"
        >
          <span className="text-lg">🎁</span>
          <span>For Men</span>
        </a>

        <a
          href="#women"
          className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-rose-50 hover:text-rose-600"
        >
          <span className="text-lg">🌸</span>
          <span>For Women</span>
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
