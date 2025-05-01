"use client";

import { FaChevronDown, FaArrowAltCircleRight } from "react-icons/fa"; // add this at the top
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className=" w-screen h-auto flex p-5 ">
      {/* Left */}
      <section className=" flex-1/2 p-2  ">
        {/* Sort Button */}
        <button
          onClick={() => setOpen(!open)}
          className=" relative font-primary text-2xl tracking-wider cursor-pointer rounded-full bg-[#53AEE6] hover:bg-[#5398e6] duration-100 ease-in-out text-white px-16 py-2"
        >
          ALL <FaChevronDown className=" text-lg absolute right-5 top-4 " />
        </button>
        {open && (
          <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                All
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                CN101
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                SF230
              </li>
            </ul>
          </div>
        )}

        {/* Thumbnail Data */}
        <div className=" mt-5 flex gap-12 w-full flex-wrap ">
          <div className=" cursor-pointer border-2 border-black p-4 rounded flex justify-center items-center w-40">
            <p className=" text-4xl ">+</p>
          </div>
          <div className=" cursor-pointer hover:-translate-y-2 ease-in-out duration-150 bg-gray-100 p-4 rounded shadow-card text-center w-40">
            <Image
              src={"https://picsum.photos/200/200"}
              width={200}
              height={200}
              alt="tutor image"
            />
            <h2 className="mt-2 text-xl font-bold">Test title</h2>
            <p className="text-gray-600">Test subject </p>
          </div>
        </div>
      </section>

      {/* Right */}
      <section className=" relative bg-secondary rounded-2xl flex-1/2 h-auto mt-2 py-6 px-10">
      <FaArrowAltCircleRight className=" absolute right-0 top-0 text-primary text-4xl " />
        <div className=" w-full flex justify-center items-center">
          <Image
            src={"https://picsum.photos/200/200"}
            width={200}
            height={200}
            alt="tutor image"
            className=" shadow-card "
          />
        </div>
        <div className=" mt-5 font-primary tracking-wide text-primary text-3xl text-center ">
          <h1>Subject ID</h1>
          <p>Full subject name</p>
        </div>
        {/* Detail */}
        <div className=" mt-5 font-secondary font-bold text-xl ">
          <p>
            Grade: year 1 <br />
            Tutoring via: Online (Zoom) <br />
            Preferred days and times: <br />
            = Monday - Wednesday 10.00 - 12.00 o’clock <br />
            = Sunday 15.00 - 16.00 o’clock <br />
            Budget: 100-250 Baht <br />
            Group of: 2 <br />
            Attachments : <br />
            -L01 <br />
            -L02 <br />
            -L04 <br />
            Additional notes: none <br />
          </p>
        </div>
        <div className=" flex flex-col mt-5 font-primary tracking-wide text-4xl text-primary space-y-4 items-end ">
          <button className="  cursor-pointer font-bold py-2 px-10 rounded-4xl bg-blue-300 hover:bg-blue-300/60 w-fit">
            BOOK
          </button>
          <button className=" cursor-pointer font-bold py-1 px-10 rounded-4xl border-primary hover:border-primary/80 hover:text-primary/80 border-2 w-fit">
            NEXT
          </button>
        </div>
      </section>
    </main>
  );
}
