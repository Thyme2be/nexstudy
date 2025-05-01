"use client"

import {
  FaUser,
  FaLock,
  FaArrowLeft,
  FaIdCard,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [yearOfEntry, setYearOfEntry] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [fullName, setFullName] = useState("");
  const router = useRouter();

  // Check for window to avoid errors during server-side rendering
  useEffect(() => {
    if (typeof window !== "undefined") {
      // You can add client-side logic here if needed
    }
  }, []);

  const handleNavigateToLogin = () => {
    router.push("/");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submitted:", {
      username,
      password,
      studentId,
      yearOfEntry,
      rememberMe,
      fullName,
    });
    // In a real app, you'd send this data to your API
    // Example (replace with your actual authentication):
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password, studentId, yearOfEntry, fullName }),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if (data.success) {
    //     router.push('/dashboard'); // Redirect on success
    //   } else {
    //     // Handle error (e.g., show a message to the user)
    //     console.error('Login failed:', data.message);
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

    // For this example, let's just simulate a successful login after a short delay
    setTimeout(() => {
      router.push("/dashboard"); //  Make sure you have a page named /dashboard
    }, 1000);
  };

  const handleTermsClick = useCallback(() => {
    // In a real application, you would open a modal or navigate to a new page
    // to display the terms and privacy policy.
    console.log("Terms and Privacy Policy clicked");
    // Example:  router.push('/terms-and-privacy');
    alert("This would open the Terms and Privacy Policy in a real app.");
  }, [router]);

  return (
    <main className="bg-blue-500 h-screen flex">
      {/* Login Tab */}
      <div className="bg-white w-2/5 h-full flex flex-col justify-center items-center p-16">
        {/* Logo and Welcome Text */}
        <div className="w-full flex gap-4 mb-8 justify-center">
          <div className=" text-center ">
            <h1 className="text-primary font-bold text-5xl font-primary tracking-wide ">
              CREATE YOUR ACCOUNT!
            </h1>
            <p className="text-sm text-black ">Ready to gain knowledge?</p>
          </div>
        </div>

        {/* Input Fields */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="relative">
            <FaUserGraduate className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Full Name"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>


          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Student ID Field */}
          <div className="relative">
            <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Student ID (10 digits)"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              pattern="[0-9]{10}"
              title="Enter a 10-digit Student ID"
              required
            />
          </div>

          {/* Year of Entry Field */}
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <input
              type="text"
              placeholder="Year of Entry (e.g., 2023)"
              className="pl-10 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
              value={yearOfEntry}
              onChange={(e) => setYearOfEntry(e.target.value)}
              pattern="[0-9]{4}"
              title="Enter a 4-digit year (e.g., 2023)"
              required
            />
          </div>

          {/* Agree Terms and Privacy Checkbox */}
          <label className="flex items-center gap-2 text-lg text-black">
            <div className=" cursor-pointer relative">
              <input
                type="checkbox"
                className="mt-1 appearance-none w-5 h-5 border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:outline-none"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className=" absolute left-1/2 top-3.5 -translate-x-1/2 -translate-y-1/2 text-white text-sm opacity-100">
                ✓
              </span>
            </div>
            <span className="flex gap-1">
              I agree to the
              <button
                type="button" // Prevent form submission
                onClick={handleTermsClick}
                className="text-blue-500 underline hover:text-blue-700 p-0 cursor-pointer " // added p-0
              >
                Terms and Privacy Policy
              </button>
            </span>
          </label>

          <button
            type="submit"
            className=" bg-primary font-primary text-white text-4xl py-2 hover:shadow-button ease-in-out transition duration-300 cursor-pointer"
          >
            SIGN UP
          </button>
        </form>
      </div>

      {/* Login Button */}
      <div className=" p-2 absolute top-1/2 left-[calc(26%+1rem)] -translate-y-1/2 z-10 flex ">
        {/* Logo Right Arrow */}
        <div onClick={handleNavigateToLogin} className=" p-8 bg-white rounded-full shadow-sign-up hover:shadow-primary/70 hover:shadow-lg ease-in-out transition duration-300 cursor-pointer">
          <FaArrowLeft className="text-primary text-3xl" />
        </div>
        {/* Text Sign Up */}
        <div className=" mt-1 ml-5 text-white text-lg font-secondary ">
          <p className=" ">Already have an account?</p>
          <h1 className=" text-6xl font-primary ">LOG IN</h1>
        </div>
      </div>

      {/* Login Background */}
      <div className="flex-grow w-full h-full bg-primary ">
        <div className=" w-full h-screen bg-[url(../../public/login_background.jpg)] opacity-50 bg-no-repeat bg-cover "></div>
      </div>
    </main>
  );
}
