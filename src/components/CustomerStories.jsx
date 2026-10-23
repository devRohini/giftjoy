
import {
  BadgeCheck,
  Star,
  Quote,
  Heart,
  Sparkles,
} from "lucide-react";

const reviews = [
  {
    tag: "For My 6yo Daughter",
    review:
      "The personalized dreamland storybook brought actual tears to my eyes. Seeing her name on the cover and inside the adventure was priceless! The gift wrapping was like something from a luxury boutique.",
    name: "Sarah Jenkins",
    location: "Chicago, IL",
    time: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    tag: "For My Father",
    review:
      "Ordered the engraved decanter set for Dad's 60th birthday. The laser engraving on both glasses and decanter was razor sharp. Arrived right on schedule in safe protective packaging.",
    name: "Marcus Vance",
    location: "Austin, TX",
    time: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    tag: "For My Best Friend",
    review:
      "The Rose Quartz Spa Box smelled heavenly even before opening the ribbon! The handwritten calligraphy card made it feel so personal and warm. GiftJoy is now my go-to for all celebrations.",
    name: "Elena Rostova",
    location: "Seattle, WA",
    time: "1 week ago",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function CustomerStories() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-violet-100 via-rose-100 to-orange-100 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange-300/40 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <BadgeCheck size={16} />
            Verified Customer Stories
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Over 50,000+ Smiles
            <br />
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Delivered with Love
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Read how thoughtful gifts from GiftJoy made birthdays,
            milestones, and ordinary days unforgettable.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((item, index) => (
            <article
              key={item.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/90 bg-gradient-to-br from-white via-rose-50/90 to-violet-50 p-6 shadow-lg shadow-rose-200/30 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-300/40 sm:p-7"
            >

              {/* Decorative Top Border */}
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-rose-500 via-purple-400 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Decorative Quote */}
              <Quote
                size={52}
                className="absolute right-5 top-5 rotate-180 text-rose-200/80 transition group-hover:text-rose-300"
              />

              {/* Stars and Recipient Tag */}
              <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
                <div
                  className="flex items-center gap-0.5 text-amber-400"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="rounded-full border border-rose-200 bg-rose-100/80 px-3 py-1.5 text-[10px] font-semibold text-rose-700 sm:text-[11px]">
                  {item.tag}
                </span>
              </div>

              {/* Review Text */}
              <div className="relative flex-1">
                <p className="text-sm italic leading-7 text-slate-600">
                  "{item.review}"
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-rose-100" />

              {/* Customer Details */}
              <div className="flex items-center gap-3">

                <img
                  src={item.avatar}
                  alt={item.name}
                  className={`h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-md ring-2 ${
                    index === 1
                      ? "ring-indigo-200"
                      : index === 2
                        ? "ring-purple-200"
                        : "ring-rose-200"
                  }`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <BadgeCheck
                      size={15}
                      className="text-emerald-500"
                    />
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.location} · {item.time}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500 transition group-hover:scale-110 group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white">
                  <Heart size={18} />
                </div>

              </div>

              {/* Bottom Label */}
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white bg-white/70 px-3 py-3 text-[11px] font-medium text-slate-600">
                <Sparkles size={14} className="shrink-0 text-rose-500" />
                A special gift. A beautiful memory.
              </div>

            </article>
          ))}

        </div>

        {/* Closing Message */}
        <div className="mt-12 text-center">
          <p className="font-display text-xl italic text-rose-900 sm:text-2xl">
            Every gift has a story. Make yours unforgettable.
          </p>
        </div>

      </div>

      {/* Bottom Accent */}
      <div className="-mx-5 mt-14 h-1 bg-gradient-to-r from-violet-400 via-rose-400 to-orange-400 sm:-mx-8 lg:-mx-12" />

    </section>
  );
}

export default CustomerStories;
