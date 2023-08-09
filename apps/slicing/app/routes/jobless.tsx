import { cx } from "class-variance-authority";
import { useState } from "react";

import "../styles/jobless.css";

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Discover",
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

const jobsList = [
  {
    id: 1,
    name: "Front-End Developer",
    company: "Figma",
    description: "We are looking for an experienced front-end developer to join our team.",
    skill: "Rust",
    priceRange: "$70,000 - $90,000",
  },
  {
    id: 2,
    name: "Data Scientist",
    company: "Facebook",
    description: "We are seeking a data scientist to join our team.",
    skill: "Python",
    priceRange: "$100,000 - $130,000",
  },
  {
    id: 3,
    name: "Technical Writer",
    company: "Vercel",
    description: "We are seeking a technical writer to join our team.",
    skill: "Documentation",
    priceRange: "$60,000 - $80,000",
  },
];

export default function Jobless() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-gradient-to-br from-[#0500FF] via-[#F8FB76] to-[#00FFD1]">
      <div className="top-0 flex min-h-screen w-full items-start justify-center bg-[#F6FAFF]/90">
        <div className="container mx-auto max-w-7xl p-4">
          <nav className="w-full">
            <div className="hidden justify-between md:flex">
              <span className="text-[22px] font-semibold text-black">Jobless</span>
              <ul className="flex items-center justify-center space-x-10">
                {navList.map(({ id, name }) => (
                  <li key={id}>
                    <span
                      className={cx(
                        "text-base text-black/80",
                        name === "Home" ? "font-medium" : "font-normal"
                      )}
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="rounded-md border border-black/20 px-6 py-2 font-semibold text-black">
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-between md:hidden">
              <span className="text-[22px] font-semibold text-black">Jobless</span>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="close and open nav"
              >
                {isOpen ? (
                  <img src="/assets/jobless/x.svg" alt="close" />
                ) : (
                  <img src="/assets/jobless/bar.svg" alt="bar" />
                )}
              </button>
            </div>
            {isOpen ? (
              <div className="py-4 text-black">
                <ul className="space-y-5">
                  {navList.map(({ name, id }) => (
                    <li key={id}>
                      <span
                        className={cx(
                          "text-base text-black/80",
                          name === "Home" ? "font-medium" : "font-normal"
                        )}
                      >
                        {name}
                      </span>
                    </li>
                  ))}
                  <button type="button">Sign Up</button>
                </ul>
              </div>
            ) : null}
          </nav>
          <div className="my-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-[36px] font-semibold leading-[54px] text-black md:w-[653px]">
              Get Connected to the Best Remote Jobs in Your Field
            </h1>
            <p className="mt-4 text-base leading-[32px] text-black/60 md:w-[553px]">
              Discover a wide range of remote opportunities on our platform and take control of your
              career
            </p>
            <div className="mt-10 flex space-x-5 md:space-x-10">
              <button
                type="button"
                aria-label="explore remote jobs"
                className="rounded-full bg-[#001AFF] px-4 py-3 font-semibold drop-shadow-lg"
              >
                Explore Remote Jobs
              </button>
              <button
                type="button"
                aria-label="how it works"
                className="text-base font-semibold text-[#001AFF] underline underline-offset-2"
              >
                How it works?
              </button>
            </div>
          </div>
          <div>
            <span className="text-base font-semibold text-black">Featured Jobs</span>
            <div
              className={cx(
                "mt-4 grid grid-cols-1 grid-rows-1 gap-10",
                "sm:grid-cols-2",
                "lg:grid-cols-3"
              )}
            >
              {jobsList.map((item) => (
                <div
                  key={item.id}
                  className={cx(
                    "flex flex-col items-start justify-start",
                    "rounded-lg bg-white",
                    "px-7 py-6 drop-shadow-md"
                  )}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div
                      className={cx("rounded-md p-3", item.company === "Vercel" ? "bg-black" : "")}
                    >
                      <img
                        src={` /assets/jobless/${item.company.toLowerCase()}.svg`}
                        alt="vercel"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <span className="text-lg font-semibold text-black">{item.name}</span>
                      <span className="text-sm text-black/60">{item.company}</span>
                    </div>
                  </div>
                  <p className="mb-6 mt-6 text-base leading-[30px] text-black/60 xl:w-[310px]">
                    {item.description}
                  </p>
                  <div
                    className={cx(
                      "flex w-full flex-col items-start justify-start",
                      "border-t border-t-black/[0.05] pt-6",
                      "xl:flex-row xl:items-center xl:justify-between"
                    )}
                  >
                    <span className="rounded-full bg-black/[0.07] px-5 py-2 text-sm font-semibold text-black">
                      {item.skill}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-black xl:mt-0">
                      {item.priceRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
