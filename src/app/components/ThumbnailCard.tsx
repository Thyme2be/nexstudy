import Image from "next/image";

interface ThumbnailCardProps {
  subject: string;
  numStudents: number;
}

export default function ThumbnailCard({
  subject,
  numStudents,
}: ThumbnailCardProps) {
  return (
      <div className="cursor-pointer hover:-translate-y-2 ease-in-out duration-150 bg-gray-100 p-4 rounded shadow-card text-center w-40">
        <Image
          src={"https://picsum.photos/200/200"}
          width={200}
          height={200}
          alt="tutor image"
        />
        <h2 className="mt-2 text-xl font-bold">{subject}</h2>
        <p className="text-gray-600">Group of: {numStudents}</p>
      </div>
  );
}
