
import { Heart, X, Trash2 } from "lucide-react";

function WishlistDrawer({
  isOpen,
  onClose,
  items = [],
  onRemoveItem = () => {},
}) {
  if (!isOpen) return null;

  function browseGifts() {
    onClose();

    document.getElementById("all-gifts")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div
      className="fixed inset-0 z-[110] bg-slate-950/60 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your Saved Wishlist"
        className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <Heart size={21} fill="currentColor" />
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                Your Saved Wishlist
              </h2>

              <p className="text-xs text-slate-400">
                {items.length} {items.length === 1 ? "gift idea" : "gift ideas"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="cursor-pointer rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wishlist Content */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-3xl">
              💜
            </div>

            <h3 className="font-display text-xl font-bold text-slate-800">
              Your Wishlist is Empty
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-5 text-slate-500">
              Tap the heart on any gift for kids, men, or women to save
              it for upcoming birthdays and holidays!
            </p>

            <button
              type="button"
              onClick={browseGifts}
              className="mt-5 cursor-pointer rounded-xl bg-rose-600 px-5 py-3 text-xs font-bold text-white shadow-md transition hover:bg-rose-700 sm:text-sm"
            >
              Browse Curated Gifts
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-slate-100 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 shrink-0 rounded-xl bg-slate-100 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold leading-5 text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-slate-800">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.title} from wishlist`}
                    className="h-fit cursor-pointer rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-5">
              <button
                type="button"
                onClick={browseGifts}
                className="w-full cursor-pointer rounded-xl bg-rose-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-700"
              >
                Browse More Gifts
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default WishlistDrawer;
