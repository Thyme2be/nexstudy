"use client";

import { FaChevronDown, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import ThumbnailCard from "../components/ThumbnailCard";
import BookDetail from "../components/BookDetail";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [tutoringRequests, setTutoringRequests] = useState<{ id: string; subject: string; numStudents: number }[]>([]); // State for fetched data
  const [selectedRequest, setSelectedRequest] = useState(null); // State for selected request

  useEffect(() => {
    // Fetch data from the backend
    const fetchTutoringRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tutoring");
        const data = await response.json();
        setTutoringRequests(data); // Store fetched data in state
        if (data.length > 0) {
          setSelectedRequest(data[0]); // Set the first request as the default selected request
        }
      } catch (error) {
        console.error("Error fetching tutoring requests:", error);
      }
    };

    fetchTutoringRequests();
  }, []);

  return (
    <main className="w-screen h-auto flex p-5">
      {/* Left */}
      <section className="flex-1/2 p-2">
        {/* Sort Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative font-primary text-2xl tracking-wider cursor-pointer rounded-full bg-[#53AEE6] hover:bg-[#5398e6] duration-100 ease-in-out text-white px-16 py-2"
        >
          ALL <FaChevronDown className="text-lg absolute right-5 top-4" />
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
        <div className="mt-5 flex gap-12 w-full flex-wrap">
          {tutoringRequests.map((request) => (
            <div
              key={request.id}
              onClick={() => setSelectedRequest(request)} // Set selected request on click
            >
              <ThumbnailCard
                subject={request.subject}
                numStudents={request.numStudents}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Right */}
      <section className="relative bg-secondary rounded-2xl flex-1/2 h-auto mt-2 py-6 px-10">
        <FaArrowAltCircleRight className="absolute right-0 top-0 text-primary text-4xl" />
        {selectedRequest && <BookDetail request={selectedRequest} />} {/* Pass selected request */}
      </section>
    </main>
  );
}
