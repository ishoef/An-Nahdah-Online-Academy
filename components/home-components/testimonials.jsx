"use client";

import { motion } from "framer-motion";
import Title from "../ui/title";

const testimonials = [
  {
    name: "Muhammad Farhan",
    role: "বিশ্ববিদ্যালয় শিক্ষার্থী, বাংলাদেশ",
    text: "আকিদাহ ও তাফসীর কোর্স আমার চিন্তাভাবনাকে সঠিক ভিত্তির উপর দাঁড় করিয়েছে। পাঠগুলো সুসংগঠিত এবং বুঝতে সহজ।",
  },
  {
    name: "Sumaiya Khan",
    role: "গৃহিণী, সৌদি আরব",
    text: "আমি আগে নিয়মিত কুরআন তিলাওয়াত করতাম, কিন্তু এখন তার অর্থও বুঝতে পারছি। লাইভ ক্লাসগুলো খুবই উপকারী।",
  },
  {
    name: "Abdul Hadi",
    role: "আইটি পেশাজীবী, কাতার",
    text: "ব্যস্ত চাকরির মাঝেও রেকর্ডেড লেকচার দেখে শিখতে পারছি। ইসলামি জ্ঞান ও ক্যারিয়ার স্কিল—দুইটাই একসাথে পাচ্ছি।",
  },
  {
    name: "Nusrat Jahan",
    role: "কলেজ শিক্ষার্থী, বাংলাদেশ",
    text: "আরবী ব্যাকরণ কোর্সটি কঠিন বিষয়কে সহজ করে দিয়েছে। উদাহরণগুলো বাস্তবমুখী এবং প্রাসঙ্গিক।",
  },
  {
    name: "Yusuf Ali",
    role: "ব্যবসায়ী, ওমান",
    text: "হালাল উদ্যোক্তা বিষয়ক কোর্স আমাকে ব্যবসায়িক সিদ্ধান্তে শরীয়াহ অনুযায়ী চলতে সাহায্য করেছে।",
  },
  {
    name: "Maryam Siddiqua",
    role: "মাদরাসা শিক্ষার্থী, ভারত",
    text: "উস্তাযদের ব্যাখ্যা অত্যন্ত পরিষ্কার। প্রতিটি পাঠ শেষে কুইজ থাকায় শেখা আরও মজবুত হয়েছে।",
  },
  {
    name: "Ibrahim Khalid",
    role: "ফ্রিল্যান্সার, পাকিস্তান",
    text: "ডিজিটাল স্কিল কোর্স সম্পন্ন করে আমি এখন অনলাইনে কাজ করছি। ইসলামি পরিবেশে শেখার অভিজ্ঞতা সত্যিই অনন্য।",
  },
  {
    name: "Tasnim Akter",
    role: "স্কুল শিক্ষক, বাংলাদেশ",
    text: "শিক্ষাদান পদ্ধতি আধুনিক ও আকর্ষণীয়। আমি এখন আমার শিক্ষার্থীদের আরও আত্মবিশ্বাসের সঙ্গে পড়াতে পারি।",
  },
  {
    name: "Ahmad Zubair",
    role: "ইঞ্জিনিয়ার, কুয়েত",
    text: "তাফসীর কোর্স আমাকে কুরআনের বার্তা বাস্তব জীবনে প্রয়োগ করতে শিখিয়েছে।",
  },
  {
    name: "Ruqayyah Noor",
    role: "গবেষক, তুরস্ক",
    text: "কোর্স ম্যাটেরিয়াল একাডেমিকভাবে সমৃদ্ধ এবং রেফারেন্সভিত্তিক। গবেষণার জন্য অত্যন্ত সহায়ক।",
  },
  {
    name: "Hasan Mahmud",
    role: "এইচএসসি শিক্ষার্থী, বাংলাদেশ",
    text: "ইসলামের মৌলিক জ্ঞান সহজ ভাষায় শেখার সুযোগ পেয়েছি। এটি আমার ঈমানকে আরও শক্তিশালী করেছে।",
  },
  {
    name: "Khadija Parveen",
    role: "সামাজিক কর্মী, যুক্তরাজ্য",
    text: "কমিউনিটি ডেভেলপমেন্ট কোর্স আমাকে সমাজসেবায় ইসলামি মূল্যবোধ প্রয়োগ করতে সাহায্য করেছে।",
  },
  {
    name: "Bilal Hussain",
    role: "স্টার্টআপ উদ্যোক্তা, সংযুক্ত আরব আমিরাত",
    text: "ইসলামিক ফাইন্যান্স কোর্সের মাধ্যমে সুদমুক্ত ব্যবসা পরিচালনার সঠিক ধারণা পেয়েছি।",
  },
  {
    name: "Sadia Rahman",
    role: "মেডিকেল শিক্ষার্থী, বাংলাদেশ",
    text: "ব্যস্ত পড়াশোনার মাঝেও অনলাইন প্ল্যাটফর্মটি খুব সহজে ব্যবহার করা যায়। ক্লাসগুলো সংক্ষিপ্ত ও কার্যকর।",
  },
  {
    name: "Imran Chowdhury",
    role: "ব্যাংকার, মালয়েশিয়া",
    text: "ইসলামিক ব্যাংকিং মডিউল আমার পেশাগত দক্ষতা বাড়িয়েছে এবং আত্মবিশ্বাসও বৃদ্ধি করেছে।",
  },
  {
    name: "Aminah Saleh",
    role: "মা ও শিক্ষার্থী, কানাডা",
    text: "আমি আমার সন্তানদের সাথে একসাথে শিখতে পারছি। পরিবারকেন্দ্রিক ইসলামি শিক্ষার জন্য এটি দারুণ একটি প্ল্যাটফর্ম।",
  },
  {
    name: "Mahmudul Karim",
    role: "গ্রাফিক ডিজাইনার, বাংলাদেশ",
    text: "সৃজনশীল কাজের পাশাপাশি দ্বীনের জ্ঞান অর্জন করতে পারছি—এটা আমার জীবনের বড় অর্জন।",
  },
  {
    name: "Fatimah Zahra",
    role: "পিএইচডি শিক্ষার্থী, জার্মানি",
    text: "কোর্স কনটেন্ট গভীর ও গবেষণাভিত্তিক। আন্তর্জাতিক মানের শিক্ষা এখানে পাওয়া যায়।",
  },
  {
    name: "Abu Talha",
    role: "দাওয়াহ কর্মী, দক্ষিণ আফ্রিকা",
    text: "দাওয়াহ ট্রেনিং কোর্স আমার উপস্থাপন দক্ষতা বাড়িয়েছে এবং কুরআন-হাদীসের রেফারেন্স ব্যবহারে দক্ষ করেছে।",
  },
  {
    name: "Nabila Islam",
    role: "এইচআর পেশাজীবী, সিঙ্গাপুর",
    text: "ইসলামি নেতৃত্ব ও নৈতিকতা বিষয়ক কোর্স আমার কর্মক্ষেত্রে ইতিবাচক পরিবর্তন এনেছে।",
  },
];

function MarqueeRow({ reverse }) {
  const duration = 60;
  
  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-4"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg p-6 flex flex-col justify-between border border-blue-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* ⭐⭐⭐⭐⭐ Star Rating */}
            <div className="flex space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="text-nhd-500 dark:text-yellow-400 text-lg"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed break-words whitespace-normal">
              "{t.text}"
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <section className="py-20 relative bg-gradient-to-r from-[#b1e5f0] via-[#d5f2f8] to-[#b1e5f0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
        <Title
          title1={"শিক্ষার্থীদের"}
          title2={"মতামত"}
          subTitle={
            "আমাদের শিক্ষার্থীিদের মতামত দেখুন এবং তাদের অভিজ্ঞতা শুনুন"
          }
        />
      </div>

      <div className="space-y-10 px-4 sm:px-6 lg:px-8">
        <MarqueeRow reverse={false} /> {/* left → right */}
        <MarqueeRow reverse={true} /> {/* right → left */}
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-32 bg-gradient-to-r from-blue-200 dark:from-gray-900 to-transparent" />
        <div className="w-32 bg-gradient-to-l from-blue-200 dark:from-gray-900 to-transparent" />
      </div>
    </section>
  );
}
