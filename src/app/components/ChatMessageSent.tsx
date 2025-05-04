import Link from "next/link";

interface ChatMessageSentProps {
  preferredTimes: string;
  tutoringFormat: string;
  budget: string;
  numStudents: string;
  additionalNotes: string;
  id: string; // Add the ID of the tutoring request
  onDelete: (id: string) => void; // Callback for delete action
}

export default function ChatMessageSent({
  preferredTimes,
  tutoringFormat,
  budget,
  numStudents,
  additionalNotes,
  id,
  onDelete,
}: ChatMessageSentProps) {
  return (
    <div className=" float-end bg-blue-300 max-w-1/2 p-5 text-md rounded-3xl flex flex-col gap-3 items-center ">
      <h2 className=" font-bold text-center text-primary underline ">
        Status message
      </h2>
      <p>
        Appointment date: {preferredTimes.slice(0, 10)} <br />
        Time: {preferredTimes.slice(11)} <br />
        Tutoring via: {tutoringFormat} <br />
        Tutoring fee: {budget} baht <br />
        Number of students: {numStudents} people <br />
        Note: {additionalNotes}
      </p>
      <button className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer ">
        Confirm
      </button>
      <button className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer ">
        <Link href={"/review"}>Review</Link>
      </button>
      <button
        className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer "
        onClick={() => onDelete(id)} // Call the onDelete function with the ID
      >
        Cancel
      </button>
    </div>
  );
}
