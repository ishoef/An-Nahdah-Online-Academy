"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  MessageCircle,
  Clock,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronDown,
  HeadphonesIcon,
  BookOpen,
  Users,
  Shield,
} from "lucide-react";

export default function ContactPageAOI() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    }, 1800);
  };

  const faqs = [
    {
      question: "কীভাবে কোর্সে ভর্তি হব?",
      answer:
        "কোর্স পেজে গিয়ে পছন্দের কোর্স নির্বাচন করুন এবং সহজ রেজিস্ট্রেশন প্রক্রিয়া অনুসরণ করুন। সহায়তার প্রয়োজন হলে আমাদের অ্যাডমিশন টিমের সাথে ইমেইল বা ফোনে যোগাযোগ করুন।",
    },
    {
      question: "ভর্তির জন্য কী কী যোগ্যতা প্রয়োজন?",
      answer:
        "অধিকাংশ কোর্স ওপেন এনরোলমেন্ট। কিছু উন্নত কোর্সের জন্য পূর্ববর্তী জ্ঞান বা প্রাক-প্রয়োজনীয় কোর্স সম্পন্ন করতে হতে পারে। বিস্তারিত জানতে নির্দিষ্ট কোর্সের পাতা দেখুন।",
    },
    {
      question: "কোর্সগুলো সেল্ফ-পেসড নাকি নির্ধারিত সময়সূচীতে?",
      answer:
        "আমরা সেল্ফ-পেসড এবং লাইভ ইন্সট্রাক্টর-লেড উভয় ধরনের কোর্স অফার করি। অনেক কোর্সে লাইভ সেশন, রেকর্ডেড লেকচার এবং নমনীয় ডেডলাইন থাকে।",
    },
    {
      question: "প্রযুক্তিগতভাবে কী কী প্রয়োজন?",
      answer:
        "স্থিতিশীল ইন্টারনেট সংযোগ, আধুনিক ব্রাউজার (ক্রোম/ফায়ারফক্স সুপারিশকৃত) এবং কম্পিউটার বা ট্যাবলেট। কিছু ইন্টারঅ্যাকটিভ কোর্সে মাইক্রোফোন/ওয়েবক্যাম লাগতে পারে।",
    },
    {
      question: "কোর্স ম্যাটেরিয়াল কীভাবে পাব?",
      answer:
        "ভর্তির পর আপনার লার্নিং প্ল্যাটফর্মে লগইন করুন। সব ভিডিও, অ্যাসাইনমেন্ট, ফোরাম এবং ম্যাটেরিয়াল ২৪/৭ উপলব্ধ থাকবে।",
    },
    {
      question: "টেকনিক্যাল সাপোর্ট পাওয়া যায়?",
      answer:
        "হ্যাঁ! আমাদের সাপোর্ট টিম ইমেইল, ফোন এবং লাইভ চ্যাটে সাহায্য করে। বিস্তারিত গাইড ও টিউটোরিয়ালসহ একটি হেল্প সেন্টারও আছে।",
    },
    {
      question: "কোন পেমেন্ট মেথড গ্রহণ করা হয়?",
      answer:
        "বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার এবং ক্রেডিট/ডেবিট কার্ড গ্রহণ করা হয়। নির্দিষ্ট প্রোগ্রামে কিস্তির সুবিধা আছে।",
    },
    {
      question: "কোর্স শেষে সার্টিফিকেট দেওয়া হয়?",
      answer:
        "হ্যাঁ, সব কোর্সে ডিজিটাল সার্টিফিকেট দেওয়া হয়। অতিরিক্ত ফি দিয়ে ইনস্টিটিউটের সিলসহ ভেরিফাইড সার্টিফিকেট ও ইজাযাহ পাওয়া যায়।",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Header - Smaller text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            যোগাযোগ করুন <span className="text-[#206380]">আন-নাহদাহ</span>-এর
            সাথে
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            কোর্স, ভর্তি, টেকনিক্যাল সাপোর্ট বা যেকোনো প্রশ্নের জন্য আমরা আছি।
            আমাদের টিম ২৪ ঘণ্টার মধ্যে উত্তর দেবে ইন শা আল্লাহ।
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-8 flex flex-col justify-between min-h-full">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 flex-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-7">
                যোগাযোগের তথ্য
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:info@an-nahdah.com"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#206380] transition"
                >
                  <div className="p-3 bg-[#206380]/10 rounded-xl">
                    <Mail className="w-5 h-5 text-[#206380]" />
                  </div>
                  <span className="text-base">info@an-nahdah.com</span>
                </a>

                <a
                  href="tel:+8809638111777"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#206380] transition"
                >
                  <div className="p-3 bg-[#206380]/10 rounded-xl">
                    <Phone className="w-5 h-5 text-[#206380]" />
                  </div>
                  <span className="text-base">+880 9638 111 777</span>
                </a>

                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-[#206380]/10 rounded-xl">
                    <Clock className="w-5 h-5 text-[#206380]" />
                  </div>
                  <span className="text-base">
                    শনি – বৃহস্পতি: সকাল ১০টা – রাত ৮টা
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-7 border-t border-gray-200 dark:border-gray-700">
                <p className="text-base font-semibold mb-4 text-gray-900 dark:text-white">
                  আমাদের ফলো করুন
                </p>
                <div className="flex gap-3">
                  {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#206380] hover:text-white transition"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA - Pushed to bottom */}
              <a
                href="https://wa.me/8809638111777"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-5 rounded-xl font-medium text-base transition shadow-md"
              >
                <MessageCircle size={20} />
                হোয়াটসঅ্যাপে মেসেজ করুন
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-7">
                আমাদের একটি বার্তা পাঠান
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="আপনার পুরো নাম *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-[#206380] focus:ring-4 focus:ring-[#206380]/20 transition text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="আপনার ইমেইল *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-[#206380] focus:ring-4 focus:ring-[#206380]/20 transition text-base"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="ফোন নম্বর (ঐচ্ছিক)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-[#206380] focus:ring-4 focus:ring-[#206380]/20 transition text-base"
                  />
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-[#206380] focus:ring-4 focus:ring-[#206380]/20 transition text-base"
                  >
                    <option value="">বিষয় নির্বাচন করুন *</option>
                    <option>কোর্স সম্পর্কিত তথ্য</option>
                    <option>ভর্তি ও নিবন্ধন</option>
                    <option>টেকনিক্যাল সাপোর্ট</option>
                    <option>পেমেন্ট ও বিলিং</option>
                    <option>সাধারণ জিজ্ঞাসা</option>
                    <option>পার্টনারশিপ সুযোগ</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="আপনার বার্তা লিখুন... *"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-[#206380] focus:ring-4 focus:ring-[#206380]/20 transition resize-none text-base"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-[#206380] hover:bg-[#185060] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base transition shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={22} />
                      বার্তা পাঠানো হচ্ছে...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle size={22} />
                      বার্তা সফলভাবে পাঠানো হয়েছে!
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      বার্তা পাঠান
                    </>
                  )}
                </button>

                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 dark:text-green-400 font-medium text-base"
                  >
                    ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব ইন শা আল্লাহ।
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Support Cards - Smaller */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: HeadphonesIcon,
              title: "লাইভ সাপোর্ট",
              desc: "তাৎক্ষণিক সহায়তা",
            },
            {
              icon: BookOpen,
              title: "হেল্প সেন্টার",
              desc: "গাইড ও টিউটোরিয়াল",
            },
            {
              icon: Users,
              title: "কমিউনিটি ফোরাম",
              desc: "শিক্ষার্থীদের সাথে আলোচনা",
            },
            {
              icon: Shield,
              title: "নিরাপদ পেমেন্ট",
              desc: "সব লেনদেন সুরক্ষিত",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-[#206380]/5 to-[#206380]/10 dark:from-[#206380]/20 dark:to-[#206380]/30 rounded-2xl p-5 text-center border border-[#206380]/20"
            >
              <item.icon className="w-8 h-8 text-[#206380] mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            শিক্ষার্থীদের <span className="text-nhd-700 dark:text-nhd-400">জিজ্ঞাসা</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#206380]">
                    {faq.question}
                  </h3>

                  <div className="flex text-[#206380]">⭐⭐⭐⭐⭐</div>
                </div>

                {/* Body */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-5">
                  {faq.answer}
                </p>

                {/* Footer Line */}
                <div className="w-full h-[3px] rounded-full bg-[#206380]/80"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
