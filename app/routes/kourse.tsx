import { cx } from "class-variance-authority";

import "../styles/kourse.css";

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Courses",
  },
  {
    id: 3,
    name: "Post a Job",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

export default function Kourse() {
  return (
    <div
      className={cx(
        "flex min-h-screen w-full items-start justify-center",
        "bg-gradient-to-b from-[#192653] to-[#131D41]"
      )}
    >
      <div className="container mt-10 max-w-6xl">
        <nav className="flex items-center justify-between">
          <span className="font-sanspro text-[22px] font-semibold">Kourse</span>
          <ul className="flex items-center justify-center space-x-6">
            {navList.map((item) => (
              <li key={item.id}>
                <span
                  className={`font-sanspro font-semibold ${
                    item.name === "Home" ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          <button
            className="rounded-md bg-white/10 px-5 py-2 font-sanspro font-semibold"
            type="button"
            aria-label="sign up"
          >
            Sign Up
          </button>
        </nav>
        <div className="my-32 w-full">
          <div className="mb-24 flex w-full items-center justify-between">
            <div className="w-[653px]">
              <h1 className="text-[54px]">Elevate Your Career to the Next Level</h1>
              <p className="mb-10 mt-5 w-[553px] text-base text-white/60">
                Get expert-led instruction from experienced professionals in Industry and gain
                valuable skills and knowledge that can be applied to your career or personal life.
              </p>
              <div className="flex w-fit items-center justify-center space-x-8">
                <button
                  className="rounded-full bg-[#FF5C00] px-5 py-2.5 font-semibold"
                  type="button"
                  aria-label="find a course"
                >
                  Find a Course
                </button>
                <button
                  className="text-[#FF5C00] underline decoration-[#FF5C00] underline-offset-2"
                  type="button"
                  aria-label="learn more"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="absolute z-20">
                <img
                  src="/assets/kourse/front-end-development-1.png"
                  className="rounded-t-lg"
                  alt=""
                />
                <div className="rounded-b-lg bg-white p-6">
                  <span className="rounded-full bg-black/10 px-2 py-1 text-xs font-semibold text-black">
                    Web Development
                  </span>
                  <h3 className="my-2 text-[22px] font-semibold text-black">
                    Front End Development
                  </h3>
                  <span className="text-2xl font-semibold text-[#FF5C00]">$599</span>
                  <div className="my-4 h-[1px] w-full bg-gray-200"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-black/60">
                      13h 18min • 18 Lessons
                    </span>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm font-semibold text-black">View Details</span>
                      <img src="/assets/kourse/arrow-right.svg" alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 translate-x-20">
                <img
                  src="/assets/kourse/front-end-development-1.png"
                  className="h-[203px] rounded-t-lg"
                  alt=""
                />
                <div className="rounded-b-lg bg-white p-6">
                  <span className="rounded-full bg-black/10 px-2 py-1 text-xs font-semibold text-black">
                    Web Development
                  </span>
                  <h3 className="my-2 text-[22px] font-semibold text-black">
                    Front End Development
                  </h3>
                  <span className="text-2xl font-semibold text-[#FF5C00]">$599</span>
                  <div className="my-4 h-[1px] w-full bg-gray-200"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-black/60">
                      13h 18min • 18 Lessons
                    </span>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm font-semibold text-black">View Details</span>
                      <img src="/assets/kourse/arrow-right.svg" alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative translate-x-32">
                <img
                  src="/assets/kourse/front-end-development-1.png"
                  className="h-[168px] w-full rounded-t-lg"
                  alt=""
                />
                <div className="rounded-b-lg bg-white p-6">
                  <span className="rounded-full bg-black/10 px-2 py-1 text-xs font-semibold text-black">
                    Web Development
                  </span>
                  <h3 className="my-2 text-[22px] font-semibold text-black">
                    Front End Development
                  </h3>
                  <span className="text-2xl font-semibold text-[#FF5C00]">$599</span>
                  <div className="my-4 h-[1px] w-full bg-gray-200"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-black/60">
                      13h 18min • 18 Lessons
                    </span>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm font-semibold text-black">View Details</span>
                      <img src="/assets/kourse/arrow-right.svg" alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full space-x-4">
            <div className="flex items-start justify-center space-x-4">
              <img src="/assets/kourse/process.svg" className="h-6 w-6" alt="self paced learning" />
              <div>
                <span className="text-lg font-semibold">Self-Paced Learning</span>
                <p className="mt-4 text-white/60">
                  This feature allows learners to progress through the course at their own pace,
                  rather than being tied to a fixed schedule. This can be especially useful for
                  learners who have busy schedules or who prefer to learn at their own speed.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-start justify-center space-x-4">
                <img src="/assets/kourse/chat.svg" className="h-6 w-6" alt="instructor support" />
                <div>
                  <span className="text-lg font-semibold">Instructor Support</span>
                  <p className="mt-4 text-white/60">
                    Providing learners with access to the instructor can be a valuable feature, as
                    it allows them to ask questions and get feedback in real-time. This could be in
                    the form of office hours, live Q&A sessions, or one-on-one consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
