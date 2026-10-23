
import {
  Sparkles,
  Gift,
  Feather,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Gift,
    title: "Luxury Ribbon & Box",
    description:
      "Double-faced satin ribbons and sturdy keepsake gift boxes make every unwrapping moment memorable.",
    iconStyle: "bg-rose-500 text-white shadow-rose-200",
    cardStyle: "from-rose-100 via-pink-50 to-white border-rose-200",
    accent: "text-rose-600",
  },
  {
    number: "02",
    icon: Feather,
    title: "Handwritten Notes",
    description:
      "Your personal greetings are written on premium linen cardstock with elegant gold-embossed details.",
    iconStyle: "bg-amber-400 text-white shadow-amber-200",
    cardStyle: "from-amber-100 via-orange-50 to-white border-amber-200",
    accent: "text-amber-700",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "White-Glove Assembly",
    description:
      "Every gift is carefully arranged with custom crinkle paper for a beautiful presentation.",
    iconStyle: "bg-purple-500 text-white shadow-purple-200",
    cardStyle: "from-purple-100 via-fuchsia-50 to-white border-purple-200",
    accent: "text-purple-600",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "On-Time Delivery",
    description:
      "Real-time tracking and protective packaging help your gifts arrive in beautiful condition.",
    iconStyle: "bg-emerald-500 text-white shadow-emerald-200",
    cardStyle: "from-emerald-100 via-teal-50 to-white border-emerald-200",
    accent: "text-emerald-700",
  },
];

function UnwrappingExperience() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#ffe4e9] via-[#fff0df] to-[#f3e8ff] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

      {/* Decorative Background Shapes */}
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-rose-600 shadow-sm">
            <Sparkles size={15} />
            The Art of Unwrapping
          </div>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            More Than A Package,
            <br />
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              An Unforgettable Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Every gift tells a story. We add the thoughtful little
            details that turn a beautiful package into a memory
            someone will treasure.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
        </div>

        {/* Colorful Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-gradient-to-br p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${feature.cardStyle}`}
              >

                {/* Decorative Number */}
                <span className="pointer-events-none absolute -right-2 -top-5 font-display text-8xl text-white/80 transition duration-300 group-hover:scale-110">
                  {feature.number}
                </span>

                {/* Icon Tile */}
                <div
                  className={`relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${feature.iconStyle}`}
                >
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* Card Title */}
                <h3 className="relative font-display text-xl font-bold leading-7 text-slate-900">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="relative mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

                {/* Card Footer */}
                <div className={`relative mt-6 flex items-center gap-2 border-t border-slate-900/10 pt-4 text-xs font-bold ${feature.accent}`}>
                  <Sparkles size={15} />
                  Made with love

                  <ArrowUpRight
                    size={17}
                    className="ml-auto transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-rose-400 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />

              </article>
            );
          })}

        </div>

        {/* Closing Message */}
        <div className="mt-12 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-rose-300 sm:w-12" />

          <p className="font-display text-lg italic text-rose-900 sm:text-xl">
            Because every little detail matters.
          </p>

          <span className="h-px w-8 bg-rose-300 sm:w-12" />
        </div>

      </div>
    </section>
  );
}

export default UnwrappingExperience;
