import Image from "next/image";
import Link from "next/link";

export default function TutorDetail() {
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
        <h1>{`Tutor's full name`}</h1>
      </div>
      {/* Detail */}
      <div className="mt-5 font-secondary font-bold text-xl">
        <p>
          Nickname: tutor nickname <br />
          Grade: year 3 <br />
          Preferred days and times for lessons: <br />
          Monday - Wednesday  10.00-12.00 o clock <br />
          Sunday 15.00 - 16.00 o clock <br />
          Cost: 100-250 Baht <br />
          Subject: CN200, SF230
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
  )
}
