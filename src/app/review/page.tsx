"use client";

import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

const reviews = [
  {
    user: "User1",
    text: "มืออาชีพมากๆ รู้สึกจริงใจ ไม่ทิ้งงาน",
    rating: 5,
  },
  {
    user: "User2",
    text: "ทำงานดีมากครับ แนะนำเลย",
    rating: 5,
  },
  {
    user: "User3",
    text: "แนะนำเลยครับ จ้างหลายรอบแล้ว มืออาชีพมาก รับผิดชอบงานดี ให้คำแนะนำดีมาก",
    rating: 5,
  },
];

export default function page() {
  const [index, setIndex] = useState(0);

  const prevReview = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <main className=" h-screen bg-blue-100 w-screen flex items-center justify-center p-4">
      <div className=" bg-primary text-white rounded-xl w-96 p-6 shadow-lg">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white p-1 mb-2">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <h1 className="text-lg font-bold text-center">
            LEONORA CELESTE HARTWELL
          </h1>
          <p className="text-sm text-center">REVIEWS FROM EMPLOYERS (358)</p>
        </div>

        {/* Rating */}
        <div className="flex justify-center my-4">
          <div className="bg-white text-black w-24 h-24 rounded-full flex flex-col items-center justify-center text-xl font-bold">
            4.9
            <span className="text-sm font-medium">จาก 5.0</span>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="flex items-center justify-between space-x-2 mb-6">
          <button onClick={prevReview} className="text-white text-xl">
            ‹
          </button>
          <div className="flex-1 bg-white text-black rounded-lg p-4 shadow">
            <p className="text-sm mb-2">{reviews[index].text}</p>
            <p className="text-yellow-500 font-semibold">
              ⭐ {reviews[index].rating}.0
            </p>
          </div>
          <button onClick={nextReview} className="text-white text-xl">
            ›
          </button>
        </div>

        {/* Input Box */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 gap-3">
          <input
            type="text"
            placeholder="Type..."
            className="flex-1 outline-none bg-transparent text-black"
          />
          <button>
            <FaCamera className=" text-primary cursor-pointer text-xl hover:scale-125 duration-100 ease-in-out " />
          </button>
          <button>
            <IoSend className=" text-primary cursor-pointer text-xl hover:scale-125 duration-100 ease-in-out " />
          </button>
        </div>
      </div>
    </main>
  );
}
