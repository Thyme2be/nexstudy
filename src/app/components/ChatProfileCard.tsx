import Image from "next/image";
import React from "react";

interface ChatProfileCardProps {
  subject: string;
  onClick: () => void; // Define the onClick prop
}

const ChatProfileCard: React.FC<ChatProfileCardProps> = ({ subject, onClick }) => {
  return (
    <div
      className="px-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className=" flex gap-5 items-center cursor-pointer p-2 hover:bg-gray-400/40 hover:rounded-2xl duration-150 ">
        <div className=" cursor-pointer rounded-full overflow-hidden w-16 h-16 ring-2 ring-primary ring-offset-2 ">
          <Image
            src={"https://picsum.photos/200/200"}
            alt="profile"
            width={80}
            height={80}
          />
        </div>
        <h1 className=" font-secondary text-xl">Tutor {subject}</h1>
      </div>
    </div>
  );
};

export default ChatProfileCard;
