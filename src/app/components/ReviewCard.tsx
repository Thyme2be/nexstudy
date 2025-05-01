import Image from "next/image";

export default function ReviewCard({ avatarUrl, text }) {
  return (
    <div className="relative bg-white text-black w-36 h-56 rounded-3xl shadow-md">
      {/* Avatar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <Image
          src={avatarUrl}
          alt="Reviewer"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </div>

      {/* Review text centered */}
      <div className="h-full flex flex-col justify-center items-center text-center px-4">
        <p className="mt-8 text-sm leading-snug break-words">{text}</p>
      </div>
    </div>
  );
}
