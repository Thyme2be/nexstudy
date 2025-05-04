import Image from "next/image";
import Link from "next/link";

export default function Navsidebar() {
  return (
    <section className=" flex flex-col p-4 bg-white shadow-card h-auto w-1/6 rounded-2xl text-primary font-primary tracking-wide">
      <nav className=" flex flex-col items-center ">
        <div className="w-full h-10 flex justify-center gap-2">
          <Image
            width={40}
            height={40}
            src="/nexstudy-logo.png"
            alt="nexstudy logo"
          />
          <h1 className="font-bold text-4xl mt-1">NEXSTUDY</h1>
        </div>

        {/* logo */}
        <div className="mt-10 flex flex-col gap-16">
          <div>
            <Link href="/home">
              <Image
                width={50}
                height={50}
                src="/home.png"
                alt="home"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </Link>
          </div>
          <div>
            <Link href="/chat">
              <Image
                width={50}
                height={50}
                src="/chat.png"
                alt="chat"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </Link>
          </div>
          <div>
            <Link href="/findtutor">
              <Image
                width={50}
                height={50}
                src="/add.png"
                alt="add"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                width={50}
                height={50}
                src="/setting.png"
                alt="setting"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Leave button at the bottom */}
      <div className=" mt-auto flex gap-2 hover:scale-125 hover:translate-x-6 ease-in-out duration-150 ">
        <Link href="/">
          <Image
            src="/exit.png"
            alt="leave logo"
            width={30}
            height={30}
            className="cursor-pointer "
          />
        </Link>
        <h1 className=" mt-1 text-2xl ">Leave</h1>
      </div>
    </section>
  );
}
