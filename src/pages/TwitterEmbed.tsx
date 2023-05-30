import { useState } from "react";

export default function TwitterEmbed() {
  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-800">
        <section className="flex w-full max-w-7xl items-center justify-center p-4">
          <div className="flex w-[601px] flex-col items-center justify-center rounded-lg border border-[#1DA1F2]/20 bg-[#243447] p-8 text-white">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-center space-x-6">
                <img src="/assets/twitter-embed/john-doe.png" alt="john doe" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">John Doe</span>
                  <span className="text-white/60">@realjohndoe</span>
                </div>
              </div>
              <img src="/assets/twitter-embed/twitter.svg" alt="twitter" />
            </div>
            <p className="my-4 text-base text-white">
              Why do they call it &#39;debugging&#39; when it feels more like &#39;wildly guessing
              and hoping for the best&#39;?{" "}
              <span className="text-[#1DA1F2]">#programming #coding #debugging</span>
            </p>
            <div className="flex w-full space-x-4 font-semibold">
              <div className="flex items-center justify-center space-x-2">
                <button type="button" aria-label="like" onClick={() => setIsLike(!isLike)}>
                  {isLike ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  )}
                </button>
                <span className="text-white/60">650</span>
              </div>
              <span className="text-base text-white/60">3:40 PM – Feb 24, 2022</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
