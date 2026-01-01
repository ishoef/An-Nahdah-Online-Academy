"use client";

import { useState } from "react";
import {
  Search,
  X,
  Shield,
  Users,
  Globe,
  Scale,
  Lock,
  CheckCircle,
  FileText,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function TermsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: "general",
      title: "সাধারণ বিধান",
      icon: FileText,
      description: "মৌলিক শর্ত, গ্রহণযোগ্যতা এবং সেবার প্রকৃতি",
      sections: [
        {
          title: "১. শর্তাবলীর গ্রহণযোগ্যতা",
          content:
            "An-Nahdah Online Academy ওয়েবসাইটে প্রবেশ, অ্যাকাউন্ট নিবন্ধন, বা কোনো কোর্সে ভর্তি হওয়ার মাধ্যমে আপনি সম্পূর্ণরূপে এই শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। যদি কোনো অংশে আপনার আপত্তি থাকে, তবে আপনাকে অবিলম্বে আমাদের সেবা ব্যবহার বন্ধ করতে হবে।",
        },
        {
          title: "২. সেবার প্রকৃতি",
          content:
            "An-Nahdah Online Academy একটি ইসলামিক শিক্ষা প্রতিষ্ঠান যা প্রকৃত জ্ঞান প্রচারে নিবেদিত। এখানে কুরআন (তাজবিদ, হিফজ, তাফসীর), আরবি ভাষা, ফিকহ, আকীদা, সীরাহ, হাদীস, ইসলামিক ইতিহাস এবং দক্ষতা উন্নয়নসহ berbagai অনলাইন কোর্স পড়ানো হয় কুরআন ও সহিহ সুন্নাহ অনুযায়ী।",
        },
        {
          title: "৩. যোগ্যতা ও নিবন্ধন",
          content:
            "শিক্ষার্থীর ন্যূনতম বয়স ১৩ বছর হতে হবে (কম হলে অভিভাবকের সম্মতি প্রয়োজন)। নিবন্ধনের সময় তথ্য সঠিক হতে হবে। ভুল তথ্য প্রদান অথবা ইসলামিক নীতিমালা লঙ্ঘন করলে ভর্তি বাতিলের অধিকার আমাদের রয়েছে।",
        },
      ],
    },
    {
      id: "enrollment",
      title: "ভর্তি ও পেমেন্ট",
      icon: Globe,
      description: "ফি, রিফান্ড, অ্যাক্সেস এবং অর্থপ্রদানের নিয়ম",
      sections: [
        {
          title: "৪. কোর্স ভর্তি এবং অ্যাক্সেস",
          content:
            "ভর্তি সম্পন্ন হলে নির্দিষ্ট সময়ের জন্য ব্যক্তিগত ব্যবহারের উপযোগী অ্যাক্সেস প্রদান করা হয়। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই অ্যাক্সেস চালু হয় (যদি ভিন্নভাবে উল্লেখ না থাকে)। লগইন তথ্য অন্য কারো সাথে শেয়ার করা নিষিদ্ধ।",
        },
        {
          title: "৫. ফি এবং পেমেন্ট নীতিমালা",
          content:
            "ভর্তি পূর্বে কোর্স ফি স্পষ্টভাবে জানানো হয়। একাডেমি কর্তৃক কোর্স বাতিল ছাড়া অন্য কোনো ক্ষেত্রে টাকা ফেরতযোগ্য নয়। কিস্তিতে পেমেন্টের ক্ষেত্রে নির্ধারিত সময় অনুযায়ী পরিশোধ বাধ্যতামূলক।",
        },
        {
          title: "৬. রিফান্ড এবং বাতিল নীতি",
          content:
            "শুধুমাত্র একাডেমির পক্ষ থেকে কোর্স বাতিল হলে রিফান্ড প্রযোজ্য। শিক্ষার্থীর নিজস্ব সিদ্ধান্তে কোর্স ত্যাগ বা অনুপস্থিতির জন্য রিফান্ড দেওয়া হয় না। বৃত্তি প্রাপ্ত শিক্ষার্থী নীতিমালা লঙ্ঘন করলে রিফান্ড প্রদান করা হবে না।",
        },
      ],
    },
    {
      id: "certification",
      title: "সার্টিফিকেট ও অর্জন",
      icon: CheckCircle,
      description: "সার্টিফিকেট, ইজাযাহ ও কোর্স সমাপ্তির শর্ত",
      sections: [
        {
          title: "৭. সার্টিফিকেট এবং ইজাযাহ",
          content:
            "উপস্থিতি, অ্যাসাইনমেন্ট ও পরীক্ষাসহ সকল শর্ত পূরণে অফিসিয়াল সার্টিফিকেট প্রদান করা হবে। ইজাযাহ প্রদান সম্পূর্ণভাবে যোগ্য শিক্ষকের বিবেচনার উপর নির্ভরশীল এবং তা দক্ষতা, সঠিক তিলাওয়াত ও আদবের ভিত্তিতে প্রদান করা হয়।",
        },
      ],
    },
    {
      id: "conduct",
      title: "শিক্ষার্থী আচরণ ও আদব",
      icon: Users,
      description: "ইসলামিক আদব ও ক্লাসে অংশগ্রহণের নির্দেশিকা",
      sections: [
        {
          title: "৮. শিক্ষার্থী আচরণ ও ইসলামিক আদব",
          content:
            "শিক্ষার্থীদের সর্বদা ইসলামিক শিষ্টাচার বজায় রাখতে হবে: শিক্ষক-সহপাঠীদের সম্মান, শালীন ভাষা ব্যবহার, গীবত না করা, অপ্রয়োজনীয় বিতর্ক না করা। অনুপযুক্ত বা ভ্রান্ত মতবাদের প্রচার করলে ভর্তি বাতিল করা হবে এবং কোনো রিফান্ড দেওয়া হবে না।",
        },
        {
          title: "৯. ক্লাসে অংশগ্রহণ নির্দেশিকা",
          content:
            "লাইভ ক্লাসে ইসলামিক মান অনুযায়ী পোশাক ও পরিবেশ বজায় রাখা বাধ্যতামূলক। প্রয়োজন হলে ক্যামেরা চালু করতে হতে পারে। অনুমতি ছাড়া লাইভ সেশন রেকর্ড করা কঠোরভাবে নিষিদ্ধ।",
        },
      ],
    },
    {
      id: "content",
      title: "কনটেন্ট ও মেধাস্বত্ব",
      icon: Lock,
      description: "উপকরণ ব্যবহারের নিয়ম, কপিরাইট ও রেকর্ডিং",
      sections: [
        {
          title: "১০. কোর্স উপকরণের ব্যবহার",
          content:
            "কোর্স উপকরণ শুধুমাত্র ব্যক্তিগত শিক্ষার উদ্দেশ্যে ব্যবহারের জন্য। অনুমতি ছাড়া শেয়ার/বিতরণ/বাণিজ্যিক ব্যবহার কঠোরভাবে নিষিদ্ধ এবং কপিরাইট লঙ্ঘন হিসেবে গণ্য।",
        },
        {
          title: "১১. মেধাস্বত্ব",
          content:
            "সকল কনটেন্ট An-Nahdah Online Academy-এর নিজস্ব সম্পত্তি। অনুমতি ছাড়া ব্যবহার করা যাবে না।",
        },
        {
          title: "১৩. রেকর্ডিং ও শিক্ষার্থীর কণ্ঠ/তথ্য",
          content:
            "লাইভ ক্লাসে অংশগ্রহণের মাধ্যমে আপনি একাডেমিকে রেকর্ড সংরক্ষণ ও শিক্ষামূলক ব্যবহারের অনুমতি প্রদান করছেন। আপনার নাম/কণ্ঠ রেকর্ডিং এ থাকতে পারে যা শুধুমাত্র শিক্ষার্থীদের জন্য উন্মুক্ত থাকবে।",
        },
      ],
    },
    {
      id: "privacy",
      title: "গোপনীয়তা ও ডেটা",
      icon: Shield,
      description: "ব্যক্তিগত তথ্য সুরক্ষা ও ব্যবস্থাপনা",
      sections: [
        {
          title: "১২. গোপনীয়তা এবং ডেটা সুরক্ষা",
          content:
            "ব্যক্তিগত তথ্য শুধুমাত্র শিক্ষাগত এবং প্রশাসনিক ব্যবহারের জন্য সংগ্রহ করা হয় এবং কোনোভাবেই তৃতীয় পক্ষের কাছে বিক্রি বা মার্কেটিং উদ্দেশ্যে শেয়ার করা হবে না।",
        },
      ],
    },
    {
      id: "legal",
      title: "আইনি বিষয়াবলী",
      icon: Scale,
      description: "দায়বদ্ধতা, শর্ত পরিবর্তন, বিরোধ নিষ্পত্তি",
      sections: [
        {
          title: "১৪. দায়বদ্ধতার সীমাবদ্ধতা",
          content:
            "শিক্ষার্থীর ভুল প্রয়োগ বা বাহ্যিক প্রযুক্তিগত সমস্যার জন্য একাডেমি দায়ী নয়।",
        },
        {
          title: "১৫. অ্যাক্সেস বাতিল",
          content:
            "নীতিমালা লঙ্ঘন, পেমেন্ট সমস্যা বা একাডেমির মর্যাদায় ক্ষতি করলে অ্যাক্সেস বাতিল করা হবে।",
        },
        {
          title: "১৬. শর্তাবলীর পরিবর্তন",
          content:
            "প্রয়োজনে শর্তাবলী পরিবর্তন করা হতে পারে এবং তা প্ল্যাটফর্ম বা ইমেইলের মাধ্যমে জানানো হবে।",
        },
        {
          title: "১৭. আইন ও বিরোধ নিষ্পত্তি",
          content:
            "বিরোধ ইসলামিক নীতি ও সংশ্লিষ্ট দেশের আইনের ভিত্তিতে সৌহার্দ্যপূর্ণভাবে নিষ্পত্তির চেষ্টা করা হবে।",
        },
        {
          title: "১৮. যোগাযোগ",
          content:
            "যেকোনো জিজ্ঞাসায় ইমেইল করুন: support@annahdahinstitute.com বা WhatsApp-এ যোগাযোগ করুন।",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      sections: category.sections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.content.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.sections.length > 0 ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-300 transition-colors">
      {/* HEADER */}
      <header className="bg-[#206380] dark:bg-[#154c63] text-white py-16 sm:py-20 px-4 sm:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">
            শর্তাবলী ও নীতিমালা
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mt-2 sm:mt-4 px-2">
            An-Nahdah Online Academy এর শিক্ষার্থীদের জন্য সংগঠিত নির্দেশিকা
          </p>

          {/* SEARCH */}
          <div className="max-w-2xl mx-auto relative mt-8 sm:mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />

            <input
              type="text"
              placeholder="শর্ত, নীতিমালা বা বিষয় খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 sm:pl-14 sm:pr-12 py-3 sm:py-4 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-800 dark:text-gray-300 text-sm sm:text-lg focus:ring-4 focus:ring-white/30"
            />

            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white dark:text-gray-300"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-center text-gray-600 dark:text-gray-400 italic text-sm sm:text-lg mb-10">
          সর্বশেষ আপডেট: ০১ জানুয়ারি ২০২৬
        </p>

        {/* NO RESULT */}
        {filteredCategories.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-xl py-10">
            কোনো তথ্য পাওয়া যায়নি।
          </p>
        ) : (
          filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-800/50 overflow-hidden mb-6 sm:mb-8 transition-all"
              >
                {/* CATEGORY HEADER */}
                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full text-left cursor-pointer px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-center bg-[#206380]/10 dark:bg-[#206380]/20"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#206380] dark:text-[#86c5d8]" />

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#206380] dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-6 h-6 sm:w-8 sm:h-8 text-[#206380] dark:text-white transition-transform ${
                      activeCategory === category.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                {activeCategory === category.id && (
                  <div className="p-6 sm:p-8 space-y-8 border-t border-gray-200 dark:border-gray-700">
                    {category.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="pb-6 sm:pb-8 border-b last:border-0 dark:border-gray-700"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-[#206380] dark:text-blue-200 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed break-words">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* CONTACT SECTION */}
        <div className="mt-16 sm:mt-20 text-center bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#206380] dark:text-white mb-3 sm:mb-4">
            শর্তাবলী সম্পর্কে প্রশ্ন আছে?
          </h2>
          <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-10">
            ইসলামিক নীতিমালার আলোকে আমরা সহায়তা করতে প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="mailto:support@annahdahinstitute.com"
              className="bg-[#206380] hover:bg-[#154c63] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> ইমেইল সাপোর্ট
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" /> WhatsApp
              সাপোর্ট
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
