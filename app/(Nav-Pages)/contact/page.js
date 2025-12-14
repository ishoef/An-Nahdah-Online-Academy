"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  MessageCircle,
  Clock,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Globe,
  ChevronRight,
  ChevronDown,
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

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000); // Auto-hide success after 5s
    }, 1500);
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Visit our courses page, select your desired course, and follow the simple registration process. If you need assistance, contact our admissions team via email or phone.",
    },
    {
      question: "What are the admission requirements?",
      answer:
        "Most courses have open enrollment. Some advanced programs may require prior knowledge or completion of prerequisite courses. Check individual course details for specifics.",
    },
    {
      question: "Are the courses self-paced or scheduled?",
      answer:
        "We offer both self-paced and instructor-led scheduled courses. Many include live sessions, recorded lectures, and flexible deadlines to suit your schedule.",
    },
    {
      question: "What technical requirements do I need?",
      answer:
        "A reliable internet connection, modern browser (Chrome/Firefox recommended), and a computer or tablet. Some courses may require a microphone/webcam for interactive sessions.",
    },
    {
      question: "How do I access course materials?",
      answer:
        "After enrollment, you'll receive login credentials to our learning platform where all materials, videos, assignments, and forums are available 24/7.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Yes! Our support team is available via email, phone, or live chat during business hours. We also have a comprehensive help center with guides and tutorials.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bKash, Nagad, Rocket, bank transfers, and major credit/debit cards. Installment options are available for select programs.",
    },
    {
      question: "Do you offer certificates upon completion?",
      answer:
        "Yes, all completed courses award a digital certificate. Verified certificates with institute seal are available for an additional fee.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-[#206380]">Touch</span> with AOI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're here to answer your questions about courses, admissions,
            technical support, or anything else. Our dedicated team responds
            within 24 hours.
          </p>
        </motion.div>

        {/* Contact Cards + Form Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 h-full rounded-2xl shadow-xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:contact@an-nahdah.com"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#206380] transition"
                >
                  <Mail className="w-6 h-6 text-[#206380]" />
                  <span>contact@an-nahdah.com</span>
                </a>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#206380] transition"
                >
                  <Phone className="w-6 h-6 text-[#206380]" />
                  <span>+880 1234 567 890</span>
                </a>
                <div className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-6 h-6 text-[#206380] mt-1" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <Clock className="w-6 h-6 text-[#206380]" />
                  <span>Sat – Thu: 10:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#206380] hover:text-white transition"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#206380] hover:text-white transition"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#206380] hover:text-white transition"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[#206380] hover:text-white transition"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium transition mt-6"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-4 focus:ring-[#206380]/30 focus:border-[#206380] outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-4 focus:ring-[#206380]/30 focus:border-[#206380] outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 ..."
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-4 focus:ring-[#206380]/30 focus:border-[#206380] outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-4 focus:ring-[#206380]/30 focus:border-[#206380] outline-none transition"
                    >
                      <option value="">Select a subject</option>
                      <option>Course Information</option>
                      <option>Admission & Enrollment</option>
                      <option>Technical Support</option>
                      <option>Payment & Billing</option>
                      <option>General Inquiry</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-4 focus:ring-[#206380]/30 focus:border-[#206380] outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full flex items-center justify-center gap-3 bg-[#206380] hover:bg-[#1a4f66] disabled:opacity-70 text-white py-5 rounded-xl font-semibold text-lg transition shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Sending Message...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle size={24} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Send Message
                    </>
                  )}
                </button>

                {success && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-600 font-medium"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className=" space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="cursor-pointer w-full px-6 py-5 flex justify-between"
              >
                {faq.question}
                <ChevronDown
                  className={openFaq === index ? "rotate-180" : ""}
                />
              </button>
              {openFaq === index && (
                <div className="border-t px-6 py-5">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="relative">
            <iframe
              title="An-Nahdah Online Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82240311352!2d90.27923973934314!3d23.78075328819939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1735680000000!5m2!1sen!2sbd"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
              <div className="flex items-center gap-3">
                <Globe size={28} />
                <div>
                  <p className="text-2xl font-bold">Visit Us in Dhaka</p>
                  <p className="opacity-90">
                    An-Nahdah Online Institute Headquarters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
