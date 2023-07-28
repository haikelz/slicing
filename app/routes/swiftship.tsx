import { useState } from "react";

import "../styles/swiftship.css";

const footerList = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "We understand that time is of the essence when it comes to shipping. That's why we offer fast delivery options for packages of all sizes, anywhere in the world.",
  },
  {
    id: 2,
    title: "Reliable Service",
    description:
      "We pride ourselves on our reliability. We have a team of professionals who are dedicated to ensuring that your packages are delivered on time.",
  },
  {
    id: 3,
    title: "Secure Shipping",
    description:
      "We use advanced tracking technology and secure handling techniques to ensure that your packages are delivered safely and securely.",
  },
];

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Products",
  },
  {
    id: 3,
    name: "Career",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

export default function Swiftship() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] px-6 pt-6 md:pt-14">
      <nav className="sticky top-0 flex w-full items-center justify-center bg-[#1A1A1A]/80 backdrop-blur-md">
        <div className="flex w-full max-w-6xl items-center justify-between py-6">
          <span className="text-2xl font-bold italic">SWIFTSHIP</span>
          <button
            className="z-20"
            type="button"
            aria-label="open and close navbar"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src="/assets/swiftship/x.svg" alt="x" />
            ) : (
              <img src="/assets/swiftship/bar.svg" alt="bar" />
            )}
          </button>
        </div>
        {isOpen ? (
          <div className="fixed inset-0 z-10 flex min-h-screen w-full items-center justify-center bg-[#1A1A1A]/80 text-center backdrop-blur-md">
            <ul className="space-y-10">
              {navList.map((item) => (
                <li key={item.id}>
                  <a href="#" className="text-2xl font-bold">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
      <div className="p-8"></div>
      <div className="flex w-full justify-center bg-[#1A1A1A]">
        <main className="flex w-full max-w-6xl flex-col items-center justify-center">
          <section className="flex w-full flex-col items-center justify-between md:flex-row">
            <div className="md:w-[555px]">
              <div>
                <h1 className="text-5xl font-bold leading-snug md:w-[400px] lg:w-[528px]">
                  Revolutionizing The Way You Ship, With Speed And Precision
                </h1>
                <p className="mt-4 text-lg text-white/60 md:w-[400px] lg:w-[462px]">
                  We offer fast, reliable, and secure delivery services for packages of all sizes,
                  anywhere in the world.
                </p>
              </div>
              <div className="mt-14 flex w-fit items-center justify-center space-x-5 md:space-x-10">
                <button
                  className="rounded-full bg-[#3757FF] px-5 py-3 font-semibold hover:bg-blue-700 md:px-6 md:py-4"
                  type="button"
                  aria-label="request"
                >
                  Request a Pickup
                </button>
                <button
                  className="flex items-center justify-center space-x-3 p-4"
                  type="button"
                  aria-label="track"
                >
                  <img src="/assets/swiftship/truck.svg" alt="truck" />
                  <span className="font-semibold">Track Shipment</span>
                </button>
              </div>
            </div>
            <div className="mt-14 md:mt-0">
              <img
                className="xl:h-[597.21px] xl:w-[563px]"
                src="/assets/swiftship/hero.png"
                alt="hero"
              />
            </div>
          </section>
          <div className="p-8"></div>
          <footer className="flex w-full items-center justify-center rounded-t-[2rem] bg-[#3757FF] px-16 py-12">
            <div className="flex flex-col space-y-7 md:flex-row md:space-x-20 md:space-y-0">
              {footerList.map((item) => (
                <div className="xl:w-[278.67px]" key={item.id}>
                  <span className="text-xl font-semibold text-white">{item.title}</span>
                  <p className="mt-3 text-base text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
