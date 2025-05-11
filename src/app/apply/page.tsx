import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className=" flex w-screen h-screen ">
      {/* <!/Intoduction */}
      <div className=" bg-white w-1/4 flex flex-col p-10 h-full ">
        <div className="text-primary font-bold text-5xl font-primary tracking-wide ">
          WELCOME!
        </div>
        <div className="text-primary font-bold text-4xl font-primary tracking-wide ">
          FIRST THING FIRST...
        </div>
        <div>Create a profile to be a Tutor.</div>
        <Image
          src="/cartoon_book.png"
          alt="book"
          width={200}
          height={200}
          className=""
        />
        <Image src="/cartoon.png" alt="cartoon" width={800} height={800} />
      </div>

      <div className=" bg-blue-100 w-2/3 h-auto m-10 p-2 shadow-[-10px_10px_5px_rgba(0,0,0,0.25)] ">
        <div className="flex flex-col items-center p-2">
          {/* logo and change btn */}
          <div className=" flex gap-5 items-center ">
            <div className="w-24 h-24 rounded-full bg-white p-1 mb-2 ">
              <Image
                src="/avatar2.jpg"
                alt="Avatar2"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <p className="text-sm text-center border-2 border-black rounded-full p-2">
              CHANGE
            </p>
          </div>
        </div>

        {/* Form */}
        <div className=" w-full h-auto flex ">
          {/* Leftside */}
          <div className=" w-1/2 pr-4">
            {" "}
            {/* ปรับ width และเพิ่ม padding ขวา */}
            {/* Name Field */}
            <div className="m-4 mb-4">
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Name
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>
            {/* Nickname Field */}
            <div className="m-4 mb-4">
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Nickname
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nickname"
                  className=" pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>
            {/* Grade Field */}
            <div className="m-4 mb-4">
              {" "}
              {/* เพิ่ม margin-bottom */}
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Grade
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Grade"
                  className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>
            {/* Cost Field */}
            <div className="m-4 mb-4">
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Cost
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cost eg. 200 - 300"
                  className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>
            {/* Subject Field */}
            <div className="m-4 mb-4">
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Subjects to be tutor
              </h1>
              <input placeholder="Subjects to be tutor" className="pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"></input>
            </div>
          </div>

          {/* Righside */}
          <div className="relative w-1/2 pl-4">
            {/* Tutor Experience Field */}
            <div className="mr-6 mb-4 mt-4">
              <h1 className="text-primary font-bold font-primary tracking-wide">
                Tutor Experience
              </h1>
              <div>
                <textarea
                  placeholder="Tutor Experience..."
                  className="p-2 h-58 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                />
              </div>
            </div>

            {/* date and time Field */}
            <div className="mr-6 mb-4 mt-4">
              {" "}
              {/* เพิ่ม margin-bottom */}
              <h1 className="text-primary font-bold text-base font-primary tracking-wide">
                Convenient Day and Time
              </h1>
              <input
                placeholder="Convenient Day and Time"
                className="input pl-2 pr-4 py-3 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
              />
            </div>

            {/* Apply Button */}
            <div className=" flex justify-end m-2 mt-12 ">
              <button className=" cursor-pointer duration-200 hover:scale-115 ease-in-out bottom-3 right-5 bg-primary hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                <Link href="/all">Apply</Link>
              </button>
            </div>
            <div className=" m-2 text-end ">
              <p>We are very glad that you have applied to be a tutor.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
