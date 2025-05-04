"use client";

import { FaChevronDown, FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThumbnailCard from "../components/ThumbnailCard";
import BookDetail from "../components/BookDetail";

export default function Page() {
  const [open, setOpen] = useState(false);
  // Define the detailed type for a tutoring request
  type TutoringRequestFull = {
    id: string;
    subject: string;
    grade: string;
    tutoringFormat: string;
    via: string;
    preferredTimes: string;
    budget: number;
    numStudents: number;
    additionalNotes: string;
  };
  const [tutoringRequests, setTutoringRequests] = useState<
    TutoringRequestFull[]
  >([]); // State for fetched data
  const [selectedRequest, setSelectedRequest] = useState<{
    id: string;
    subject: string;
    grade: string;
    tutoringFormat: string;
    via: string;
    preferredTimes: string;
    budget: number;
    numStudents: number;
    additionalNotes: string;
  } | null>(null); // State for selected request - Type matches TutoringRequestFull

  useEffect(() => {
    // Fetch data from the backend
    const fetchTutoringRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tutoring");
        const data = await response.json();

        // Define the type for the tutoring request
        type TutoringRequestAPI = {
          id: string;
          subject: string;
          numStudents: number;
          grade?: string;
          tutoringFormat?: string;
          via?: string;
          preferredTimes?: string;
          budget?: number;
          additionalNotes?: string;
        };

        // Format the fetched data
        const formattedData: TutoringRequestFull[] = data.map((request: TutoringRequestAPI) => ({
          id: request.id,
          subject: request.subject,
          numStudents: request.numStudents,
          grade: request.grade || "N/A",
          tutoringFormat: request.tutoringFormat || "Online",
          via: request.via || "Zoom",
          preferredTimes: request.preferredTimes || "Flexible",
          budget: request.budget || 0,
          additionalNotes: request.additionalNotes || "None",
        }));

        setTutoringRequests(formattedData); // Store formatted data in state
        if (formattedData.length > 0) {
          setSelectedRequest(formattedData[0]); // Set the first request as the default selected request
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
              onClick={() => setSelectedRequest(request)} // Pass the full request object
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
        <Link href="/home">
          <FaArrowAltCircleRight className="absolute hover:scale-110 duration-100 ease-in-out cursor-pointer right-0 top-0 text-primary text-4xl" />
        </Link>
        {selectedRequest && <BookDetail request={selectedRequest} />}{" "}
        {/* Pass selected request */}
      </section>
    </main>
  );
}
