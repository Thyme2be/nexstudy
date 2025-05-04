"use client"; // Add this line at the very top

import { BsPencilSquare } from "react-icons/bs";
import Navsidebar from "../components/NavSideBar";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [tutoringFormat, setTutoringFormat] = useState("Online");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [budget, setBudget] = useState("");
  const [numStudents, setNumStudents] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleAttachmentChange = (event) => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files]);
  };

  return (
    <main className="w-screen h-auto bg-secondary flex p-4 gap-5">
      {/* Left */}
      <Navsidebar />

      {/* Middle and Right */}
      <section className="flex w-full">
        {/* Middle */}
        <section className="bg-white w-1/2 h-1/2 flex flex-col p-4 shadow-card rounded-2xl text-primary font-primary tracking-wide m-1 mb-1">
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

        {/* Right */}
        <div className="bg-white w-1/2 h-auto rounded-2xl shadow-md p-6 ml-5 ">
          {/* h2 */}
          <h2 className="text-2xl font-bold text-primary mb-4 font-primary ">
            Tutoring Request
          </h2>

          <div className="mb-4">
            {/* box1 */}
            <label
              htmlFor="subject"
              className="block text-primary text-lg font-bold mb-2"
            >
              Subject to be studied*
            </label>

            <input
              type="text"
              id="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="grade"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Grade*
            </label>
            <div className="relative">
              <select
                id="grade"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value="">Select Grade</option>
                <option value="Elementary">Elementary</option>
                <option value="Middle School">Middle School</option>
                <option value="High School">High School</option>
                <option value="College">College</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tutoring format*
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="tutoringFormat"
                  value="Online"
                  checked={tutoringFormat === "Online"}
                  onChange={(e) => setTutoringFormat(e.target.value)}
                />
                <span className="ml-2 text-gray-700">Online</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="tutoringFormat"
                  value="Onsite"
                  checked={tutoringFormat === "Onsite"}
                  onChange={(e) => setTutoringFormat(e.target.value)}
                />
                <span className="ml-2 text-gray-700">Onsite eg. Home/Zoom</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="preferredTimes"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Preferred days and times for lessons*
            </label>
            <div>
              <div className="mb-4 mt-2">
                {" "}
                {/* เพิ่ม margin-bottom */}
                <input
                  type="datetime-local"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="budget"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Overall budget available* eg.100-200
            </label>
            <input
              type="text"
              id="budget"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numStudents"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Number of students*
            </label>
            <input
              type="number"
              id="numStudents"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={numStudents}
              onChange={(e) => setNumStudents(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="attachments"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Attachments (if any)
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="attachments"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                multiple
                onChange={handleAttachmentChange}
              />
              {attachments.length > 0 && (
                <div className="ml-2">
                  {attachments.map((file) => (
                    <span
                      key={file.name}
                      className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1"
                    >
                      {file.name}
                    </span>
                  ))}
                </div>
              )}
              <button
                type="button"
                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => document.getElementById("attachments").click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-6">
            {/* additional field */}
            <label
              htmlFor="additionalNotes"
              className="block text-primary text-sm font-bold mb-2"
            >
              Additional notes (if any)
            </label>

            <textarea
              id="additionalNotes"
              className=" px-3 py-3 shadow appearance-none border rounded w-full text-primary leading-tight focus:outline-none focus:shadow-outline"
              value={additionalNotes}
              placeholder="Ex. I'm new, please teach slowly"
              onChange={(e) => setAdditionalNotes(e.target.value)}
            ></textarea>

            <div className=" w-full flex  justify-center mt-5  ">
              <button className=" cursor-pointer duration-200 hover:scale-115 ease-in-out  bg-primary hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                POST
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
