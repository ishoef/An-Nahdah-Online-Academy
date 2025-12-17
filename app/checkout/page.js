// app/checkout/page.jsx
"use client";

import { useState } from "react";
import {
  CreditCard,
  Wallet,
  BanknoteArrowDown,
  Mail,
  Lock,
  Check,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [walletProvider, setWalletProvider] = useState("bkash");
  const [email, setEmail] = useState("ismailhossennayeb@gmail.com");
  const [promo, setPromo] = useState("");
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const course = {
    title: "Intro to Classical Arabic",
    instructor: "Dr. Ahmad Al-Hana",
    price: 29.99,
    currency: "USD",
    thumbnail: "/images/islamic.png",
  };

  const finalPrice = promo ? course.price - 5 : course.price;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) return alert("Please accept the terms");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Simulate invoice sent
    }, 1800);
  };

  return (
    <>
      {/* Custom Brand Colors */}
      <style jsx>{`
        :root {
          --nhd-50: #e6f4f8;
          --nhd-100: #cce9f1;
          --nhd-200: #99d3e3;
          --nhd-300: #66b8d4;
          --nhd-400: #339dc6;
          --nhd-500: #2295b8;
          --nhd-600: #1f789b;
          --nhd-700: #206380; /* Primary */
          --nhd-800: #1e5a74;
          --nhd-900: #1b4f66;
          --nhd-950: #102b3c;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-nhd-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-nhd-700/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-800 p-8 shadow">
                {/* Header */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-nhd-700 dark:text-nhd-100">
                    Complete Your Purchase
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    One step away from starting your journey
                  </p>
                </div>

                {/* Success State */}
                {success ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Payment Successful!
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      A receipt has been sent to{" "}
                      <strong>{email || "your email"}</strong>
                    </p>
                    <button className="cursor-pointer mt-6 px-8 py-3 bg-nhd-700 text-white rounded-xl font-medium hover:bg-nhd-800 transition">
                      Go to My Courses
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Email */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50 focus:ring-2 focus:ring-nhd-700/20 focus:border-nhd-700 dark:focus:border-nhd-400 transition"
                      />
                    </div>

                    {/* Payment Method Tabs */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Payment Method
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "card", label: "Card", icon: CreditCard },
                          {
                            id: "paypal",
                            label: "PayPal",
                            icon: BanknoteArrowDown,
                          },
                          { id: "wallet", label: "Wallet", icon: Wallet },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id)}
                            className={`cursor-pointer flex flex-col items-center justify-center gap-2 py-4 rounded-xl border-2 transition-all ${
                              paymentMethod === method.id
                                ? "border-nhd-700 bg-nhd-50 dark:bg-nhd-700/20"
                                : "border-gray-200 dark:border-gray-700 hover:border-nhd-300"
                            }`}
                          >
                            <method.icon className="w-6 h-6 text-nhd-700 dark:text-white " />
                            <span className="text-sm font-medium text-nhd-700 dark:text-white">
                              {method.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Conditional Payment Forms */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700">
                        <input
                          placeholder="Cardholder Name"
                          className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800"
                        />
                        <input
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            placeholder="MM/YY"
                            className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-800"
                          />
                          <input
                            placeholder="CVC"
                            maxLength="4"
                            className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-800"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "wallet" && (
                      <div className="p-5 rounded-xl bg-nhd-50 dark:bg-nhd-700/10 border border-nhd-200 dark:border-nhd-700">
                        <div className="flex gap-3 justify-center mb-4">
                          {["bkash", "rocket", "nagad"].map((w) => (
                            <button
                              key={w}
                              type="button"
                              onClick={() => setWalletProvider(w)}
                              className={`cursor-pointer px-5 py-3 rounded-lg font-medium capitalize transition ${
                                walletProvider === w
                                  ? "bg-nhd-700 text-white"
                                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {w === "bkash"
                                ? "bKash"
                                : w === "rocket"
                                ? "Rocket"
                                : "Nagad"}
                            </button>
                          ))}
                        </div>
                        <input
                          type="tel"
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800"
                        />
                      </div>
                    )}

                    {paymentMethod === "paypal" && (
                      <div className="p-8 text-center rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <BanknoteArrowDown className="w-12 h-12 mx-auto text-nhd-700 dark:text-nhd-400" />
                        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                          You'll be redirected to PayPal to complete your
                          payment securely.
                        </p>
                      </div>
                    )}

                    {/* Promo Code */}
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        placeholder="Promo code (e.g. WELCOME10)"
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          promo && alert(`Promo ${promo} applied! -$5`)
                        }
                        className="cursor-pointer px-6 py-3 bg-nhd-700 text-white rounded-xl font-medium hover:bg-nhd-800 transition"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Terms */}
                    <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={() => setAgree(!agree)}
                        className="mt-0.5 rounded text-nhd-700 focus:ring-nhd-700"
                      />
                      <span>
                        I agree to the{" "}
                        <a
                          href="#"
                          className="underline text-nhd-700 dark:text-white"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="underline text-nhd-700 dark:text-white"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    {/* Pay Button */}
                    <button
                      type="submit"
                      disabled={loading || !agree}
                      className="cursor-pointer w-full py-4 px-6 rounded-xl bg-nhd-700 hover:bg-nhd-800 dark:bg-nhd-500 dark:hover:bg-nhd-600 text-white font-semibold text-lg  transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>Processing...</>
                      ) : (
                        <>
                          {paymentMethod === "card" && "Pay with Card"}
                          {paymentMethod === "paypal" && "Continue to PayPal"}
                          {paymentMethod === "wallet" &&
                            `Pay with ${walletProvider.toUpperCase()}`}
                          <span className="font-bold">
                            ${finalPrice.toFixed(2)}
                          </span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <Shield className="w-4 h-4" />
                      <span>
                        256-bit SSL • PCI DSS Compliant • No card data stored
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-800 p-6 sticky top-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Order Summary
                </h3>

                <div className="flex gap-4 mb-6">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      by {course.instructor}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span>${course.price.toFixed(2)}</span>
                  </div>
                  {promo && (
                    <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                      <span>Discount (Promo)</span>
                      <span>-$5.00</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-nhd-700 dark:text-nhd-100 pt-3 border-t dark:border-gray-700">
                    <span>Total</span>
                    <span>${finalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span>Your payment information is encrypted and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
