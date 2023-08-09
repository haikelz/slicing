import { cx } from "class-variance-authority";

import "../styles/enlighten.css";

export default function Enlighten() {
  return (
    <div className="flex w-full items-center justify-center">
      <main className="w-full max-w-[85rem]">
        <section className="flex w-full items-start justify-center">
          <div className="flex w-full flex-col items-start justify-center p-4 lg:p-20">
            <span className="text-xl font-semibold italic text-[#0A1B59]">Enlighten.</span>
            <div className="mt-40 flex flex-col items-center justify-center">
              <div>
                <span
                  className={cx(
                    "w-fit rounded-full bg-[#113FE2]/10",
                    "px-5 py-1.5 text-sm font-bold",
                    "tracking-widest text-[#113FE2]"
                  )}
                >
                  COMING SOON
                </span>
                <h1 className="my-3 text-[44px] font-bold text-[#0A1B59] xl:w-[457px]">
                  Get your dancing shoes ready
                </h1>
                <p className="text-base leading-[32px] text-[#0A1B59]/60 xl:w-[457px]">
                  We&#39;re putting the finishing touches on our website and getting ready to
                  launch. Sign up for updates and be the first to know when we go live.
                </p>
                <div className="mb-4 mt-8 flex items-center justify-start space-x-4">
                  <input
                    className={cx(
                      "rounded-md border-2 border-[#0A1B59]/20 px-5 py-3",
                      "placeholder:text-[#0A1B59]/60",
                      "focus:border-blue-500 focus:outline-none"
                    )}
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <button
                    className={cx(
                      "rounded-md bg-[#113FE2] px-5 py-3 hover:bg-blue-800",
                      "focus:ring-2 focus:ring-blue-300"
                    )}
                    type="button"
                    aria-label="invite me"
                  >
                    Invite Me
                  </button>
                </div>
                <p className="text-sm leading-[24px] text-[#0A1B59]/60 xl:w-[541px]">
                  Sign up for updates to be the first to know when we launch. No spam, just
                  important information and exclusive offers.
                </p>
              </div>
            </div>
          </div>
          <img
            className="hidden h-screen w-full lg:block"
            src="/assets/enlighten/hero.png"
            alt="hero"
          />
        </section>
      </main>
    </div>
  );
}
