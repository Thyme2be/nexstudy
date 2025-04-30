import DynamicCarousel from "@/app/components/DynamicCarousel";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function Page() {
  const tutors = [
    { name: "John Doe", subject: "Math" },
    { name: "Paul Johnson", subject: "History" },
    { name: "Paul Johnson", subject: "History" },
    { name: "Jane Smith", subject: "Science" },
    { name: "Emily Davis", subject: "English" },
    { name: "Emily Davis", subject: "English" },
    { name: "Jane Smith", subject: "Science" },
    { name: "John Doe", subject: "Math" },
  ];

  return (
    <main className="w-screen h-auto bg-secondary p-5 flex ">
      {/* Navbar on the left */}
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
              <Image
                width={50}
                height={50}
                src="/home.png"
                alt="home"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                src="/chat.png"
                alt="chat"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                src="/add.png"
                alt="add"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                src="/setting.png"
                alt="setting"
                className="cursor-pointer hover:scale-150 ease-in-out duration-150"
              />
            </div>
          </div>
        </nav>

        {/* Leave button at the bottom */}
        <div className=" cursor-pointer mt-auto flex gap-2 hover:scale-125 hover:translate-x-6 ease-in-out duration-150 ">
          <Image
            src="/exit.png"
            alt="leave logo"
            width={30}
            height={30}
            className="cursor-pointer "
          />
          <h1 className=" mt-1 text-2xl ">Leave</h1>
        </div>
      </section>

      {/*Right-hand side*/}
      <section className=" flex flex-col w-full h-full px-10 gap-3 ">
        {/* Header */}
        <header className=" w-full h-20 flex items-center justify-between ">
          {/* Search bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className=" shadow-lg w-full pl-12 pr-4 py-4 text-xl rounded-lg bg-white text-black focus:outline-none"
            />
            <CiSearch className=" text-primary absolute top-1/2 left-3 transform -translate-y-1/2 text-3xl" />
          </div>

          {/* Profile */}
          <div className=" cursor-pointer rounded-full overflow-hidden w-16 h-16 ring-2 ring-primary ring-offset-2 ">
            <Image
              src={"https://picsum.photos/200/200"}
              alt="profile"
              width={100}
              height={100}
            />
          </div>
        </header>

        {/* Hero  */}
        <section className="bg-gradient-to-r from-[#AFE0FF] via-[#115D8C] to-[#53AEE6] text-white w-full gap-3 h-50 rounded-xl shadow-card flex place-content-evenly ">
          <div className=" w-65 mt-2 ">
            <Image
              src="/book.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl font-primary tracking-wider">
              HI, STUDENT
            </h1>
            <p className="font-secondary text-xl text-center">
              The NEXSTUDY serves as a welcoming home knowledge <br />
              seekers and avid readers alike
            </p>
          </div>
          <div className=" w-65">
            <Image
              src="/book2.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />{" "}
          </div>
        </section>

        <section className=" w-full h-auto flex mt-2 gap-5 ">
          {/* Tutor Zone */}
          <div className=" bg-white flex-1/2 h-auto rounded-2xl shadow-card ">

            {/* Matching Label and view all */}
            <div className=" flex justify-between w-full h-fit mt-5 px-5 items-center ">
              <h1 className=" text-4xl text-primary font-primary  ">
                TUTOR MATCHING
              </h1>
              <a href="#" className=" text-lg hover:underline ">
                View All
              </a>
            </div>
            <div className=" h-auto px-5 flex ">
              <DynamicCarousel items={tutors} /> {/* Pass tutors data */}
            </div>

            {/* Tutor Label and view all */}
            <div className=" mt-5 flex justify-between w-full h-fit px-5 items-center ">
              <h1 className=" text-4xl text-primary font-primary ">TUTORS</h1>
              <a href="#" className=" text-lg hover:underline ">
                View All
              </a>
            </div>
            <div className=" h-auto px-5 flex ">
              <DynamicCarousel items={tutors} /> {/* Pass tutors data */}
            </div>
          </div>

          {/* Apply */}
          <aside className=" bg-white w-1/5 h-auto shadow-card rounded-2xl gap-5 p-5 flex flex-col justify-center items-center ">
            <div className=" rounded-2xl w-full h-48 bg-[url(../../public/becometutor.jpg)] bg-cover bg-bottom "></div>
            <h1 className=" font-secondary text-primary text-2xl text-center ">
              Ready to make a difference and earn at the same time? Become a
              tutor!
            </h1>
            <button
              type="button"
              className=" cursor-pointer hover:shadow-button duration-150 ease-in-out px-12 py-3 bg-primary text-2xl text-white font-primary tracking-wider "
            >
              CLICK HERE!
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}
