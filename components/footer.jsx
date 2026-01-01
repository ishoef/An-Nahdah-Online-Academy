"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  // Hide footer on specific pages
  const hiddenRoutes = [
    "login",
    "register",
    "dashboard",
    "reset-password",
    "checkout",
  ];
  if (hiddenRoutes.some((route) => pathname.includes(route))) return null;

  /* =====================
     Navigation Links
  ====================== */

  const coursesLinks = [
    { label: "ইসলামিক স্টাডিজ", href: "/islamic-knowledge" },
    { label: "কুরআনিক আরবী", href: "/skills" },
    { label: "তাজউইদ", href: "/courses/tajweed" },
    { label: "লাইফ স্কিলস", href: "/courses/life-skills" },
    { label: "সার্টিফিকেট", href: "/certificates" },
  ];

  const instituteLinks = [
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "আমাদের শিক্ষকবৃন্দ", href: "/instructors" },
    { label: "যোগাযোগ", href: "/contact" },
    { label: "দান করুন", href: "/donate" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#206380] rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                AOI
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  আন-নাহদাহ
                </h1>
                <p className="text-sm text-[#206380] font-medium">
                  অনলাইন ইনস্টিটিউট
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              আধুনিক মুসলিমদের জন্য প্রামাণিক ইসলামী শিক্ষা — ঐতিহ্যের ভিত্তিতে,
              ভবিষ্যতের জন্য গঠিত।
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#206380] hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">
              কোর্সসমূহ
            </h3>
            <ul className="space-y-3">
              {coursesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#206380] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">
              ইনস্টিটিউট
            </h3>
            <ul className="space-y-3">
              {instituteLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#206380] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              আপডেট থাকুন
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              নতুন কোর্স ও আপডেট সরাসরি আপনার ইনবক্সে।
            </p>

            <form className="space-y-3">
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#206380] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#206380] hover:bg-[#185060] text-white py-4 rounded-xl transition"
              >
                সাবস্ক্রাইব করুন
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} আন-নাহদাহ অনলাইন ইনস্টিটিউট
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#206380]">
              প্রাইভেসি পলিসি
            </Link>
            <Link href="/terms" className="hover:text-[#206380]">
              টার্মস
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
