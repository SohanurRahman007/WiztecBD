// app/auth/signup/page.jsx
import "../auth-styles.css";
import Link from "next/link";

export const metadata = {
  title: "Create New Account - WiztecBD",
};

export default function SignupPage() {
  return (
    <div className="font-display bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-md">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <svg
                className="text-purple-600"
                fill="none"
                height="32"
                viewBox="0 0 32 32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L2 10.33L3.79 11.69L16 4.72L28.21 11.69L30 10.33L16 2Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16 29.28L4 21.6V12.91L2 11.67V22.84L16 31L30 22.84V11.67L28 12.91V21.6L16 29.28Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22 17.15V14.53L16 11L10 14.53V17.15L16 20.67L22 17.15Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                WiztecBD
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
              Create New Account
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center lg:text-left">
              Let's login to grab amazing deal
            </p>

            {/* Social Buttons - Using img tags for external images */}
            <div className="mt-10 space-y-4">
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkmHQrGZ-lrFXKZYp1V9Oxj54AySGtqR4fYT8jU_nG2qZMvFaWWwPxl0DdNTipzDyxiQ_PHZ4xentfYv-y2sU9KGyOBjyCWkZdzrIJHHF8kld9Eqz_r_MJz-gMVtJMJRgGMGS8rgrzuGoyjbKBGJlCNospGye6SMW8-nwBY9hMZ4Fcn1qbDlbXm-2Ak_fxh4xgaglgqiubpJ3MckMVO7Dh-V2ZW2wud1Su3Os_A9tky-3YsvYdLXUwZEq4YM7rTWqS0FP7kr392-w"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg
                  className="w-5 h-5 fill-current text-gray-800 dark:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.228 12.003c0 2.92-2.152 4.14-2.152 4.14-.047.031.047.062 0 .11-.937 2.375-2.734 4.156-4.578 4.156-1.781 0-2.438-1.078-4.531-1.078-2.094 0-2.938 1.125-4.594 1.125-1.828 0-3.328-1.89-4.328-4.28-.985-2.359-2.078-7.39 1.171-9.982 1.343-1.094 3.015-1.344 4.187-1.344 1.531 0 2.64.516 3.906.516 1.25 0 2.766-.625 4.547-.562.89.03 2.875.312 4.14 2.14-.14.093 2.155 1.17 2.155 4.017zm-4.735-6.093c.89-1.125 1.484-2.72 1.312-4.22-.015.016-1.578.016-2.937 1.187-1.25 1.094-2.125 2.656-1.937 4.14.234.016 1.625-.016 3.562-1.109z"></path>
                </svg>
                Continue with Apple
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Continue with Email/Phone
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?
              <Link
                className="font-medium text-purple-600 hover:underline ml-1"
                href="#"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center p-8">
          <div
            className="w-full h-full bg-cover bg-center auth-wavy-clip **custom-clip-path-wavy**" // <-- Apply it here
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/bytestore/image/upload/v1764869751/Pexels_Photo_by_Google_DeepMind_wfrwcb.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center p-12 **custom-clip-path-wavy**">
              {" "}
              {/* <-- And here */}
              <p className="text-white text-2xl font-semibold text-center leading-relaxed">
                Browse thousands of properties to buy, sell, or rent with
                trusted agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
