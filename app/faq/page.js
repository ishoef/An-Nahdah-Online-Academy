"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Search, Mail, MessageCircle, X } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const faqs = [
    {
      question: "An-Nahdah Online Institute কী?",
      answer:
        "একটি প্রিমিয়ার অনলাইন প্ল্যাটফর্ম যেখানে কুরআন, আরবি, ফিকহ, সীরাত এবং ব্যক্তিগত উন্নয়নসহ বিভিন্ন ইসলামিক কোর্স প্রদান করা হয়।",
    },
    {
      question: "কোর্সগুলো কি সার্টিফাইড?",
      answer:
        "হ্যাঁ। প্রতিটি কোর্স সম্পন্নের পর শিক্ষার্থীদের অফিসিয়াল সার্টিফিকেট প্রদান করা হয়। উন্নত কোর্সে যোগ্য স্কলারদের থেকে ইজাযাহও প্রদান করা হতে পারে।",
    },
    {
      question: "কারা পড়ান?",
      answer:
        "যোগ্য আলেম এবং স্কলার যারা কুরআন ও ইসলামিক সায়েন্সে প্রথাগত শিক্ষা ও ইজাযাহ প্রাপ্ত।",
    },
    {
      question: "কোন ভাষায় কোর্সগুলো পরিচালিত হয়?",
      answer:
        "ইংরেজি ও আরবি উভয় ভাষায় ক্লাস পরিচালিত হয়। শিক্ষানবিশ কোর্সগুলো মূলত ইংরেজিতে এবং উচ্চতর ক্লাসিক্যাল টেক্সটগুলো আরবিতে শেখানো হয়।",
    },
    {
      question: "লাইভ ক্লাস কীভাবে পরিচালিত হয়?",
      answer:
        "নির্ধারিত সময়ে Zoom এর মাধ্যমে লাইভ ক্লাস নেওয়া হয় এবং প্রতিটি সেশন রেকর্ড করা হয় যা ২৪ ঘণ্টার মধ্যে শিক্ষার্থীদের জন্য আপলোড করা হয়।",
    },
    {
      question: "টেকনিক্যাল কী কী প্রয়োজন?",
      answer:
        "একটি স্থিতিশীল ইন্টারনেট সংযোগ, ডিভাইস (কম্পিউটার/মোবাইল/ট্যাব), আপডেটেড ব্রাউজার এবং হেডফোন সুপারিশ করা হয়।",
    },
    {
      question: "বিনামূল্যে কি কোনো ক্লাস বা ট্রায়াল আছে?",
      answer:
        "হ্যাঁ। অনেক কোর্সে ফ্রি পরিচিতিমূলক ক্লাস রয়েছে এবং সময়ে সময়ে ফ্রি ওয়েবিনার আয়োজন করা হয়।",
    },
    {
      question: "পেমেন্ট কীভাবে করতে হয়?",
      answer:
        "ক্রেডিট/ডেবিট কার্ড, PayPal এবং ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করা যায়। দীর্ঘমেয়াদী কোর্সের জন্য কিস্তির সুবিধাও রয়েছে।",
    },
    {
      question: "স্কলারশিপ কি পাওয়া যায়?",
      answer:
        "হ্যাঁ। যোগ্য শিক্ষার্থীদের জন্য সীমিত আর্থিক সহায়তা প্রদান করা হয়। বিবেচনার জন্য আমাদের সাথে যোগাযোগ করুন।",
    },
    {
      question: "কীভাবে সাপোর্ট পাবো?",
      answer:
        "আপনি support@annahdahinstitute.com এ ইমেইল করতে পারেন অথবা WhatsApp এর মাধ্যমে যোগাযোগ করতে পারেন। সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়।",
    },
  ];

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredFAQs(faqs);
    } else {
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFAQs(filtered);
    }
  }, [searchTerm]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Elegant Header with subtle pattern */}
      <header className="relative bg-[#206380] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
            প্রায় জিজ্ঞাসিত প্রশ্নাবলী
          </h1>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            An-Nahdah Online Institute সম্পর্কে সাধারণ প্রশ্নোত্তর
          </p>

          {/* Modern Glass Search */}
          <div className="max-w-2xl mx-auto relative mt-8 sm:mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 dark:text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />

            <input
              type="text"
              placeholder="যে কোনো তথ্য সম্পর্কে জানুন..."
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

      {/* FAQ List - Clean & Modern Cards */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-4">
          {filteredFAQs.length === 0 ? (
            <div className="col-span-full text-center py-20 bg-white/70 dark:bg-gray-800/50 rounded-2xl">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                আপনার অনুসন্ধানের সাথে কোনো প্রশ্ন মিলেনি।
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-7 py-5 flex items-center justify-between text-right hover:bg-gradient-to-r hover:from-[#206380]/5 hover:to-transparent transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-[#206380] dark:group-hover:text-[#5ab7e0] transition-colors pr-6">
                    {faq.question}
                  </h3>
                  <div className="p-2 rounded-full bg-[#206380]/10 group-hover:bg-[#206380]/20 transition-colors">
                    <ChevronDown
                      className={`w-5 h-5 text-[#206380] transition-transform duration-500 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-6 pt-2">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sophisticated Contact Card */}
        <div className="mt-20 p-10 bg-gradient-to-r from-[#206380]/5 via-[#206380]/10 to-[#206380]/5 dark:from-[#206380]/20 dark:via-[#206380]/30 dark:to-[#206380]/20 rounded-3xl text-center border border-[#206380]/30 shadow-xl">
          <h2 className="text-2xl font-bold text-[#206380] dark:text-[#6ab7d6] mb-4">
            আরও সাহায্যের প্রয়োজন?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            আমাদের দক্ষ সাপোর্ট টিম আপনার যেকোনো প্রশ্নের উত্তর দিতে সর্বদা
            প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="mailto:support@annahdahinstitute.com"
              className="group flex items-center justify-center gap-3 bg-[#206380] hover:bg-[#185a75] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition" />
              ইমেইল করুন
            </a>
            <a
              href="https://wa.me/+8801711958378"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition" />
              WhatsApp চ্যাট
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
