import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface SubjectCardProps {
  subject: string;
  onEdit: () => void; // Add onEdit prop
}

export default function SubjectCard({ subject, onEdit }: SubjectCardProps) {
  {
    return (
      <div className=" relative bg-blue-100 w-full h-full flex p-4 rounded-2xl mt-1">
        <div className=" flex w-full justify-between  ">
          <div className=" h-full flex w-5/6 gap-10 ">
            <Image
              src={"https://picsum.photos/200/200"}
              alt="textbook"
              width={200}
              height={200}
              className="h-auto w-1/2  "
            />
            <h1 className=" text-primary font-primary font-bold text-6xl mt-3 items-center">
              {subject}
            </h1>
          </div>
          <BsPencilSquare
            onClick={onEdit}
            className=" text-4xl cursor-pointer hover:scale-125 duration-100 ease-in-out"
          />
        </div>
        <Link href={"/chat"}>
          <button className=" absolute right-4 bottom-4 cursor-pointer duration-200 hover:scale-115 ease-in-out bg-primary hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            CONFIRM
          </button>
        </Link>
      </div>
    );
  }
}
