import { cx } from "class-variance-authority";

import "../styles/digidaw.css";

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Discover Elements",
  },
  {
    id: 3,
    name: "Pricing",
  },
  { id: 4, name: "Contact Us" },
];

export default function Digidaw() {
  return (
    <div className=" gradient flex min-h-screen w-full items-center justify-center p-4">
      <div className="container mx-auto">
        <nav className="mt-10 hidden w-full items-center justify-between md:flex">
          <div className="flex items-center justify-center space-x-24">
            <span className="text-[22px] font-semibold">digidaw</span>
            <ul className="flex space-x-12">
              {navList.map((item) => (
                <li key={item.id}>
                  <span
                    className={cx(
                      "text-base font-semibold",
                      item.name === "Home" ? "text-white" : "text-white/60"
                    )}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="rounded-full bg-white px-6 py-3 font-medium text-black"
            type="button"
            aria-label="sign in"
          >
            Sign In
          </button>
        </nav>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <h1 className="text-[56px] font-light">
              Experience the power of <span className="font-semibold">professional UI kits</span>
            </h1>
            <p className="mt-5 text-lg md:w-[457px]">
              Choose from a wide range of styles and themes to find the perfect fit for your project
            </p>
            <button
              className="mb-20 mt-10 flex items-center justify-center space-x-4 rounded-full bg-[#FFB802] px-6 py-3"
              type="button"
              aria-label="discover"
            >
              <span className="text-base font-semibold text-black">Discover</span>
              <img src="/assets/digidaw/arrow-right.svg" alt="arrow right" />
            </button>
            <div className="flex items-center justify-center space-x-6 md:items-start md:justify-start">
              <div className="rounded-lg bg-gradient-to-b from-white/10 to-white/0 p-3">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-lg bg-white/10">
                  <img
                    className="h-[30px] w-[30px]"
                    src="/assets/digidaw/blocks.svg"
                    alt="Blocks"
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-medium">Unlimited Blocks</span>
                <p className="mt-4 text-white/60 md:w-[362px]">
                  Having access to unlimited blocks means that users can create a wide range of
                  designs without running out of elements to work with.
                </p>
              </div>
            </div>
          </div>
          <img src="/assets/digidaw/hero.svg" alt="Hero" />
        </div>
      </div>
    </div>
  );
}
