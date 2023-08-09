import { cx } from "class-variance-authority";
import { useCallback, useEffect, useState } from "react";

import "../styles/holadok.css";

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Features",
  },
  {
    id: 3,
    name: "Blog",
  },
  {
    id: 4,
    name: "About Us",
  },
];

const healthcareList = [
  {
    id: 1,
    title: "Online appointment scheduling",
    description:
      "Allows users to schedule appointments with their healthcare provider through the app.",
    icon: "/assets/holadok/calendar.svg",
  },
  {
    id: 2,
    title: "Medication reminders",
    description:
      "Allows users to schedule appointments with their healthcare provider through the app.",
    icon: "/assets/holadok/bell.svg",
  },
  {
    id: 3,
    title: "Virtual consultations",
    description:
      "Allows users to schedule appointments with their healthcare provider through the app.",
    icon: "/assets/holadok/camera.svg",
  },
];

function useScroll() {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setScroll(window.pageYOffset);
  }, [setScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scroll;
}

export default function Holadok() {
  const scrollPosition = useScroll();

  return (
    <div className="flex w-full max-w-full items-center justify-center p-4 md:p-0">
      <div className="flex w-full flex-col">
        <div
          className={cx(
            "absolute z-50 hidden",
            "w-full items-center justify-center transition-all",
            "p-4",
            scrollPosition > 60 ? "sticky top-0 bg-white/80 backdrop-blur-md" : "",
            "md:flex"
          )}
        >
          <nav className="flex w-full max-w-7xl items-center justify-center">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center space-x-24">
                <div className="flex items-center justify-center space-x-3">
                  <img src="/assets/holadok/logo.svg" alt="holadok" />
                  <span className="font-bold text-[#101C45]">Holadok</span>
                </div>
                <ul className="flex space-x-10">
                  {navList.map((item) => (
                    <li key={item.id}>
                      <span
                        className={cx(
                          "text-base",
                          item.name === "Home" ? "font-semibold text-[#101C45]" : "text-black/80"
                        )}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-10">
                <button className="font-bold text-[#101C45]" type="button" aria-label="login">
                  Login
                </button>
                <button
                  className={cx(
                    "border-2 border-[#101C45]",
                    "px-4 py-2",
                    "font-bold text-[#101C45] transition-all",
                    "hover:bg-[#101C45] hover:text-white"
                  )}
                  type="button"
                  aria-label="book now"
                >
                  Book Now
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-16 flex w-full items-center justify-center px-0 md:px-4 lg:mt-0">
          <div className="flex w-full max-w-7xl items-center justify-between">
            <div className="w-[457px]">
              <h1 className="text-5xl font-medium leading-tight text-[#101C45]">
                Get the healthcare you need, when you need it.
              </h1>
              <p className="mb-7 mt-4 text-lg leading-relaxed text-[#101C45]">
                Manage all of your healthcare needs in one convenient place – from booking
                appointments to tracking your health history.
              </p>
              <button
                className="bg-[#203271] px-5 py-3 font-normal"
                type="button"
                aria-label="book an appoinment"
              >
                Book an Appoinment
              </button>
            </div>
            <div className="relative hidden md:block">
              <div className="relative flex items-end justify-end">
                <img className="relative" src="/assets/holadok/rectangle.svg" alt="rectangle" />
                <img className="absolute bottom-0" src="/assets/holadok/doctor.png" alt="doctor" />
              </div>
              <div
                className={cx(
                  "absolute left-0 top-1/4 hidden",
                  "w-[292px] -translate-x-32 rounded-lg",
                  "bg-white p-4 drop-shadow-lg",
                  "xl:block"
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center justify-center space-x-4">
                    <img src="/assets/holadok/jane-doe.svg" alt="jane doe" />
                    <span className="text-xs font-semibold text-black">Jane Doe</span>
                  </div>
                  <img src="/assets/holadok/tanda-petik.svg" alt="tanda petik" />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#100C45]">
                  “The doctor appointment app has been great for me. Scheduling appointments and
                  getting medication reminders is much easier, and I love the option for virtual
                  consultations. I&#39;d recommend this app to others.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center justify-center px-0 md:mt-0 md:px-4">
          <section className="z-10 w-full max-w-7xl bg-[#203271] p-10">
            <div
              className={cx(
                "flex flex-col items-center justify-center",
                "space-y-10",
                "md:flex-row md:space-x-10 md:space-y-0"
              )}
            >
              {healthcareList.map((item) => (
                <div key={item.id} className="flex items-start justify-center space-x-5">
                  <img src={item.icon} alt={item.title} />
                  <div>
                    <h5 className="text-lg font-bold">{item.title}</h5>
                    <p className="mt-2 font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
