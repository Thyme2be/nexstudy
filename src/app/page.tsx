"use client";

import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";

export default function Home() {
  const router = useRouter(); // Initialize router

  const handleNavigateToRegister = () => {
    router.push("/register"); // Navigate to /register
  };

  return (
    <main className="bg-blue-500 h-screen flex">
      {/* Login Tab */}
      <div className="bg-white w-2/5 h-full flex flex-col justify-center items-center p-16">
        {/* Logo and Welcome Text */}
        <div className="w-full flex gap-4 mb-8 justify-center">
          <div>
            <h1 className="text-primary font-bold text-5xl font-primary tracking-wide ">
              WELCOME!
            </h1>
            <p className="text-sm text-black ">Ready to gain knowledge?</p>
          </div>
        </div>

        {/* Input Fields */}
        <form className="w-full flex flex-col gap-4">
          {/* Username Field */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
            />
          </div>

          {/* Remember Me Checkbox */}
          <label className="flex items-center gap-2 text-lg text-black cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="mt-1 appearance-none w-5 h-5 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:outline-none"
              />
              <span className="absolute left-1/2 top-3.5 -translate-x-1/2 -translate-y-1/2 text-white text-sm opacity-100">
                ✓
              </span>
            </div>
            Remember me
          </label>

          <Link
            href="/home"
            className="block w-full text-center bg-primary font-primary text-white text-4xl py-2 hover:shadow-button ease-in-out transition duration-300 cursor-pointer" // Apply button styles directly to Link
          >
            Log in
          </Link>
        </form>
      </div>

      {/* Sign Up Button */}
      <div className="p-2 absolute top-1/2 left-[calc(26%+1rem)] -translate-y-1/2 z-10 flex">
        {/* Logo Right Arrow */}
        <div
          onClick={handleNavigateToRegister} // Add onClick
          className="p-8 bg-white rounded-full shadow-sign-up hover:shadow-primary/70 hover:shadow-lg ease-in-out transition duration-300 cursor-pointer"
        >
          <FaArrowRight className="text-primary text-3xl" />
        </div>
        {/* Text Sign Up */}
        <div className="mt-1 ml-5 text-white text-lg font-secondary">
          <p>Don&apos;t have an account?</p>
          <h1 className="text-6xl font-primary">SIGN UP</h1>
        </div>
      </div>

      {/* Login Background */}
      <div className="flex-grow w-full h-full bg-primary">
        <div className="w-full h-screen bg-[url(../../public/login_background.jpg)] opacity-50 bg-no-repeat bg-cover"></div>
      </div>
    </main>
  );
}
