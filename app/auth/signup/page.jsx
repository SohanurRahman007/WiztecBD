"use client";

import Link from "next/link";

export default function SignupPage() {
  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  const handleAppleSignup = () => {
    console.log("Apple signup clicked");
  };

  const handleEmailPhoneSignup = () => {
    console.log("Email/Phone signup clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Main Container with Shadow */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="https://res.cloudinary.com/bytestore/image/upload/v1764929690/Frame_9_n22pfw.png"
                  alt="WiztecBD Logo"
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-gray-900">
                  WiztecBD
                </span>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Create New Account
              </h1>
              <p className="text-gray-600 text-sm">
                Let's login to grab amazing deal
              </p>
            </div>

            {/* Social Signup Buttons */}
            <div className="space-y-2.5 mb-4">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  Continue with Google
                </span>
              </button>

              <button
                onClick={handleAppleSignup}
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="font-medium">Continue with Apple</span>
              </button>

              {/* Continue with Email/Phone Button */}
              <button
                onClick={handleEmailPhoneSignup}
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border  border-gray-300 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700"
              >
                <div class="bg-blue-500 p-0.5 rounded-full shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Continue with Email/Phone</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-xs text-gray-600 mt-5">
              Don't have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-[#7b1450] hover:text-[#6b1145] font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image with Custom Border Radius */}
        <div
          className="hidden lg:block lg:w-1/2 relative overflow-hidden"
          style={{
            borderTopLeftRadius: "80px",
            borderBottomRight: "80px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>

          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div
              className="relative w-full h-full overflow-hidden shadow-2xl"
              style={{
                borderTopLeftRadius: "80px",
                borderBottomRightRadius: "80px",
              }}
            >
              <img
                src="https://res.cloudinary.com/bytestore/image/upload/v1764869751/Pexels_Photo_by_Google_DeepMind_wfrwcb.png"
                alt="Modern cityscape"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute top-10 right-10 max-w-xs z-10 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
            <p className="text-white text-sm font-medium leading-relaxed">
              Browse thousands of properties to buy, sell, or rent with trusted
              agents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
