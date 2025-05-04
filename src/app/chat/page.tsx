"use client";

import { useEffect, useState } from "react";
import Navsidebar from "../components/NavSideBar";
import ChatProfileCard from "../components/ChatProfileCard";
import ChatHeader from "../components/ChatHeader";
import ChatMessageSent from "../components/ChatMessageSent";
import { IoSend } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

export default function Page() {
  const [tutoringRequests, setTutoringRequests] = useState<TutoringRequest[]>(
    []
  );
  const [selectedRequest, setSelectedRequest] =
    useState<TutoringRequest | null>(null); // State for selected request

  interface TutoringRequest {
    id: string;
    subject: string;
    grade?: string;
    tutoringFormat?: string;
    via?: string;
    preferredTimes?: string;
    budget?: string;
    numStudents?: string;
    attachments?: File[];
    additionalNotes?: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tutoring", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTutoringRequests(data);

        // Set MA111 as the default selected request
        const defaultRequest = data.find(
          (request: TutoringRequest) => request.subject === "MA111"
        );
        if (defaultRequest) {
          setSelectedRequest(defaultRequest);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tutoring/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSelectedRequest(data); // Update the selected request
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className=" h-auto p-5 bg-secondary flex gap-3 ">
      <Navsidebar />

      {/* Middle and Right */}
      <section className=" w-full h-auto flex gap-5 ">
        {/* Middle */}
        <section className=" flex-1/3 h-auto bg-white shadow-card rounded-2xl ">
          {/* Sort friend/tutor */}
          <div className=" w-full flex gap-5 py-3 px-5 text-xl ">
            <h1 className=" hover:underline cursor-pointer ">All</h1>
            <h1 className=" hover:underline cursor-pointer ">Friends</h1>
            <h1 className=" hover:underline cursor-pointer ">Tutor</h1>
          </div>
          {/* Profile */}
          {tutoringRequests.map((request) => (
            <ChatProfileCard
              key={request.id}
              subject={request.subject}
              onClick={() => handleCardClick(request.id)} // Pass the click handler
            />
          ))}
        </section>

        {/* Chat Right */}
        <section className=" relative flex-2/3 h-auto bg-white shadow-card rounded-2xl p-5 ">
          {/* Chat header */}
          <div className=" h-20 w-full flex justify-between items-center ">
            {/* Profile */}
            <ChatHeader subject={selectedRequest?.subject || ""} />{" "}
            {/* Display selected subject */}
            {/* Phone Logo */}
            <div>
              <FaPhoneVolume className=" text-5xl text-primary cursor-pointer hover:scale-125 duration-100 ease-in-out " />
            </div>
          </div>
          <div className="border-t border-black my-5 " />

          {/* Chat Message Received */}
          <div className=" bg-gray-200 w-fit p-3 text-md rounded-3xl ">
            <h2>Hi There</h2>
          </div>

          {/* Chat Message Sent */}
          {selectedRequest && (
            <ChatMessageSent
              preferredTimes={selectedRequest.preferredTimes || ""}
              tutoringFormat={selectedRequest.tutoringFormat || ""}
              budget={selectedRequest.budget || ""}
              numStudents={selectedRequest.numStudents || ""}
              additionalNotes={selectedRequest.additionalNotes || ""}
            />
          )}

          {/* Chat textarea */}
          <div className=" h-full ">
            <textarea
              name="text-to-sent"
              id="text-to-sent"
              placeholder="Type..."
              spellCheck="false"
              className=" bg-blue-300 rounded-2xl w-full p-5 mt-5 resize-none text-xl "
            ></textarea>
            <IoSend className=" cursor-pointer hover:scale-125 duration-100 absolute bottom-20 right-8 text-2xl text-primary " />
            <FaSmile className=" cursor-pointer hover:scale-125 duration-100 absolute bottom-10 right-8 text-2xl text-yellow-400 " />
          </div>
        </section>
      </section>
    </main>
  );
}
