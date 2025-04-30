import Image from "next/image";
import { IoSend } from "react-icons/io5";
import Navsidebar from "../components/NavSideBar";

export default function Page() {
  return (
    <main className=" h-auto p-5 bg-secondary flex gap-3 ">
      <Navsidebar />

      {/* Middle and Right */}
      <section className=" w-full h-auto flex gap-5 ">
        {/* Middle */}
        <section className=" flex-1/3 h-auto bg-white shadow-card rounded-2xl ">
          {/* Sort friend/tutor */}
          <div className=" w-full flex gap-5 py-3 px-5 text-xl ">
            <h1 className=" hover:underline cursor-pointer ">All</h1>
            <h1 className=" hover:underline cursor-pointer ">Friends</h1>
            <h1 className=" hover:underline cursor-pointer ">Tutor</h1>
          </div>
          {/* Profile */}
          <div className=" pt-5 px-5 flex flex-col gap-5 ">
            <div className=" flex gap-5 items-center cursor-pointer p-2 hover:bg-gray-400/40 hover:rounded-2xl duration-150 ">
              <div className=" cursor-pointer rounded-full overflow-hidden w-16 h-16 ring-2 ring-primary ring-offset-2 ">
                <Image
                  src={"https://picsum.photos/200/200"}
                  alt="profile"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className=" font-secondary text-xl">Test</h1>
            </div>
          </div>
        </section>

        {/* Right */}
        <section className=" relative flex-2/3 h-auto bg-white shadow-card rounded-2xl p-5 ">
          {/* Chat header */}
          <div className=" h-20 w-full ">
            <div className=" flex gap-5 items-center p-2 ">
              <div className=" cursor-pointer rounded-full overflow-hidden w-16 h-16 ring-2 ring-primary ring-offset-2 ">
                <Image
                  src={"https://picsum.photos/200/200"}
                  alt="profile"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className=" font-secondary text-xl">Test</h1>
            </div>
          </div>
          <div className="border-t border-black my-5 " />

          {/* Chat Message Received */}
          <div className=" bg-gray-200 w-fit p-3 text-md rounded-3xl ">
            <h2>Test received message</h2>
          </div>

          {/* Chat Message Sent */}
          <div className=" float-end bg-blue-300 max-w-1/2 p-5 text-md rounded-3xl flex flex-col gap-3 items-center ">
            <h2 className=" text-center text-primary underline ">
              Test status message
            </h2>
            <p>
              Appointment date: Monday, April 23, 2025 <br />
              Time: 10:00-11:00 <br />
              Total tutoring time: 1 hour <br />
              Tutoring via: Online (Zoom) <br />
              Tutoring fee: 250 baht <br />
              Number of students: 3-4 people <br />
              File: L01,L02,L04 <br />
              Note: -
            </p>
            <button className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer ">
              Confirm
            </button>
            <button className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer ">
              Review
            </button>
            <button className=" p-2 w-3/5 bg-secondary hover:bg-secondary/80 rounded-2xl cursor-pointer ">
              Cancel
            </button>
          </div>

          {/* Chat textarea */}

          <textarea
            name="text-to-sent"
            id="text-to-sent"
            placeholder="Type..."
            className=" relative bg-blue-300 rounded-2xl w-full p-5 mt-5 resize-none text-xl "
          >
          </textarea>
          <IoSend className=" cursor-pointer hover:scale-125 duration-100 absolute bottom-10 right-8 text-2xl text-primary " />
        </section>
      </section>
    </main>
  );
}
