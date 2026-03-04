"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0b5f78] text-white dark:bg-gray-900 dark:text-gray-100">
      {/* Top Hero */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24 flex flex-col-reverse md:flex-row gap-14 items-center flex-1">
        {/* Left Content */}
        <div className="space-y-6 w-full lg:basis-2/3 text-center lg:text-left">
          <h1 className="text-3xl font-bangla sm:text-4xl md:text-6xl font-extrabold leading-tight">
            পড়, তোমার প্রভুর নামে
            <br />
            <span className="text-nhd-300 dark:text-nhd-400">
              যিনি তোমাকে সৃষ্টি করেছেন{" "}
            </span>
          </h1>

          <p className="max-w-xl font-bangla mx-auto md:mx-0 text-white/80 dark:text-gray-400 text-base sm:text-lg">
            আন-নাহদাহ ইনস্টিটিউট আপনাদের জন্য নিয়ে আসে আসল ইসলামী শিক্ষা, যোগ্য
            আলিমদের দ্বারা প্রযোজ্য, সঙ্গে আধুনিক জীবনের ব্যবহারিক দক্ষতাও — সব
            একসাথে একটি সুন্দর, ব্যবহার বান্ধব প্ল্যাটফর্মে।
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0b5f78] font-semibold hover:bg-white/90 transition dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition dark:border-gray-400/40 dark:hover:bg-gray-800"
            >
              কোর্সগুলো দেখুন
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block">
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px]">
              <Image
                src="/images/hero.png"
                alt="Child holding Quran"
                width={820}
                height={520}
                priority
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section (NOT fixed) */}
      <div className="bg-[#b7e4f8] text-[#0b5f78] rounded-4xl dark:bg-gray-800 dark:text-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-5 items-start">
          {/* Text */}
          <div className="space-y-3 sm:col-span-3 lg:col-span-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl dark:text-white font-bold leading-tight">
              <span className="text-nhd-700 dark:text-nhd-400">
                ইসলামী শিক্ষার
              </span>{" "}
              নির্ভরযোগ্য প্ল্যাটফর্ম
            </h3>
            <p className="text-sm leading-relaxed text-[#0b5f78]/80 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
              একটি নির্ভরযোগ্য শিক্ষার স্থান যা আসল ইসলামী জ্ঞান প্রদান করে,
              যোগ্য আলিমদের দ্বারা পরিচালিত সুনির্দিষ্ট ও বিশ্বাসযোগ্য
              প্রোগ্রামের মাধ্যমে।
            </p>
          </div>

          {/* Stats */}
          {[
            { value: "৩,০০০+", label: "বিশ্বজুড়ে শিক্ষার্থী" },
            { value: "৪০০+", label: "লাইভ ও রেকর্ড করা সেশন" },
            { value: "৫০+", label: "সার্টিফায়েড শিক্ষক" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition dark:bg-gray-700/60"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0b5f78] dark:text-gray-100">
                {item.value}
              </p>
              <p className="text-sm mt-1 text-[#0b5f78]/80 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
