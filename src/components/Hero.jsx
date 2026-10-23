
import { Sparkles, Gift, ArrowRight } from "lucide-react";

function Hero() {
  const categories = [
    {
      emoji: "🎈",
      title: "Gifts For Kids",
      description: "STEM kits, customized books & cozy toys",
      card: "border-amber-200 bg-amber-50/50",
      icon: "bg-amber-100",
      button: "border-amber-300 text-amber-700",
    },
    {
      emoji: "🎁",
      title: "Gifts For Men",
      description: "Barware, leather wallets, watches & tech",
      card: "border-blue-200 bg-blue-50/60",
      icon: "bg-blue-100",
      button: "border-blue-300 text-blue-700",
    },
    {
      emoji: "🌸",
      title: "Gifts For Women",
      description: "Beauty boxes, jewelry & gifts",
      card: "border-rose-200 bg-rose-50/60",
      icon: "bg-rose-100",
      button: "border-rose-300 text-rose-700",
    },
  ];

  return (
    <section className="min-h-[560px] bg-gradient-to-b from-[#fff5f7] via-[#fffdfb] to-[#fafbf7] px-6 py-14">

      <div className="mx-auto grid max-w-[1400px] items-start gap-10 lg:grid-cols-[1.3fr_0.9fr]">

        {/* Left Content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-4 py-2 text-sm text-rose-700">
            <Sparkles size={16} />
            Personalized Gifting Experience
          </div>

          <h1 className="font-display text-[48px] font-bold leading-[0.99] tracking-tight text-slate-900 sm:text-[60px]">
            Thoughtful Gifts That
            <br />
            Make
            <br />
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Every Moment
              <br />
              Magical.
            </span>
          </h1>

          <p className="mt-6 max-w-[630px] text-[18px] leading-[1.6] text-slate-600">
            Skip the guesswork. Discover handpicked, beautifully
            wrapped gifts categorized for{" "}
            <strong className="text-slate-900">Kids, Men,</strong>{" "}
            and <strong className="text-slate-900">Women</strong>{" "}
            with custom handwritten cards and luxury packaging.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 px-6 py-3 font-semibold text-white shadow-md hover:opacity-90 cursor-pointer">
              <Gift size={18} />
              Explore Gifts
            </button>

            <button className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-6 py-3 font-semibold text-rose-600 hover:bg-rose-50">
              Find the Perfect Gift
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Gift Finder Card */}
        <div className="w-full max-w-[420px] justify-self-center lg:mt-[100px] lg:justify-self-end">
          <div className="rounded-[28px] bg-white p-5 shadow-xl shadow-rose-100/50 sm:p-6">

            <div className="mb-4 flex items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <h2 className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Who are you gifting for?
              </h2>

              <button className="shrink-0 text-xs font-medium text-rose-500">
                1-Click Filter
              </button>
            </div>

            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`flex items-center gap-3 rounded-2xl border p-3 sm:gap-4 sm:p-4 ${category.card}`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${category.icon}`}
                  >
                    {category.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {category.title}
                    </h3>

                    <p className="mt-0.5 text-xs leading-4 text-slate-500">
                      {category.description}
                    </p>
                  </div>

                  <button
                    className={`shrink-0 rounded-full border bg-white px-3 py-1.5 text-xs font-medium hover:shadow-sm ${category.button}`}
                  >
                    Explore
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
