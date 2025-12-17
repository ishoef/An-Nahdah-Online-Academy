import React from "react";
import { Mail, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0f172a] dark:via-[#0b1f28] dark:to-[#0f2f3d]">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#206380]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#206380]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-[#206380]/10 dark:bg-[#4fa3c4]/20 rounded-2xl flex items-center justify-center mb-5">
              <Mail className="w-8 h-8 text-[#206380] dark:text-[#4fa3c4]" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="text-[#206380]">Reset</span> Your Password
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              No worries! Just enter your email and we’ll send you a secure link
              to create a new password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="
                    w-full pl-12 pr-4 py-3 rounded-xl border
                    bg-white dark:bg-gray-900/50
                    border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-[#206380]/20
                    focus:border-[#206380] dark:focus:border-[#4fa3c4]
                    transition-all duration-200
                  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-3.5 px-6 rounded-xl font-semibold text-white
                bg-[#206380] hover:bg-[#1b5670] dark:bg-[#4fa3c4] dark:hover:bg-[#3d8ba3]
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                transition-all duration-200 flex items-center justify-center gap-2
              "
            >
              Send Reset Link
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>

          {/* Back to login */}
          <div className="mt-8 text-center">
            <a
              href="/login"
              className="
                inline-flex items-center gap-2 text-sm font-medium
                text-[#206380] dark:text-[#4fa3c4] hover:text-[#1b5670] dark:hover:text-[#3d8ba3]
                transition-colors duration-200
              "
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </a>
          </div>
        </div>

        {/* Optional footer text */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-500">
          Secured with end-to-end encryption • Never shared with third parties
        </p>
      </div>
    </div>
  );
}
