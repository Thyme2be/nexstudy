"use client";

import Navsidebar from "../components/NavSideBar";
import { useState, useEffect } from "react";
import SubjectCard from "../components/SubjectCard";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

export default function Page() {
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

  const [tutoringRequests, setTutoringRequests] = useState<TutoringRequest[]>(
    []
  );
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [tutoringFormat, setTutoringFormat] = useState("Online");
  const [via, setVia] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [budget, setBudget] = useState("");
  const [numStudents, setNumStudents] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editingId, setEditingId] = useState<string | null>(null); // Track the ID being edited

  useEffect(() => {
    fetchData();

    // Polling every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch tutoring requests.");
    }
  };

  const handleEdit = (request: TutoringRequest) => {
    // Populate the form with existing data
    setSubject(request.subject);
    setGrade(request.grade || "");
    setTutoringFormat(request.tutoringFormat || "Online");
    setVia(request.via || "");
    setPreferredTimes(request.preferredTimes || "");
    setBudget(request.budget || "");
    setNumStudents(request.numStudents || "");
    setAdditionalNotes(request.additionalNotes || "");
    setAttachments([]); // Reset attachments for editing
    setIsEditing(true); // Set editing mode
    setEditingId(request.id); // Track the ID being edited
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("grade", grade);
    formData.append("tutoringFormat", tutoringFormat);
    formData.append("via", via);
    formData.append("preferredTimes", preferredTimes);
    formData.append("budget", budget);
    formData.append("numStudents", numStudents);
    formData.append("additionalNotes", additionalNotes);

    // Append files to the formData
    attachments.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    try {
      if (isEditing && editingId) {
        // Send PUT request for editing
        console.log("Editing ID:", editingId); // Debugging line
        const response = await fetch(
          `http://localhost:5000/api/tutoring/${editingId}`,
          {
            method: "PUT",
            body: formData,
          }
        );

        if (response.ok) {
          toast.success("Request updated successfully!"); // Use toast for success
          setIsEditing(false); // Exit editing mode
          setEditingId(null); // Clear editing ID
        } else {
          const errorText = await response.text();
          toast.error(`Failed to update request: ${errorText}`); // Use toast for error
          console.error(
            "Failed to update request:",
            response.status,
            errorText
          );
        }
      } else {
        // Send POST request for creating
        const response = await fetch("http://localhost:5000/api/tutoring", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast.success("Request created successfully!"); // Use toast for success
        } else {
          const errorText = await response.text();
          toast.error(`Failed to create request: ${errorText}`); // Use toast for error
          console.error("Failed to submit form:", response.status, errorText);
        }
      }

      // Reset the form
      setSubject("");
      setGrade("");
      setTutoringFormat("Online");
      setVia("");
      setPreferredTimes("");
      setBudget("");
      setNumStudents("");
      setAttachments([]);
      setAdditionalNotes("");
      fetchData(); // Refresh the list
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred while submitting the form."); // Use toast for catch block
    }
  };

  return (
    <main className="w-screen h-auto bg-secondary flex p-4 gap-10">
      {/* Left */}
      <Toaster position="bottom-right" reverseOrder={false} /> {/* Changed position */}
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
          {tutoringRequests.map((request) => (
            <SubjectCard
              key={request.id}
              subject={request.subject}
              onEdit={() => handleEdit(request)} // Pass the edit handler
            />
          ))}
        </section>

        {/* Tutoring Request Form */}
        <form
          onSubmit={handleSubmit}
          className=" bg-white h-fit shadow-card rounded-2xl w-1/2 ml-5 flex flex-col p-5 gap-1 "
        >
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
          <label htmlFor="attachments" className="font-bold">
            Attachments (if any)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="attachments"
              className="flex justify-between items-center gap-2 cursor-pointer border p-2 rounded hover:bg-gray-100"
            >
              <span className="text-gray-600">
                {attachments.length > 0 ? "Add More Files" : "Upload Files"}
              </span>

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

            {/* Display Selected Files */}
            {attachments.length > 0 && (
              <ul className="flex flex-col gap-1">
                {attachments.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border p-2 rounded"
                  >
                    <span className="text-gray-600">{file.name}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setAttachments((prev) =>
                          prev.filter((_, fileIndex) => fileIndex !== index)
                        )
                      }
                      className=" bg-red-600 px-2 py-1 rounded-2xl text-white cursor-pointer hover:bg-red-700 duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
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

          <button
            type="submit"
            className=" cursor-pointer hover:scale-110 duration-150 ease-in-out self-center text-center bg-primary rounded-2xl font-primary text-2xl font-light text-white shadow-xs shadow-primary/80 py-1 tracking-wider mt-5 w-40 "
          >
            {isEditing ? "Edit" : "Post"}
          </button>
        </form>
      </section>
    </main>
  );
}
