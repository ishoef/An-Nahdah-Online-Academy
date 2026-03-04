"use client";

import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function AdDirasahAIPlanner() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "আসসালামু আলাইকুম! আমি আদ-দিরাসাহ অনলাইন একাডেমির এআই অ্যাসিস্ট্যান্ট। আমি আপনাকে কারিকুলাম বুঝতে বা কোনো নির্দিষ্ট মাসআলার প্রাথমিক ধারণা দিতে সাহায্য করতে পারি।",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("fiqh");
  const [activeModule, setActiveModule] = useState(null);

  // ---- Curriculum Data ----
  const curriculumData = {
    fiqh: {
      title: "ফিকহ (ইবাদত)",
      modules: [
        {
          name: "পবিত্রতা",
          classes: [{ topic: "ওযুর ফরজ ও সুন্নাত", purpose: "শুদ্ধ ওযু শেখা" }],
        },
        {
          name: "সালাত",
          classes: [
            { topic: "সালাতের আরকান", purpose: "নামাজের স্তম্ভসমূহ জানা" },
          ],
        },
      ],
    },
    aqidah: {
      title: "আকিদাহ",
      modules: [
        {
          name: "আল্লাহর পরিচয়",
          classes: [{ topic: "সিফাতে বারী তায়ালা", purpose: "শুদ্ধ বিশ্বাস" }],
        },
      ],
    },
    seerah: {
      title: "সীরাত",
      modules: [
        {
          name: "মাক্কী জীবন",
          classes: [{ topic: "জন্ম ও বাল্যকাল", purpose: "নবীজির (সা) আদর্শ" }],
        },
      ],
    },
    tajweed: {
      title: "তাজবীদ",
      modules: [
        {
          name: "মাখরাজ",
          classes: [{ topic: "হরফের উচ্চারণ", purpose: "শুদ্ধ তিলাওয়াত" }],
        },
      ],
    },
  };

  // ---- Chart.js ----
  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["ফিকহ", "আকিদাহ", "তাজবীদ", "সীরাত"],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: ["#206380", "#2f7f91", "#4aa3b5", "#7fc6d1"],
            borderWidth: 0,
          },
        ],
      },
      options: { maintainAspectRatio: false },
    });

    return () => chartInstance.current?.destroy();
  }, []);

  // ---- Chat Logic ----
  const askAI = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "এটি একটি ডেমো উত্তর। Gemini API backend যুক্ত করলে এখানে প্রকৃত উত্তর আসবে।",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "ai",
        text: "আসসালামু আলাইকুম! আমি আপনাকে সাহায্য করতে পারি।",
      },
    ]);
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#fcfbf9] text-gray-800 font-['Hind_Siliguri']">
      {/* NAVBAR */}
      <nav className="bg-[#206380] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🕌</span>
            <div>
              <h1 className="text-xl font-bold">আদ-দিরাসাহ অনলাইন একাডেমি</h1>
              <p className="text-xs text-[#d6eef2]">
                এআই ইনটেলিজেন্স সহ প্ল্যানার
              </p>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        {/* DASHBOARD */}
        <section>
          <h2 className="text-3xl font-bold text-[#206380] border-l-4 border-[#206380] pl-4 mb-4">
            প্রজেক্ট ওভারভিউ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <h3 className="text-lg font-semibold">কোর্স ডিউরেশন</h3>
                <p className="text-4xl font-bold text-[#206380]">৬ মাস</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <h3 className="text-lg font-semibold">এআই সাপোর্ট</h3>
                <p className="text-4xl font-bold text-[#206380]">২৪/৭</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold text-center mb-4">
                বিষয়ভিত্তিক ক্লাসের অনুপাত
              </h3>
              <div className="h-[350px]">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </section>

        {/* AI ASSISTANT */}
        <section className="bg-[#e6f3f5] rounded-2xl p-6 border">
          <div className="flex justify-between mb-4">
            <h2 className="text-3xl font-bold text-[#206380] border-l-4 border-[#206380] pl-4">
              ✨ এআই অ্যাসিস্ট্যান্ট
            </h2>
            <button
              onClick={clearChat}
              className="text-xs border px-3 py-1 rounded bg-white"
            >
              ক্লিয়ার চ্যাট
            </button>
          </div>

          <div className="bg-white rounded-xl shadow border flex flex-col h-[500px]">
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg max-w-[80%] text-sm ${
                    m.sender === "user"
                      ? "bg-slate-100 ml-auto"
                      : "bg-[#e6f3f5] mr-auto"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="text-xs text-[#206380]">
                  জেমিনি উত্তর তৈরি করছে...
                </div>
              )}
            </div>

            <div className="p-4 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow border rounded px-4 py-2 text-sm"
                placeholder="আপনার প্রশ্নটি এখানে লিখুন..."
              />
              <button
                onClick={() => askAI(input)}
                className="bg-[#206380] hover:bg-[#184f5a] text-white px-6 py-2 rounded"
              >
                পাঠান
              </button>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="bg-white rounded-2xl p-6 border">
          <h2 className="text-3xl font-bold text-[#206380] border-l-4 border-[#206380] pl-4 mb-6">
            বিস্তারিত কারিকুলাম
          </h2>

          <div className="flex gap-2 mb-6 border-b pb-2">
            {Object.keys(curriculumData).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setActiveModule(null);
                }}
                className={`px-5 py-2 rounded-t-lg border ${
                  activeTab === key
                    ? "bg-[#206380] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {curriculumData[key].title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              {curriculumData[activeTab].modules.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModule(m)}
                  className="w-full text-left p-3 bg-white border rounded hover:bg-[#e6f3f5]"
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="lg:col-span-2 bg-slate-50 p-6 rounded border h-[450px] overflow-y-auto">
              {!activeModule && (
                <p className="text-center text-gray-500 mt-20">
                  বাম পাশ থেকে মডিউল সিলেক্ট করুন।
                </p>
              )}

              {activeModule && (
                <>
                  <h4 className="font-bold mb-4">
                    {activeModule.name} এর দারসসমূহ
                  </h4>
                  {activeModule.classes.map((c, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded border mb-3 text-xs"
                    >
                      <strong className="block text-[#206380]">
                        বিষয়: {c.topic}
                      </strong>
                      উদ্দেশ্য: {c.purpose}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#184f5a] text-[#d6eef2] py-6 text-center">
        © ২০২৪ আদ-দিরাসাহ অনলাইন একাডেমি — Gemini 2.5 Flash দ্বারা চালিত
      </footer>
    </div>
  );
}
