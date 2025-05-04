import Image from "next/image";
import Link from "next/link";

interface BookDetailProps {
  request: {
    subject: string;
    grade: string;
    tutoringFormat: string;
    via: string;
    preferredTimes: string;
    budget: number;
    numStudents: number;
    additionalNotes: string;
  };
}

export default function BookDetail({ request }: BookDetailProps) {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <Image
          src={"https://picsum.photos/200/200"}
          width={200}
          height={200}
          alt="tutor image"
          className="shadow-card"
        />
      </div>
      <div className="mt-5 font-primary tracking-wide text-primary text-3xl text-center">
        <h1>{request.subject}</h1>
      </div>
      {/* Detail */}
      <div className="mt-5 font-secondary font-bold text-xl">
        <p>
          Grade: {request.grade} <br />
          Tutoring via: {request.tutoringFormat} ({request.via}) <br />
          Preferred days and times: <br />
          {request.preferredTimes} <br />
          Budget: {request.budget} Baht <br />
          Group of: {request.numStudents} <br />
          Additional notes: {request.additionalNotes} <br />
        </p>
      </div>
      <div className="flex flex-col mt-5 font-primary tracking-wide text-4xl text-primary space-y-4 items-end">
        <button className="cursor-pointer font-bold py-2 px-10 rounded-4xl bg-blue-300 hover:bg-blue-300/60 w-fit">
          <Link href={"/chat"}>BOOK</Link>
        </button>
        <button className="cursor-pointer font-bold py-1 px-10 rounded-4xl border-primary hover:border-primary/80 hover:text-primary/80 border-2 w-fit">
          NEXT
        </button>
      </div>
    </>
  );
}
