"use client";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [grade, setGrade] = useState("");
  const [preferredDays, setPreferredDays] = useState("");
  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tutorData = {
      fullName,
      nickName,
      grade,
      preferredDays,
      cost,
      subject,
    };

    try {
      const response = await fetch("http://localhost:5000/api/tutors/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setTimeout(() => router.push("/home"), 1000);
      }
    } catch (error) {
      console.error(`Error POST Tutor data: ${error}`);
      toast.error("Failed to create tutor request");
    }
  };

  return (
    <main className=" flex w-screen h-screen ">
      <Toaster position="bottom-right" reverseOrder={false} />{" "}
      {/* <!/Intoduction */}
      <div className=" bg-white w-1/4 flex flex-col p-10 h-full ">
        <div className="text-primary font-bold text-5xl font-primary tracking-wide ">
          WELCOME!
        </div>
        <div className="text-primary font-bold text-4xl font-primary tracking-wide ">
          FIRST THING FIRST...
        </div>
        <div>Create a profile to be a Tutor.</div>
        <Image
          src="/cartoon_book.png"
          alt="book"
          width={200}
          height={200}
          className=""
        />
        <Image src="/cartoon.png" alt="cartoon" width={800} height={800} />
      </div>
      <div className=" bg-blue-100 w-2/3 h-auto m-10 p-2 shadow-[-10px_10px_5px_rgba(0,0,0,0.25)] ">
        <div className="flex flex-col items-center p-2">
          {/* logo and change btn */}
          <div className=" flex gap-5 items-center ">
            <div className="w-24 h-24 rounded-full bg-white p-1 mb-2 "></div>
            <p className="text-sm text-center border-2 border-black rounded-full p-2">
              CHANGE
            </p>
          </div>
        </div>

        {/* Form */}
        <form className=" w-full h-auto flex " onSubmit={handleSubmit}>
          {/* Leftside */}
          <div className=" w-1/2 pr-4">
            {" "}
            {/* ปรับ width และเพิ่ม padding ขวา */}
            {/* Name Field */}
            <div className="m-4 mb-4">
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {/* Nickname Field */}
            <div className="m-4 mb-4">
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Nickname
              </label>
              <input
                type="text"
                placeholder="Nickname"
                className=" pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            {/* Grade Field */}
            <div className="m-4 mb-4">
              {" "}
              {/* เพิ่ม margin-bottom */}
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Grade
              </label>
              <input
                type="text"
                placeholder="Grade"
                className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            {/* Cost Field */}
            <div className="m-4 mb-4">
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Cost
              </label>
              <input
                type="text"
                placeholder="Cost eg. 200 - 300"
                className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            {/* Subject Field */}
            <div className="m-4 mb-4">
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Subjects to be tutor
              </label>
              <input
                placeholder="Subjects to be tutor"
                className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setSubject(e.target.value)}
              ></input>
            </div>
          </div>

          {/* Righside */}
          <div className="relative w-1/2 pl-4">
            {/* Tutor Experience Field */}
            <div className="mr-6 mb-4 mt-4">
              <label className="text-primary font-bold font-primary tracking-wide">
                Tutor Experience
              </label>
              <div>
                <textarea
                  placeholder="Tutor Experience..."
                  className="p-2 h-58 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>

            {/* date and time Field */}
            <div className="mr-6 mb-4 mt-4">
              {" "}
              {/* เพิ่ม margin-bottom */}
              <label className="text-primary font-bold text-base font-primary tracking-wide">
                Convenient Day and Time
              </label>
              <input
                placeholder="Convenient Day and Time"
                className="input pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                onChange={(e) => setPreferredDays(e.target.value)}
              />
            </div>

            {/* Apply Button */}
            <div className=" flex justify-end m-2 mt-12 ">
              <button
                type="submit"
                className=" cursor-pointer duration-200 hover:scale-115 ease-in-out bg-primary hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              >
                Apply
              </button>
            </div>
            <div className=" m-2 text-end ">
              <p>We are very glad that you have applied to be a tutor.</p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
