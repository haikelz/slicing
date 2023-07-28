import { cx } from "class-variance-authority";

import "../styles/priced.css";

const basicFeaturesList = [
  {
    id: 1,
    name: "10 GB Storage",
    isChecklist: true,
  },
  {
    id: 2,
    name: "Basic file collaboration",
    isChecklist: true,
  },
  {
    id: 3,
    name: "Mobile app access",
    isChecklist: true,
  },
  {
    id: 4,
    name: "File synchronization across devices",
    isChecklist: true,
  },
  {
    id: 5,
    name: "Support for common file types",
    isChecklist: true,
  },
  {
    id: 6,
    name: "Automatic file backup",
    isChecklist: false,
  },
  {
    id: 7,
    name: "Advanced security features",
    isChecklist: false,
  },
];

const professionalFeaturesList = [
  {
    id: 1,
    name: "100 GB Storage",
    isChecklist: true,
  },
  {
    id: 2,
    name: "Advanced file collaboration",
    isChecklist: true,
  },
  {
    id: 3,
    name: "Mobile app access",
    isChecklist: true,
  },
  {
    id: 4,
    name: "File synchronization across devices",
    isChecklist: true,
  },
  {
    id: 5,
    name: "Support for common file types",
    isChecklist: true,
  },
  {
    id: 6,
    name: "Automatic file backup",
    isChecklist: true,
  },
  {
    id: 7,
    name: "Advanced security features",
    isChecklist: true,
  },
  {
    id: 8,
    name: "Purchase additional features",
    isChecklist: true,
  },
];

const customFeaturesList = [
  {
    id: 1,
    name: "Customizable storage capacity",
    isChecklist: true,
  },
  {
    id: 2,
    name: "Advanced file collaboration",
    isChecklist: true,
  },
  {
    id: 3,
    name: "Mobile app access",
    isChecklist: true,
  },
  {
    id: 4,
    name: "File synchronization across devices",
    isChecklist: true,
  },
  {
    id: 5,
    name: "Support for common file types",
    isChecklist: true,
  },
  {
    id: 6,
    name: "Automatic file backup",
    isChecklist: true,
  },
  {
    id: 7,
    name: "Advanced security features",
    isChecklist: true,
  },
  {
    id: 8,
    name: "Customizable features",
    isChecklist: true,
  },
  {
    id: 9,
    name: "Purchase additional features",
    isChecklist: true,
  },
];

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Product",
  },
  {
    id: 3,
    name: "Pricing",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

export default function Priced() {
  return (
    <div className="background flex min-h-screen w-full items-center justify-center">
      <div className="container mx-auto mt-10 max-w-7xl">
        <nav className="flex w-full items-center justify-between p-4">
          <span className="text-lg font-bold italic">Strawrage</span>
          <ul className="hidden items-center justify-center space-x-14 md:flex">
            {navList.map((item) => (
              <li
                key={item.id}
                className={cx(
                  "text-base text-white/60",
                  item.name === "Pricing" ? "font-bold" : "font-medium"
                )}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="sign up"
            className="rounded-lg bg-[#160E4B] px-5 py-2 text-base font-bold"
          >
            Sign Up
          </button>
        </nav>
        <div className="p-4">
          <section className="mt-24 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold md:w-[617px]">
              <span className="underline">Secure and Reliable</span> Cloud Storage for Your Data
            </h1>
            <p className="mt-4 text-base font-medium">
              Scalable storage solutions for businesses of all sizes
            </p>
          </section>
          <section className="mt-20">
            <div className="grid grid-cols-1 grid-rows-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-full rounded-b-lg rounded-tl-lg bg-white p-7 drop-shadow-md lg:h-fit">
                <span className="text-base font-bold text-black">Basic</span>
                <div className="space-x-2">
                  <span className="text-[40px] font-bold leading-[52px] text-black">$15</span>
                  <span className="text-sm font-bold text-black/60">/month</span>
                </div>
                <p className="2ext-sm mt-3 text-black/60">
                  A budget-friendly option for individuals and small businesses.
                </p>
                <button
                  type="button"
                  aria-label="get started"
                  className="my-6 w-full rounded-md bg-[#7C67FE] py-3 text-sm font-medium"
                >
                  Get Started
                </button>
                <div>
                  <span className="text-sm font-medium text-black/60">Features</span>
                  <ul className="mt-2 space-y-3">
                    {basicFeaturesList.map((item) => (
                      <li key={item.id} className="flex items-center justify-start space-x-2">
                        <img
                          src={
                            item.isChecklist
                              ? "/assets/priced/checklist.svg"
                              : "/assets/priced/wrong-checklist.svg"
                          }
                          alt="checklist"
                        />
                        <span className="text-base font-medium text-black/60">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-full rounded-lg bg-white drop-shadow-md lg:h-fit lg:-translate-y-6">
                <div className="rounded-t-lg bg-[#160E4B] py-1.5 text-center text-[10px] font-bold leading-[22px] text-white">
                  <span className="uppercase tracking-widest">Recomended</span>
                </div>
                <div className="p-7">
                  <span className="text-base font-bold text-black">Professional</span>
                  <div className="space-x-2">
                    <span className="text-[40px] font-bold leading-[52px] text-black">$5</span>
                    <span className="text-sm font-bold text-black/60">/month</span>
                  </div>
                  <p className="mt-32text-sm text-black/60">
                    A comprehensive option for businesses with more advanced needs.
                  </p>
                  <button
                    type="button"
                    aria-label="get started"
                    className="my-6 w-full rounded-md bg-[#7C67FE] py-3 text-sm font-medium"
                  >
                    Get Started
                  </button>
                  <div>
                    <span className="text-sm font-medium text-black/60">Features</span>
                    <ul className="mt-2 space-y-3">
                      {professionalFeaturesList.map((item) => (
                        <li key={item.id} className="flex items-center justify-start space-x-2">
                          <img
                            src={
                              item.isChecklist
                                ? "/assets/priced/checklist.svg"
                                : "/assets/priced/wrong-checklist.svg"
                            }
                            alt="checklist"
                          />
                          <span className="text-base font-medium text-black/60">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h-full rounded-b-lg rounded-tr-lg bg-white p-7 drop-shadow-md lg:h-fit">
                <span className="text-base font-bold text-black">Enterprise</span>
                <div className="space-x-2">
                  <span className="text-[40px] font-bold leading-[52px] text-black">Custom</span>
                </div>
                <p className="mt-2 text-sm text-black/60">
                  A customizable plan for large organizations with specific needs.
                </p>
                <button
                  type="button"
                  aria-label="get started"
                  className="my-6 w-full rounded-md bg-[#7C67FE] py-3 text-sm font-medium"
                >
                  Get Started
                </button>
                <div>
                  <span className="text-sm font-medium text-black/60">Features</span>
                  <ul className="mt-2 space-y-3">
                    {customFeaturesList.map((item) => (
                      <li key={item.id} className="flex items-center justify-start space-x-2">
                        <img
                          src={
                            item.isChecklist
                              ? "/assets/priced/checklist.svg"
                              : "/assets/priced/wrong-checklist.svg"
                          }
                          alt="checklist"
                        />
                        <span className="text-base font-medium text-black/60">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
