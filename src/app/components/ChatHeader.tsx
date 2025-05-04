import Image from "next/image";

export default function ChatHeader({ subject }: { subject: string }) {
  return (
    <div className=" flex gap-5 items-center p-2 ">
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
  );
}
