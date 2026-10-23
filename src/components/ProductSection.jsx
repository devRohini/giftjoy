
import { useEffect, useMemo, useState } from "react";
import {
  SlidersHorizontal,
  Heart,
  Star,
  Sparkles,
  Eye,
  X,
} from "lucide-react";

import { PRODUCTS } from "../data/products.js";
import cartImage from "../assets/cart.png";

function ProductSection({
  onAddToCart = () => {},
  wishlistItems = [],
  onToggleWishlist = () => {},
   selectedCategory = "All Gifts",
  searchQuery = "",
}) {
  const [occasion, setOccasion] = useState("Any Occasion");
  const [budget, setBudget] = useState("All Budgets");
  const [sortBy, setSortBy] = useState("Featured Curations");
  const [toast, setToast] = useState("");
  const [previewProduct, setPreviewProduct] = useState(null);

  // Hide success notification after 3 seconds
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (occasion !== "Any Occasion") {
      result = result.filter(
        (product) => product.occasion === occasion
      );
    }

    if (budget === "Under $25") {
      result = result.filter(
        (product) => Number(product.price) < 25
      );
    } else if (budget === "$25 - $50") {
      result = result.filter(
        (product) =>
          Number(product.price) >= 25 &&
          Number(product.price) <= 50
      );
    } else if (budget === "$50 - $100") {
      result = result.filter(
        (product) =>
          Number(product.price) > 50 &&
          Number(product.price) <= 100
      );
    } else if (budget === "Over $100") {
      result = result.filter(
        (product) => Number(product.price) > 100
      );
    }

    if (sortBy === "Top Rated") {
      result.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    } else if (sortBy === "Price: Low to High") {
      result.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (sortBy === "Price: High to Low") {
      result.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    return result;
  }, [occasion, budget, sortBy]);

  // Create consistent product data for cart and wishlist
  function getProductDetails(product) {
    const title =
      product.title ??
      product.name ??
      product.productName ??
      "Untitled Gift";

    return {
      id: product.id ?? title,
      title,
      image:
        product.image ??
        product.imageUrl ??
        product.image_url ??
        "",
      price: Number(product.price ?? 0),
      category: product.category ?? "",
    };
  }

  // Add product to the shared cart
  function handleAddToCart(product) {
    onAddToCart(product);
    setToast(`Added "${product.title}" to your gift cart!`);
    setPreviewProduct(null);
  }

  return (
    <section
      id="all-gifts"
      className="bg-white px-5 pb-12 pt-6 sm:px-8"
    >
      <div className="mx-auto max-w-[1216px]">

        {/* Filter Toolbar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
            <SlidersHorizontal size={16} />
            Filters:
          </div>

          <select
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-rose-400"
          >
            <option>Any Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Christmas</option>
            <option>Wedding</option>
          </select>

          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-rose-400"
          >
            <option>All Budgets</option>
            <option>Under $25</option>
            <option>$25 - $50</option>
            <option>$50 - $100</option>
            <option>Over $100</option>
          </select>

          <div className="ml-auto flex items-center gap-2">
            <label
              htmlFor="sort-products"
              className="whitespace-nowrap text-xs text-slate-500"
            >
              Sort by:
            </label>

            <select
              id="sort-products"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-800 outline-none focus:border-rose-400"
            >
              <option>Featured Curations</option>
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => {
            const details = getProductDetails(product);
            const productId = details.id;
            const title = details.title;
            const price = details.price;

            const originalPriceValue =
              product.oldPrice ??
              product.originalPrice ??
              product.original_price ??
              product.compareAtPrice;

            const originalPrice =
              originalPriceValue != null
                ? Number(originalPriceValue)
                : null;

            const discountValue =
              product.discount ??
              product.discountPercent ??
              product.discount_percentage;

            const discount =
              discountValue != null
                ? Number(discountValue)
                : originalPrice != null &&
                    originalPrice > price &&
                    originalPrice > 0
                  ? Math.round(
                      ((originalPrice - price) / originalPrice) * 100
                    )
                  : null;

            const reviews =
              product.reviews ??
              product.reviewCount ??
              product.review_count ??
              0;

            const personalizable =
              product.personalizable ??
              product.isPersonalizable ??
              product.customizable ??
              false;

            const audience = String(
              product.audience ??
              product.recipient ??
              product.targetAudience ??
              "For Kids"
            ).toLowerCase();

            const audienceEmoji =
              audience.includes("women") || audience.includes("her")
                ? "🌸"
                : audience.includes("men") || audience.includes("him")
                  ? "🎁"
                  : "🎈";

            const isWishlisted = wishlistItems.some(
              (item) => item.id === productId
            );

            return (
              <article
                key={productId}
                className="group flex h-full flex-col overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative h-[203px] shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={details.image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Audience Badge */}
                  <span className="absolute left-3 top-3 flex h-10 min-w-10 items-center justify-center rounded-full bg-amber-100 px-3 text-sm shadow-sm">
                    {audienceEmoji}
                  </span>

                  {/* Discount Badge */}
                  {discount != null && discount > 0 && (
                    <span className="absolute left-3 top-[46px] rounded-full bg-rose-600 px-2.5 py-1 text-[10px] font-bold text-white">
                      {discount}% OFF
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(details)}
                    aria-label={
                      isWishlisted
                        ? `Remove ${title} from wishlist`
                        : `Add ${title} to wishlist`
                    }
                    className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition hover:text-rose-500"
                  >
                    <Heart
                      size={20}
                      fill={isWishlisted ? "currentColor" : "none"}
                      className={
                        isWishlisted ? "text-rose-500" : ""
                      }
                    />
                  </button>

                  {/* Quick View */}
                  <button
                    type="button"
                    onClick={() => setPreviewProduct(details)}
                    className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-2 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-800 opacity-0 shadow-md transition duration-300 hover:bg-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                  >
                    <Eye size={15} className="text-rose-500" />
                    Customize & Quick View
                  </button>
                </div>

                {/* Product Information */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex min-h-[18px] items-center justify-between gap-2">
                    <p className="min-w-0 truncate text-xs text-slate-400">
                      {product.category}
                    </p>

                    {personalizable && (
                      <span className="flex shrink-0 items-center gap-1 text-[10px] font-medium text-orange-500">
                        <Sparkles size={12} />
                        Personalizable
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="min-h-[48px] text-[15px] font-semibold leading-6 text-slate-900">
                    {title}
                  </h3>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <Star
                      size={15}
                      fill="#fbbf24"
                      className="shrink-0 text-amber-400"
                    />

                    <span className="font-semibold text-slate-800">
                      {Number(product.rating ?? 0)}
                    </span>

                    <span className="text-slate-400">
                      ({reviews} reviews)
                    </span>
                  </div>

                  {/* Price and Cart Image */}
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-xl font-extrabold text-slate-900">
                          ${price.toFixed(2)}
                        </span>

                        {originalPrice != null &&
                          originalPrice > price && (
                            <span className="text-xs text-slate-400 line-through">
                              ${originalPrice.toFixed(2)}
                            </span>
                          )}
                      </div>

                      <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                        ✓ Free Gift Box
                      </p>
                    </div>

                    {/* Custom Cart Image — No Background */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(details)}
                      aria-label={`Add ${title} to gift cart`}
                      className="flex h-10 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-transparent transition hover:bg-rose-50"
                    >
                      <img
                        src={cartImage}
                        alt=""
                        className="h-7 w-7 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty Filter Results */}
        {filteredProducts.length === 0 && (
          <p className="py-12 text-center text-sm text-slate-500">
            No gifts match these filters. Try another occasion or budget.
          </p>
        )}
      </div>

      {/* Pink Add-to-Cart Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-xl bg-rose-600 px-4 py-4 text-white shadow-xl"
        >
          <img
            src={cartImage}
            alt=""
            className="h-6 w-6 shrink-0 object-contain"
          />

          <p className="flex-1 text-sm font-semibold leading-5">
            {toast}
          </p>

          <button
            type="button"
            onClick={() => setToast("")}
            aria-label="Close notification"
            className="shrink-0 cursor-pointer rounded-full p-1 hover:bg-white/15"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      {previewProduct && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setPreviewProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={previewProduct.title}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewProduct(null)}
              aria-label="Close quick view"
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-white p-2 text-slate-700 shadow"
            >
              <X size={19} />
            </button>

            <img
              src={previewProduct.image}
              alt={previewProduct.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                GiftJoy Collection
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900">
                {previewProduct.title}
              </h2>

              <p className="mt-3 text-2xl font-bold text-slate-900">
                ${previewProduct.price.toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => handleAddToCart(previewProduct)}
                className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-rose-700"
              >
                <img
                  src={cartImage}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                Add to Gift Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
