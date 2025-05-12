"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Tutoring {
  id: number;
  subject: string;
  numStudents: number;
}

interface Tutor {
  id: number;
  nickname: string;
}

interface DynamicCarouselProps {
  items: (Tutoring | Tutor)[];
  type: "tutoring" | "tutors";
}

export default function DynamicCarousel({ items, type }: DynamicCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const itemsPerPage: number = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setDirection("right");
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setDirection("left");
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  const variants = {
    enter: (dir: "left" | "right") => {
      return {
        x: dir === "left" ? -500 : 500,
        opacity: 1,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => {
      return {
        zIndex: 0,
        x: dir === "right" ? -500 : 500,
        opacity: 1,
      };
    },
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[300px]">
      {items.length === 0 ? (
        <div className="text-center text-gray-500 text-xl font-semibold">
          No Data
        </div>
      ) : (
        <div className="w-full flex justify-between items-center gap-4">
          {currentIndex > 0 && (
            <div
              onClick={prevSlide}
              className="px-4 py-2 text-primary cursor-pointer hover:text-primary/50 text-4xl rounded"
            >
              <FaArrowLeft />
            </div>
          )}

          <div className="w-full p-2 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.1 }}
                className="grid grid-cols-4 gap-4 w-full"
              >
                {visibleItems.map((item, index) => {
                  if (type === "tutoring" && "subject" in item) {
                    const tutoringItem = item as Tutoring;
                    return (
                      <Link
                        key={index}
                        href={`/all?type=TUTOR MATCHING&id=${index}`}
                        className="bg-gray-100 p-4 rounded shadow-card text-center cursor-pointer hover:scale-105 duration-100"
                      >
                        <Image
                          src={"https://picsum.photos/200/200"}
                          width={200}
                          height={200}
                          alt="tutor image"
                        />
                        <h2 className="mt-2 text-xl font-bold">
                          {tutoringItem.subject}
                        </h2>
                        <p className="text-gray-600">
                          Group of: {tutoringItem.numStudents}
                        </p>
                      </Link>
                    );
                  }

                  if (type === "tutors" && "nickname" in item) {
                    const tutorItem = item as Tutor;
                    return (
                      <Link
                        key={index}
                        href={`/all?type=TUTOR&id=${index}`}
                        className="bg-gray-100 p-4 rounded shadow-card text-center cursor-pointer hover:scale-105 duration-100"
                      >
                        <Image
                          src={"https://picsum.photos/200/200"}
                          width={200}
                          height={200}
                          alt="tutor image"
                        />
                        <h2 className="mt-2 text-xl font-bold">
                          {tutorItem.nickname}
                        </h2>
                      </Link>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {items.length > itemsPerPage &&
            currentIndex + itemsPerPage < items.length && (
              <div
                onClick={nextSlide}
                className="px-4 py-2 text-primary cursor-pointer hover:text-primary/50 text-4xl rounded"
              >
                <FaArrowRight />
              </div>
            )}
        </div>
      )}
    </div>
  );
}
