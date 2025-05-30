"use client";

import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThumbnailCard from "../components/ThumbnailCard";
import BookDetail from "../components/BookDetail";
import TutorDetail from "../components/TutorDetail";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "TUTOR MATCHING";
  const defaultId = searchParams.get("id");
  const [selectedOption, setSelectedOption] = useState(defaultType);

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
    grade: string;
    fullName: string;
    nickname: string;
    preferredDays: string;
    cost: number;
    subject: string;
  };

  const [tutoringRequests, setTutoringRequests] = useState<
    TutoringRequestFull[]
  >([]); // State for fetched data

  const [tutorsRequest, setTutorsRequest] = useState<TutorsFull[]>([]);

  const [selectedTutoringRequest, setSelectedTutoringRequest] =
    useState<TutoringRequestFull | null>(null); // Data from Tutoring

  const [selectedTutors, setSelectedTutors] = useState<TutorsFull | null>(null);

  useEffect(() => {
    const fetchTutoringRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tutoring");
        const data = await response.json();
        const formattedData = data.map((request: TutoringRequestFull) => ({
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

        setTutoringRequests(formattedData);

        if (formattedData.length > 0) {
          const index = defaultId ? parseInt(defaultId) : 0;
          setSelectedTutoringRequest(formattedData[index] || formattedData[0]);
        } else if (
          formattedData.length > 0 &&
          defaultType === "TUTOR MATCHING"
        ) {
          setSelectedTutoringRequest(formattedData[0]);
        }
      } catch (error) {
        console.error("Error fetching tutoring requests:", error);
      }
    };

    const fetchTutors = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tutors/");
        const data = await res.json();

        const formattedTutors = data.map((tutor: TutorsFull) => ({
          id: tutor.id,
          grade: tutor.grade,
          fullName: tutor.fullName,
          nickname: tutor.nickname || "Unknown",
          preferredDays: tutor.preferredDays || "N/A",
          cost: tutor.cost || 0,
          subject: tutor.subject || "None",
        }));

        setTutorsRequest(formattedTutors);

        if (formattedTutors.length > 0) {
          const index = defaultId ? parseInt(defaultId) : 0;
          setSelectedTutors(formattedTutors[index] || formattedTutors[0]);
        } else if (formattedTutors.length > 0 && defaultType === "TUTOR") {
          setSelectedTutors(formattedTutors[0]);
        }
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
              <div
                key={request.id}
                onClick={() => setSelectedTutoringRequest(request)}
              >
                <ThumbnailCard
                  subject={request.subject}
                  numStudents={request.numStudents}
                />
              </div>
            ))}

          {selectedOption === "TUTOR" &&
            tutorsRequest.map((tutor) => (
              <div key={tutor.id} onClick={() => setSelectedTutors(tutor)}>
                <ThumbnailCard subject={tutor.nickname} />
              </div>
            ))}
        </div>
      </section>

      {/* Right */}
      <section className="relative bg-secondary rounded-2xl flex-1/2 h-auto mt-2 py-6 px-10">
        <Link href="/home">
          <FaArrowAltCircleRight className="absolute hover:scale-110 duration-100 ease-in-out cursor-pointer right-0 top-0 text-primary text-4xl" />
        </Link>

        {selectedOption === "TUTOR MATCHING" && selectedTutoringRequest && (
          <BookDetail request={selectedTutoringRequest} />
        )}

        {selectedOption === "TUTOR" && selectedTutors && (
          <TutorDetail tutor={selectedTutors} />
        )}
      </section>
    </main>
  );
}
