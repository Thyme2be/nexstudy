"use client";

import DynamicCarousel from "@/app/components/DynamicCarousel";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Navsidebar from "../components/NavSideBar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [tutoring, setTutoring] = useState([]);
  // const [peopleTutors, setPeopleTutors] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchTutoring = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tutoring");
        const data = await response.json();
        setTutoring(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };
    
    // const fetchPeopleTutors = async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000/api/tutoring");
    //     const data = await response.json();
    //     setTutors(data);
    //   } catch (error) {
    //     console.error("Error fetching tutors:", error);
    //   }
    // };

    fetchTutoring();
  }, []);

  return (
    <main className="w-screen h-auto bg-secondary p-5 flex ">
      {/* Navbar on the left */}
      <Navsidebar />

      {/*Right-hand side*/}
      <section className=" flex flex-col w-full h-full px-10 gap-3 ">
        {/* Header */}
        <header className=" w-full h-20 flex items-center justify-between ">
          {/* Search bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className=" shadow-lg w-full pl-12 pr-4 py-4 text-xl rounded-lg bg-white text-black focus:outline-none"
            />
            <CiSearch className=" text-primary absolute top-1/2 left-3 transform -translate-y-1/2 text-3xl" />
          </div>

          {/* Message */}
          <div className=" flex items-center gap-5 ">
            <div className=" text-primary text-5xl ">
              <HiOutlineEnvelope className=" cursor-pointer hover:scale-110 duration-100 ease-in-out " />
            </div>

            {/* Profile */}
            <div className=" cursor-pointer hover:ring-1 hover:ring-yellow-500 duration-100 ease-in-out rounded-full overflow-hidden w-16 h-16 ring-2 ring-primary ring-offset-2 ">
              <Image
                src={"https://picsum.photos/200/200"}
                alt="profile"
                width={100}
                height={100}
              />
            </div>
          </div>
        </header>

        {/* Hero  */}
        <section className="bg-gradient-to-r from-[#AFE0FF] via-[#115D8C] to-[#53AEE6] text-white w-full gap-3 h-50 rounded-xl shadow-card flex place-content-evenly ">
          <div className=" w-65 mt-2 ">
            <Image
              src="/book.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl font-primary tracking-wider">
              HI, STUDENT
            </h1>
            <p className="font-secondary text-xl text-center">
              The NEXSTUDY serves as a welcoming home knowledge <br />
              seekers and avid readers alike
            </p>
          </div>
          <div className=" w-65">
            <Image
              src="/book2.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />{" "}
          </div>
        </section>

        <section className=" w-full h-auto flex mt-2 gap-5 ">
          {/* Tutor Zone */}
          <div className=" bg-white flex-1/2 h-auto rounded-2xl shadow-card ">
            {/* Matching Label and view all */}
            <div className=" flex justify-between w-full h-fit mt-5 px-5 items-center ">
              <h1 className=" text-4xl text-primary font-primary  ">
                TUTOR MATCHING
              </h1>
              <Link href="/all" className=" text-lg hover:underline ">
                View All
              </Link>
            </div>
            <div className=" h-auto px-5 flex ">
              <DynamicCarousel items={tutoring} /> {/* Pass fetched data */}
            </div>

            {/* Tutor Label and view all */}
            <div className=" mt-5 flex justify-between w-full h-fit px-5 items-center ">
              <h1 className=" text-4xl text-primary font-primary ">TUTORS</h1>
              <Link href="/all" className=" text-lg hover:underline ">
                View All
              </Link>
            </div>
            <div className=" h-auto px-5 flex ">
              <DynamicCarousel items={tutoring} /> {/* Pass fetched data */}
            </div>
          </div>

          {/* Apply */}
          <aside className=" bg-white w-1/5 h-auto shadow-card rounded-2xl gap-5 p-5 flex flex-col justify-center items-center ">
            <div className=" rounded-2xl w-full h-48 bg-[url(../../public/becometutor.jpg)] bg-cover bg-bottom "></div>
            <h1 className=" font-secondary text-primary text-2xl text-center ">
              Ready to make a difference and earn at the same time? Become a
              tutor!
            </h1>
            <button
              type="button"
              className=" cursor-pointer hover:shadow-button duration-150 ease-in-out px-12 py-3 bg-primary text-2xl text-white font-primary tracking-wider "
            >
              <Link href="/apply">CLICK HERE!</Link>
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}
