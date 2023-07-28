import { cx } from "class-variance-authority";
import { useState } from "react";

import "../styles/nowted-hero.css";

export default function NowtedHero() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cx(
        "flex min-h-screen w-full items-start justify-center",
        "bg-[#181818] bg-[url('/assets/nowted-hero/radial-gradient.svg')]",
        "bg-cover bg-center bg-no-repeat p-4"
      )}
    >
      <div className="container flex max-w-6xl flex-col items-center justify-center">
        <nav className="mt-10 flex w-full items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <img src="/assets/nowted-hero/nowted.svg" alt="nowted logo" />
            <ul className="hidden space-x-8 text-base md:flex">
              <li>
                <span className="font-medium">Home</span>
              </li>
              <li>
                <span>Product</span>
              </li>
              <li>
                <span>Support</span>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
            <button className="hidden rounded-sm bg-white/5 px-6 py-3 font-bold md:block">
              Login
            </button>
            <button className="block md:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isOpen ? (
          <ul className="mt-4 flex w-full flex-col space-y-3 text-base md:hidden">
            <li>
              <span className="font-medium">Home</span>
            </li>
            <li>
              <span>Product</span>
            </li>
            <li>
              <span>Support</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
        ) : null}
        <div className="mt-32 flex w-full flex-col items-center justify-center text-center">
          <h1 className="text-[40px] lg:w-[922px]">
            Boost your productivity with our <span className="font-medium">streamlined</span>{" "}
            <span className="font-medium">note-taking</span> solution
          </h1>
          <p className="my-6 text-lg text-white/60 lg:w-[556px]">
            Effortlessly access your notes from any device with our convenient cloud-based solution.
          </p>
          <button
            className={cx(
              "flex items-center justify-center",
              "space-x-3 rounded-sm bg-[#3A3AF4]",
              "px-8 py-4",
              "font-semibold transition-all",
              "hover:bg-blue-700"
            )}
          >
            <span>Try for Free</span>
            <img src="/assets/nowted-hero/arrow-right.svg" alt="arrow right" />
          </button>
          <img className="my-24 w-full" src="/assets/nowted-hero/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
