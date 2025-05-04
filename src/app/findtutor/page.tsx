"use client"; // Add this line at the very top

import { BsPencilSquare } from "react-icons/bs";
import Navsidebar from "../components/NavSideBar";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [tutoringFormat, setTutoringFormat] = useState("Online");
  const [via, setVia] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [budget, setBudget] = useState("");
  const [numStudents, setNumStudents] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState("");

  return (
    <main className="w-screen h-screen bg-secondary flex p-4 gap-10">
      {/* Left */}
      <Navsidebar />

      {/* Middle and Right */}
      <section className="flex w-full">
        {/* Tutoring List section */}
        <section className="bg-white w-1/2 h-fit flex flex-col p-4 shadow-card rounded-2xl text-primary font-primary tracking-wide mb-1">
          <h1 className="text-primary font-primary font-bold text-4xl ">
            TUTORING LIST
          </h1>
          <p className="text-black font-primary font-bold text-lg ">
            Once you find a tutor you like, please enter their name and code.
          </p>

          {/* Card */}
          <div className=" relative bg-blue-100 w-full h-full flex p-4 rounded-2xl mt-1">
            <div className=" flex w-full justify-between  ">
              <div className=" h-full flex w-5/6 gap-10 ">
                <Image
                  src={"https://picsum.photos/200/200"}
                  alt="textbook"
                  width={200}
                  height={200}
                  className="h-auto w-1/2  "
                />
                <h1 className=" text-primary font-primary font-bold text-6xl mt-3 items-center">
                  CN101
                </h1>
              </div>
              <BsPencilSquare className=" text-4xl cursor-pointer hover:scale-125 duration-100 ease-in-out" />
            </div>
            <button className=" absolute right-4 bottom-4 cursor-pointer duration-200 hover:scale-115 ease-in-out bg-primary hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
              CONFIRM
            </button>
          </div>
        </section>

        {/* Tutoring Request Form */}
        <form className=" bg-white w-1/2 ml-5 flex flex-col p-5 gap-1 ">
          {/* Subject */}
          <label htmlFor="subject" className=" font-bold ">
            Subject to be studied*
          </label>
          <input
            type="text"
            placeholder="Subject to be studied"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className=" border p-2 "
          />

          {/* Grade */}
          <label htmlFor="grade" className=" font-bold ">
            Subject to be studied*
          </label>
          <select
            id="grade"
            className=" border p-2 "
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="" disabled>
              Grade
            </option>
            <option value="Freshman">Freshman (1st year)</option>
            <option value="Sophomore">Sophomore (2nd year)</option>
            <option value="Junior">Junior (3rd year)</option>
            <option value="Senior">Senior (4th year)</option>
          </select>

          {/* Tutoring Format */}
          <label className="font-bold">Tutoring Format*</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="tutoringFormat"
                value="Online"
                checked={tutoringFormat === "Online"}
                onChange={(e) => setTutoringFormat(e.target.value)}
                className="mr-2"
              />
              Online
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="tutoringFormat"
                value="Onsite"
                checked={tutoringFormat === "Onsite"}
                onChange={(e) => setTutoringFormat(e.target.value)}
                className="mr-2"
              />
              Onsite
            </label>
            <input
              type="text"
              placeholder="eg. Home/Zoom"
              value={via}
              onChange={(e) => setVia(e.target.value)}
              className=" border p-2 "
            />
          </div>

          {/* Preferred Times */}
          <label htmlFor="preferredTimes" className=" font-bold ">
            Preferred days and times for lessons*
          </label>
          <input
            type="datetime-local"
            id="preferredTimes"
            value={preferredTimes}
            onChange={(e) => setPreferredTimes(e.target.value)}
            className=" border p-2 "
          />

          {/* Budget */}
          <label htmlFor="budget" className=" font-bold ">
            Overall budget available*
          </label>
          <input
            type="number"
            placeholder="Overall budget available eg.100-200"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className=" border p-2 "
          />

          {/* Number of Students */}
          <label htmlFor="numStudents" className=" font-bold ">
            Number of students*
          </label>
          <input
            type="number"
            placeholder="Number of students"
            value={numStudents}
            onChange={(e) => setNumStudents(e.target.value)}
            className=" border p-2 "
          />

          {/* Attachments */}
          <label htmlFor="attachments" className=" font-bold ">
            Attachments (if any)
          </label>
          <div className="flex items-center gap-2 w-full ">
            <label
              htmlFor="attachments"
              className="flex w-full justify-between items-center gap-2 cursor-pointer border p-2 rounded hover:bg-gray-100"
            >
              <span className="text-gray-600">Upload Files</span>

              {/* + logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </label>
            <input
              type="file"
              id="attachments"
              multiple
              onChange={(e) => setAttachments(Array.from(e.target.files || []))}
              className="hidden"
            />
          </div>

          {/* Additional Notes */}
          <label htmlFor="additionalNotes" className=" font-bold ">
            Additional notes (if any)
          </label>
          <textarea
            id="additionalNotes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="border p-2 resize-none "
            rows={4}
            placeholder="Additional notes (if any)"
            spellCheck="false"
          ></textarea>

          <button className=" cursor-pointer hover:scale-110 duration-150 ease-in-out self-center text-center bg-primary rounded-2xl font-primary text-2xl font-light text-white shadow-xs shadow-primary/80 py-1 tracking-wider mt-5 w-40 ">
            POST
          </button>
        </form>
      </section>
    </main>
  );
}
