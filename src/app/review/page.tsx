"use client";

import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useRef, useEffect, useState, useCallback } from "react";
import ReviewCard from "../components/ReviewCard";

export default function Page() {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const reviews = [
    {
      avatarUrl: "https://picsum.photos/48/48",
      text: "มืออาชีพมากๆ รู้ลึกรู้จริง ไม่กังวล",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=1",
      text: "Fantastic work! Highly recommend.",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=2",
      text: "Great communication and quality service.",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=3",
      text: "Exceeded expectations in every way.",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=4",
      text: "Professional, reliable, and a pleasure to work with.",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=5",
      text: "Top-notch service and excellent results!",
    },
    {
      avatarUrl: "https://picsum.photos/48/48?random=6",
      text: "Another great review!",
    },
  ];

  const visibleReviewCount = 3;
  const hasMoreReviews = reviews.length > visibleReviewCount;
  const displayedReviews = hasMoreReviews ? reviews.slice(startIndex, startIndex + visibleReviewCount) : reviews;

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const firstCard = scrollRef.current.children[0];
      setCardWidth(firstCard.offsetWidth + 16); // Add some extra for margin/gap
    }
  }, []);

  const scroll = useCallback(
    (direction) => {
      if (!scrollRef.current || !hasMoreReviews || cardWidth === 0) return;

      const maxStartIndex = Math.max(0, reviews.length - visibleReviewCount);
      let newStartIndex = startIndex;

      if (direction === "left") {
        newStartIndex = Math.max(0, startIndex - 1);
      } else if (direction === "right") {
        newStartIndex = Math.min(maxStartIndex, startIndex + 1);
      }

      setStartIndex(newStartIndex);

      scrollRef.current.scrollTo({
        left: newStartIndex * cardWidth,
        behavior: "smooth",
      });
    },
    [startIndex, hasMoreReviews, cardWidth, reviews.length, visibleReviewCount]
  );

  return (
    <main className="bg-secondary flex justify-center items-center h-screen text-white font-primary">
      <section className="relative bg-primary px-12 pt-10 pb-2 flex flex-col justify-center items-center gap-12 rounded-xl shadow-lg">
        {/* Profile */}
        <div className="absolute -top-14">
          <Image
            src={"https://picsum.photos/200/200"}
            width={100}
            height={100}
            alt="Profile"
            style={{ objectFit: "cover", borderRadius: "100%" }}
            className="border-4 border-white"
          />
        </div>

        {/* Header */}
        <div className="mt-5 flex flex-col justify-center items-center">
          <h1 className="text-2xl">Leonora Celeste Hartwell</h1>
          <p>Reviews from employers ({reviews.length})</p>
        </div>

        {/* Review Card Carousel Section */}
        <div className="relative w-full max-w-4xl h-56 flex items-center">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white text-primary rounded-full p-2 shadow-md hover:scale-110 transition"
            disabled={!hasMoreReviews || startIndex === 0}
          >
            {"<"}
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar flex gap-4 w-full justify-center scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {displayedReviews.map((review, idx) => (
              <div key={idx} className="flex-shrink-0 scroll-snap-align-start">
                <ReviewCard avatarUrl={review.avatarUrl} text={review.text} />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white text-primary rounded-full p-2 shadow-md hover:scale-110 transition"
            disabled={!hasMoreReviews || startIndex >= reviews.length - visibleReviewCount}
          >
            {">"}
          </button>
        </div>

        {/* Input Area */}
        <div className="relative mt-4">
          <textarea
            name="reviewtext"
            id="reviewtext"
            placeholder="Type..."
            className="bg-white text-black font-secondary resize-none p-2 h-30 w-140 rounded-2xl"
          />
          <IoSend className="text-xl cursor-pointer text-primary absolute right-3 bottom-24 hover:scale-125 duration-120" />
          <FaCamera className="text-xl cursor-pointer text-primary absolute left-3 bottom-5 hover:scale-125 duration-120" />
        </div>
      </section>
    </main>
  );
}