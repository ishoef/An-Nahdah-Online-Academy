export default function AboutSection() {
  return (
    <>
      {/* Main About Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] mb-6">
              আন-নাহদাহ অনলাইন ইনস্টিটিউট সম্পর্কে
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-lg">
              আন-নাহদাহ অনলাইন ইনস্টিটিউট একটি অগ্রণী ডিজিটাল শিক্ষা
              প্ল্যাটফর্ম, যা আধুনিক প্রযুক্তির মাধ্যমে প্রকৃত, কাঠামোবদ্ধ এবং
              উচ্চমানের ইসলামিক শিক্ষা প্রদান করতে নিবেদিত।
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-lg">
              আমাদের লক্ষ্য অর্থবহ ও রূপান্তরমূলক শিক্ষার ঐতিহ্যকে পুনরুজ্জীবিত
              করা, যেখানে সারা বিশ্বের শিক্ষার্থীদের যোগ্য শিক্ষকদের সাথে যুক্ত
              করে এমন কোর্স প্রদান করা হয় যা ক্লাসিক্যাল ইসলামিক জ্ঞান এবং
              আধুনিক শিক্ষণ পদ্ধতির সমন্বয়ে তৈরি।
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              আমরা একটি অন্তর্ভুক্তিমূলক, সহজলভ্য এবং শিক্ষার্থী-কেন্দ্রিক
              পরিবেশ গড়ে তুলতে প্রতিশ্রুতিবদ্ধ, যা প্রত্যেক ব্যক্তিকে জ্ঞান,
              আত্মিকতা এবং একাডেমিক উন্নতির যাত্রায় ক্ষমতায়িত করে—তারা বিশ্বের
              যেখানেই থাকুক না কেন।
            </p>
          </div>

          {/* Feature Cards - Design untouched as requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 order-1 md:order-2">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#206380]/20 dark:group-hover:bg-[#206380]/30 transition-colors">
                <div className="w-6 h-6 bg-[#206380] rounded"></div>
              </div>
              <h4 className="text-xl font-semibold text-[#206380] dark:text-[#206380] mb-3">
                প্রকৃত জ্ঞান
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                প্রামাণিক উৎসভিত্তিক কোর্সসমূহ, যা নির্ভুলতা, স্বচ্ছতা এবং
                একাডেমিক সততার সাথে উপস্থাপিত হয়।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#206380]/20 dark:group-hover:bg-[#206380]/30 transition-colors">
                <div className="w-6 h-6 bg-[#206380] rounded"></div>
              </div>
              <h4 className="text-xl font-semibold text-[#206380] dark:text-[#206380] mb-3">
                বৈশ্বিক প্রবেশগম্যতা
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                আমাদের সম্পূর্ণ অনলাইন প্ল্যাটফর্মের মাধ্যমে যেকোনো সময়, যেকোনো
                স্থান থেকে শিক্ষা গ্রহণ করুন।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#206380]/20 dark:group-hover:bg-[#206380]/30 transition-colors">
                <div className="w-6 h-6 bg-[#206380] rounded"></div>
              </div>
              <h4 className="text-xl font-semibold text-[#206380] dark:text-[#206380] mb-3">
                কাঠামোবদ্ধ শিক্ষা
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                গভীর উপলব্ধি এবং স্থায়ী স্মৃতি নিশ্চিত করতে ধাপে ধাপে নির্মিত
                পাঠ্যক্রম।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#206380]/20 dark:group-hover:bg-[#206380]/30 transition-colors">
                <div className="w-6 h-6 bg-[#206380] rounded"></div>
              </div>
              <h4 className="text-xl font-semibold text-[#206380] dark:text-[#206380] mb-3">
                শিক্ষার্থী-কেন্দ্রিক
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                প্রতিটি শিক্ষার্থীর আলাদা যাত্রাকে সম্মান করে ব্যক্তিগত সহায়তা ও
                নির্দেশনা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Vision & Mission */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#206380] dark:text-[#206380] mb-6">
              আমাদের ভিশন ও মিশন
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              প্রকৃত ইসলামিক জ্ঞান পুনর্জীবিত করার গভীর অঙ্গীকার দ্বারা পরিচালিত
              হয়ে, আমরা এমন এক বৈশ্বিক প্রজন্ম তৈরির প্রচেষ্টা করছি যারা হৃদয় ও
              মন উভয়ক্ষেত্রে জ্ঞানের আলো দ্বারা পরিবর্তিত হবে।
            </p>
          </div>

          {/* Vision Highlight */}
          <div className="bg-[#206380] rounded-3xl p-12 md:p-16 text-white text-center mb-16 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">আমাদের ভিশন</h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto opacity-95">
              ডিজিটাল যুগে ইসলামিক বিদ্যার সোনালী ঐতিহ্য পুনরুজ্জীবিত
              করা—প্রকৃত, সংযুক্ত সনদভিত্তিক জ্ঞান বিশ্বব্যাপী প্রত্যেক
              অনুসন্ধিৎসু আত্মার কাছে পৌঁছে দেওয়া এবং ঈমান, বোঝাপড়া ও আত্মিক
              উৎকর্ষের এক বৈশ্বিক ‘নাহদাহ’ (পুনর্জাগরণ) গড়ে তোলা।
            </p>
          </div>

          {/* Mission Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 md:p-16 text-center mb-16 shadow-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] mb-6">
              আমাদের মিশন
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto">
              আমরা দৃঢ় শিক্ষার্থীদের সাথে যোগ্য আলেমদের সংযুক্ত করি, যারা
              ইসনাদভিত্তিক শিক্ষা প্রদান করেন। কাঠামোবদ্ধ এবং উচ্চমানের কোর্সের
              মাধ্যমে ক্লাসিক্যাল পদ্ধতির মর্যাদা রক্ষা করে আধুনিক সুবিধা গ্রহণ
              করে জ্ঞান শেখানো হয়—যাতে অর্জিত জ্ঞান বোঝা, সংরক্ষণ করা ও জীবনে
              প্রয়োগ করা সম্ভব হয়।
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] text-center mb-12">
              আমাদের মূল মূল্যবোধ
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Value 1 */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-[#206380]/30 dark:hover:border-[#206380]/50 hover:-translate-y-3">
                <div className="w-16 h-16 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#206380]/20 transition-colors mx-auto">
                  <svg
                    className="w-10 h-10 text-[#206380]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#206380] mb-4">
                  উৎকর্ষতা
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  একাডেমিক বিশুদ্ধতা, গভীর পাঠ্যক্রম এবং উচ্চমানের শিক্ষার
                  সর্বোচ্চ মান বজায় রাখা—কোনোভাবেই সত্যতা বা নির্ভুলতায় আপোস না
                  করা।
                </p>
              </div>

              {/* Value 2 */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-[#206380]/30 dark:hover:border-[#206380]/50 hover:-translate-y-3">
                <div className="w-16 h-16 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#206380]/20 transition-colors mx-auto">
                  <svg
                    className="w-10 h-10 text-[#206380]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 013-1.736 2 2 0 012 1.736V21m-6-1v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#206380] mb-4">
                  সহজপ্রাপ্যতা
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  বাধা দূর করে পবিত্র জ্ঞান পৃথিবীর প্রতিটি কোণে পৌঁছে
                  দেওয়া—স্থান, পটভূমি বা পরিস্থিতি নির্বিশেষে প্রত্যেক আন্তরিক
                  অনুসন্ধানীর জন্য।
                </p>
              </div>

              {/* Value 3 */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-[#206380]/30 dark:hover:border-[#206380]/50 hover:-translate-y-3">
                <div className="w-16 h-16 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#206380]/20 transition-colors mx-auto">
                  <svg
                    className="w-10 h-10 text-[#206380]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#206380] mb-4">সততা</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  কুরআন, সুন্নাহ এবং সালাফের মনহাজের প্রতি অবিচল থাকা—প্রামাণিক
                  সনদ সংরক্ষণ করা, এবং দীনকে উপকার করে এমন উপকারী উদ্ভাবন গ্রহণ
                  করা।
                </p>
              </div>

              {/* Value 4 */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-[#206380]/30 dark:hover:border-[#206380]/50 hover:-translate-y-3 md:col-span-3 lg:col-span-1">
                <div className="w-16 h-16 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#206380]/20 transition-colors mx-auto">
                  <svg
                    className="w-10 h-10 text-[#206380]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#206380] mb-4">
                  সম্প্রদায়
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  এমন এক সহায়ক বৈশ্বিক উম্মাহ গড়ে তোলা, যেখানে শিক্ষার্থীরা একে
                  অপরকে অনুপ্রাণিত এবং সহযোগিতা করে জ্ঞান ও তাকওয়ার পথে অগ্রসর
                  হয়।
                </p>
              </div>

              {/* Value 5 */}
              <div className="group bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-[#206380]/30 dark:hover:border-[#206380]/50 hover:-translate-y-3 md:col-span-3 lg:col-span-1">
                <div className="w-16 h-16 bg-[#206380]/10 dark:bg-[#206380]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#206380]/20 transition-colors mx-auto">
                  <svg
                    className="w-10 h-10 text-[#206380]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11.356 3A8.001 8.001 0 004.582 12m0 0v5m0-5H9m11.356-3V7"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[#206380] mb-4">
                  রূপান্তর
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  শুধু শেখা নয়—জ্ঞানকে চরিত্রে ও জীবনে ধারণ করার মাধ্যমে আত্মিক
                  উন্নতি, চরিত্র গঠন এবং সমাজে ইতিবাচক অবদান রাখতে সক্ষম করা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: By the Numbers */}
      <section className="bg-[#206380] dark:bg-[#1a4f68] py-20 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            পরিসংখ্যানের আলোকে
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-6xl font-extrabold mb-4">65+</div>
              <p className="text-xl opacity-90">যোগ্য আলেম ও প্রশিক্ষক</p>
            </div>
            <div>
              <div className="text-6xl font-extrabold mb-4">45+</div>
              <p className="text-xl opacity-90">বিভিন্ন শাখায় গভীরতর কোর্স</p>
            </div>
            <div>
              <div className="text-6xl font-extrabold mb-4">120+</div>
              <p className="text-xl opacity-90">
                শিক্ষার্থী প্রতিনিধিত্বকারী দেশ
              </p>
            </div>
            <div>
              <div className="text-6xl font-extrabold mb-4">15,000+</div>
              <p className="text-xl opacity-90">
                শিক্ষার মাধ্যমে পরিবর্তিত জীবন
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Unique Approach */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] text-center mb-12">
            আমাদের বিশেষ পদ্ধতি
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                আন-নাহদাহর প্রতিটি কোর্সে আমরা শতাব্দীর পর শতাব্দীর পবিত্র
                জ্ঞানকে আধুনিক শিক্ষাবিজ্ঞান ও প্রযুক্তির সাথে যুক্ত করেছি।
                প্রতিটি কোর্সে ইসনাদভিত্তিক ঐতিহ্য সংরক্ষণ করে এমন
                ইন্টার‌্যাকটিভ উপকরণ সংযুক্ত করা হয়েছে যা বোঝা ও মনে রাখাকে সহজ
                করে।
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                তাজবিদ, আকিদাহ থেকে শুরু করে উচ্চতর ফিকহ ও হাদিস বিজ্ঞান
                পর্যন্ত—আমাদের প্রোগ্রামগুলো স্বীকৃত আলেমদের তত্ত্বাবধানে
                পরিচালিত এবং বিশ্বস্বীকৃত ইসলামিক প্রতিষ্ঠান থেকে সনদপ্রাপ্ত
                শিক্ষকদের মাধ্যমে পরিচালিত।
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-[#206380] mb-6">
                যা আমাদের আলাদা করে
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#206380] mt-1">✓</span>
                  যাচাইকৃত সনদ ও ইজাযাহ (ইসনাদ ব্যবস্থা)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#206380] mt-1">✓</span>
                  সরাসরি লাইভ ক্লাস ও প্রশ্নোত্তর
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#206380] mt-1">✓</span>
                  আজীবন অ্যাকসেসসহ রেকর্ডেড সেশন
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#206380] mt-1">✓</span>
                  শিক্ষার্থী সহায়তা ও ব্যক্তিগত মেন্টরশিপ
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#206380] mt-1">✓</span>
                  কোর্স শেষে সার্টিফিকেট ও ঐতিহ্যবাহী ইজাযাহ প্রদান
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vivid Testimonials */}
      <section className="bg-white dark:bg-gray-800 py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] mb-4">
            আমাদের শিক্ষার্থীরা কী বলে
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            প্রকৃত জ্ঞান দ্বারা পরিবর্তিত জীবনের বাস্তব গল্প
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="relative bg-gradient-to-br from-[#206380]/5 to-[#206380]/10 dark:from-[#206380]/20 dark:to-[#206380]/30 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border border-[#206380]/10">
              <div className="absolute -top-6 left-8 text-8xl text-[#206380]/20 dark:text-[#206380]/40 font-bold select-none">
                “
              </div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 italic leading-relaxed mt-6 mb-8 relative z-10">
                "আমি বছরের পর বছর ইউটিউবে ঘুরতে ঘুরতে হারিয়ে গিয়েছিলাম। তারপর
                পেয়েছি আন-নাহদাহ। প্রথমবারের মতো প্রকৃত শায়েখদের কাছ থেকে
                ইজাযাহভিত্তিক বই পড়ছি। আমার ঈমান কখনো এত শক্তিশালী ছিল না।"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-[#206380] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  S
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#206380]">Sarah Johnson</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    নবীন মুসলিম • টেক্সাস, যুক্তরাষ্ট্র
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border border-amber-200 dark:border-amber-700">
              <div className="absolute -top-6 left-8 text-8xl text-amber-600/30 dark:text-amber-500/40 font-bold select-none">
                “
              </div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 italic leading-relaxed mt-6 mb-8 relative z-10">
                "আমি মালয়েশিয়ার একজন ব্যস্ত ডাক্তার। মাগরিবের পর বাচ্চাদের ঘুম
                পাড়িয়ে লাইভ ক্লাসে যোগ দিই, যাদের নাম আগে শুধু বইয়ে পড়েছি। গত
                মাসে কুরআনে আমার প্রথম ইজাযাহ পেয়েছি — যা আমি কখনো কল্পনাও
                করিনি।"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  D
                </div>
                <div className="text-left">
                  <p className="font-bold text-amber-700 dark:text-amber-400">
                    Dr. Ahmad Khalil
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    কার্ডিওলজিস্ট • কুয়ালালামপুর
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border border-emerald-200 dark:border-emerald-700">
              <div className="absolute -top-6 left-8 text-8xl text-emerald-600/30 dark:text-emerald-500/40 font-bold select-none">
                “
              </div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 italic leading-relaxed mt-6 mb-8 relative z-10">
                "ওয়াল্লাহি, সহীহ বুখারির ইজাযাহ পাওয়ার দিন আমি কেঁদে ফেলেছিলাম।
                জর্ডানের শরণার্থী ক্যাম্পে দুর্বল নেটওয়ার্ক আর একটি ফোন থেকেই
                শুরু — আর আজ রাসূল ﷺ পর্যন্ত অটুট সনদ। আন-নাহদাহ আমার স্বপ্নকে
                বাস্তব করেছে।"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  K
                </div>
                <div className="text-left">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400">
                    Khaled al-Mansour
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    জ্ঞান অন্বেষণকারী • আম্মান, জর্ডান
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-[#206380] dark:text-[#206380]">
              ১২০+ দেশের ১৫,০০০+ শিক্ষার্থী
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              …এবং প্রত্যেকেরই এমন এক অনুপ্রেরণাময় গল্প আছে
            </p>
          </div>
        </div>
      </section>

      {/* New Section 5: Our Leadership & Scholars */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#206380] dark:text-[#206380] mb-12">
            স্বীকৃত আলেমদের তত্ত্বাবধানে পরিচালিত
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-16">
            আমাদের কোর্সসমূহ এমন আলেমগণ দ্বারা পরিচালিত ও তত্ত্বাবধানে গড়ে
            উঠেছে যারা আল-আজহার বিশ্ববিদ্যালয়, মাদীনা ইসলামিক বিশ্ববিদ্যালয় এবং
            বিশ্বজুড়ে বিভিন্ন প্রথাগত ইসলামি মাদরাসা ও বিশ্ববিদ্যালয় থেকে শিক্ষা
            গ্রহণ করেছেন।
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-[#206380]">
                Shaykh Dr. Yasir Qadhi
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                একাডেমিক উপদেষ্টা
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-[#206380]">
                Ustadha Zaynab Ansari
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                সিনিয়র শিক্ষিকা - ফিকহ ও আত্মিকতা
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-[#206380]">
                Shaykh Abdullah Oduro
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ইসলামিক বিজ্ঞান বিভাগের পরিচালক
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 6: Start Your Journey */}
      <section className="bg-[#206380] dark:bg-[#1a4f68] py-20 px-4 md:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            আজই আপনার জ্ঞানযাত্রা শুরু করুন
          </h2>
          <p className="text-xl mb-12 opacity-90">
            যোগ্য আলেমদের তত্ত্বাবধানে প্রকৃত ইসলামিক জ্ঞান অধ্যয়ন করতে
            বিশ্বজুড়ে হাজারো শিক্ষার্থীর সাথে যোগ দিন।
          </p>
          <button className="bg-white text-[#206380] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
            আমাদের কোর্সসমূহ দেখুন
          </button>
        </div>
      </section>
    </>
  );
}
