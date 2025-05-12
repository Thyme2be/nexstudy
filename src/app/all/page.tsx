"use client";

import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThumbnailCard from "../components/ThumbnailCard";
import BookDetail from "../components/BookDetail";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("TUTOR MATCHING");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

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

  type TutorsFull = {
    id: number;
    nickname: string;
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

  const [tutorsRequest, setTutorsRequest] = useState<
    { id: number; nickname: string }[]
  >([]);

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
        const formattedData: TutoringRequestFull[] = data.map(
          (request: TutoringRequestAPI) => ({
            id: request.id,
            subject: request.subject,
            numStudents: request.numStudents,
            grade: request.grade || "N/A",
            tutoringFormat: request.tutoringFormat || "Online",
            via: request.via || "Zoom",
            preferredTimes: request.preferredTimes || "Flexible",
            budget: request.budget || 0,
            additionalNotes: request.additionalNotes || "None",
          })
        );

        setTutoringRequests(formattedData); // Store formatted data in state
        if (formattedData.length > 0) {
          setSelectedRequest(formattedData[0]); // Set the first request as the default selected request
        }
      } catch (error) {
        console.error("Error fetching tutoring requests:", error);
      }
    };

    const fetchTutors = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tutors/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        // Example formatting — adjust based on your actual tutor object structure
        const formattedTutors = data.map((tutor: TutorsFull) => ({
          id: tutor.id,
          nickname: tutor.nickname || "Unknown",
        }));

        setTutorsRequest(formattedTutors);
      } catch (error) {
        console.error(`Fetched Tutors failed: ${error}`);
      }
    };

    fetchTutoringRequests();
    fetchTutors();
  }, []);

  return (
    <main className="w-screen h-auto flex p-5">
      {/* Left */}
      <section className="flex-1/2 p-2">
        {/* Sort dropdown */}
        <select
          id="tutor-select"
          title="tutor-select"
          value={selectedOption}
          onChange={handleChange}
          className=" bg-[#53AEE6] text-white text-center font-bold text-xl font-secondary rounded p-2"
        >
          <option value="TUTOR MATCHING">TUTOR MATCHING</option>
          <option value="TUTOR">TUTOR</option>
        </select>

        {/* Thumbnail Data */}
        <div className="mt-5 flex gap-12 w-full flex-wrap">
          {selectedOption === "TUTOR MATCHING" &&
            tutoringRequests.map((request) => (
              <div key={request.id} onClick={() => setSelectedRequest(request)}>
                <ThumbnailCard
                  subject={request.subject}
                  numStudents={request.numStudents}
                />
              </div>
            ))}

          {selectedOption === "TUTOR" &&
            tutorsRequest.map((tutor) => (
              <div key={tutor.id}>
                <ThumbnailCard
                  subject={tutor.nickname}
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
