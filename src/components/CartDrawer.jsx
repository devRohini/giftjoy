
import { useState } from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import {
  ShoppingBag,
  Gift,
  Check,
  X,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Tag,
} from "lucide-react";

function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onRemoveItem = () => {},
  onQuantityChange = () => {},
}) {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");
  const { error, isLoading, Razorpay } = useRazorpay();

  if (!isOpen) return null;

  const itemCount = items.length;

  const subtotal = items.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const freeDeliveryTarget = 50;
  const deliveryUnlocked = subtotal >= freeDeliveryTarget;
  const shipping =
    items.length === 0 || deliveryUnlocked ? 0 : 5.99;

  const progress = Math.min(
    100,
    (subtotal / freeDeliveryTarget) * 100
  );

  const discount = appliedPromo ? subtotal * 0.2 : 0;
  const grandTotal = subtotal + shipping - discount;

  function applyPromo(event) {
    event.preventDefault();

    if (promoCode.trim().toUpperCase() === "JOY20") {
      setAppliedPromo(true);
      setPromoMessage("20% discount applied!");
    } else {
      setAppliedPromo(false);
      setPromoMessage("Invalid code. Try JOY20.");
    }
  }
    const handlePayment = () => {
    const options= {
      key: "Razorpay_key",
      amount: 100, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: "order_9A33XWu170gUtm", // Generate order_id on server
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your Gift Bag"
        className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <ShoppingBag size={20} />
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                Your Gift Bag
              </h2>

              <p className="text-xs text-slate-400">
                {itemCount} unique{" "}
                {itemCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gift bag"
            className="cursor-pointer rounded-full p-2 text-slate-400 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Delivery Progress */}
        <div className="shrink-0 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="mb-2 flex items-center justify-between gap-2 text-xs">
            <p
              className={`flex items-center gap-1 font-semibold ${
                deliveryUnlocked
                  ? "text-emerald-600"
                  : "text-slate-600"
              }`}
            >
              <Check size={15} />
              {deliveryUnlocked
                ? "Free Delivery Unlocked!"
                : `Add $${(freeDeliveryTarget - subtotal).toFixed(2)} for free delivery`}
            </p>

            <span className="font-bold text-slate-400">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-3xl">
              🎁
            </div>

            <h3 className="font-display text-xl font-bold text-slate-800">
              Your Gift Bag is Empty
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-5 text-slate-500">
              Explore our collections for Kids, Men, or Women and
              pick something memorable!
            </p>

            <button
              type="button"
              onClick={() => {
                onClose();
                document.getElementById("all-gifts")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="mt-5 cursor-pointer rounded-xl bg-rose-600 px-5 py-3 text-sm font-bold text-white hover:bg-rose-700"
            >
              Start Gifting
            </button>
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 p-3.5"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 shrink-0 rounded-xl bg-slate-100 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[11px] font-semibold text-slate-400">
                        {item.audience ?? item.recipient ?? "Gift"}
                      </p>

                      <h3 className="line-clamp-2 text-xs font-bold leading-5 text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs font-bold text-slate-900">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.title}`}
                      className="h-fit cursor-pointer rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Gift Wrapping */}
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5 text-[11px]">
                    <span className="flex min-w-0 items-center gap-1.5 text-slate-500">
                      <Gift size={13} className="shrink-0 text-rose-500" />
                      <span className="truncate">
                        Wrap: Eco-Kraft Wrap with Red Ribbon
                      </span>
                    </span>

                    <span className="shrink-0 text-slate-500">Free</span>
                  </div>

                  {/* Quantity */}
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="cursor-pointer text-slate-500 hover:text-rose-600"
                      >
                        <Minus size={13} />
                      </button>

                      <span className="min-w-3 text-center text-xs font-bold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, 1)}
                        aria-label="Increase quantity"
                        className="cursor-pointer text-slate-500 hover:text-rose-600"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-slate-900">
                      Total: $
                      {(Number(item.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Checkout Summary */}
            <div className="shrink-0 border-t border-slate-100 bg-slate-50 p-4">
              <form onSubmit={applyPromo} className="mb-3 flex gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
                  <Tag size={15} className="shrink-0 text-slate-400" />

                  <input
                    value={promoCode}
                    onChange={(event) => {
                      setPromoCode(event.target.value);
                      setPromoMessage("");
                    }}
                    placeholder="PROMO CODE (TRY JOY20)"
                    aria-label="Promo code"
                    className="w-full min-w-0 bg-transparent py-2.5 text-xs uppercase outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p
                  className={`mb-3 text-xs ${
                    appliedPromo ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {promoMessage}
                </p>
              )}

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Products Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-emerald-600">
                    <span>JOY20 Discount (20%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-500">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-2.5 text-sm font-bold text-slate-900">
                  <span>Grand Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePayment}
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-rose-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-rose-700"
              >
                Proceed to Gift Checkout
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;
