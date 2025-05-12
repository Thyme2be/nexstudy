import Image from "next/image";
import Link from "next/link";

interface TutorDetailProps {
  tutor: {
    fullName: string,
    nickname: string;
    grade: string;
    preferredDays: string;
    cost: number;
    subject: string;
  };
}

export default function TutorDetail({ tutor }: TutorDetailProps) {
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
        <h1>{tutor.fullName}</h1>
      </div>
      {/* Detail */}
      <div className="mt-5 font-secondary font-bold text-xl">
        <p>
          Nickname: {tutor.nickname} <br />
          Grade: {tutor.grade} <br />
          Preferred days and times for lessons: <br />
          {tutor.preferredDays} <br />
          Cost: {tutor.cost} Baht <br />
          Subject: {tutor.subject}
        </p>
      </div>
      <div className="flex flex-col mt-5 font-primary tracking-wide text-4xl text-primary space-y-4 items-end">
        <button className="cursor-pointer font-bold py-2 px-15 rounded-4xl bg-blue-300 hover:bg-blue-300/60 w-fit">
          <Link href={"/chat"}>CHAT</Link>
        </button>
        <button className="cursor-pointer font-bold py-1 px-15 rounded-4xl border-primary hover:border-primary/80 hover:text-primary/80 border-2 w-fit">
          NEXT
        </button>
        <Link href={"/review"}>
          <button className="cursor-pointer font-bold py-1 px-11 rounded-4xl border-primary hover:border-primary/80 hover:text-primary/80 border-2 w-fit">
            REVIEW
          </button>
        </Link>
      </div>
    </>
  );
}
