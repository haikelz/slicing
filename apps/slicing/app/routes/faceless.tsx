import { cx } from "class-variance-authority";
import { useState } from "react";

import "../styles/faceless.css";

export default function Faceless() {
  const [tab, setTab] = useState<"LOGIN" | "REGISTER">("LOGIN");

  return (
    <div className="flex w-full max-w-full flex-col items-start lg:flex-row">
      <div className="flex min-h-screen w-full items-start justify-center bg-white px-12 py-20 lg:w-1/2">
        <div>
          <div className="w-fit rounded-full p-2 shadow-lg">
            <img src="/assets/faceless/kodinger-logo.svg" alt="logo" />
          </div>
          <div className="mt-10">
            <h1 className="text-2xl text-black">
              Welcome to <span className="font-bold text-black">Kodinger</span>
            </h1>
            <p className="text-[14px] leading-6 text-black/60">
              Before you get started, you must login or register if you don&#39;t already have an
              account.
            </p>
          </div>
          <div className="mt-6">
            <div className="space-x-5">
              <button type="button" aria-label="login tab" onClick={() => setTab("LOGIN")}>
                <span
                  className={cx(
                    "text-[14px] font-semibold leading-6 text-black",
                    tab === "LOGIN"
                      ? "underline decoration-[#228FA6] decoration-2 underline-offset-8"
                      : ""
                  )}
                >
                  LOGIN
                </span>
              </button>
              <button type="button" aria-label="register tab" onClick={() => setTab("REGISTER")}>
                <span
                  className={cx(
                    "font-semibold text-black/40",
                    tab === "REGISTER"
                      ? "underline decoration-[#228FA6] decoration-2 underline-offset-8"
                      : ""
                  )}
                >
                  REGISTER
                </span>
              </button>
            </div>
            <div className="mt-7 flex w-full flex-col space-y-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-semibold text-black/60">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="h-10 rounded-sm bg-[#F2F2F2] px-4 text-black"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex w-full items-center justify-between">
                  <label htmlFor="password" className="mb-1 font-semibold text-black/60">
                    Password
                  </label>
                  {tab === "LOGIN" ? (
                    <span className="text-[14px] font-semibold leading-6 text-[#228FA6] underline">
                      Forgot Password?
                    </span>
                  ) : null}
                </div>
                <input
                  type="password"
                  name="password"
                  className="h-10 rounded-sm bg-[#F2F2F2] px-4 text-black"
                />
              </div>
              <button
                className="w-full rounded-[0.250rem] bg-[#228FA6] px-3 py-2.5 text-[14px] font-semibold leading-6 shadow-lg"
                type="button"
                aria-label="sign in"
              >
                {tab === "LOGIN" ? "Sign In" : "Register"}
              </button>
            </div>
            <div className="mt-14 flex w-full items-center justify-center">
              <span className="text-center text-[14px] font-semibold leading-6 text-black/40">
                @Kodinger. Design by Nauval
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden min-h-screen w-full bg-faceless bg-cover bg-no-repeat md:block"></div>
    </div>
  );
}
