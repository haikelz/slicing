import { cx } from "class-variance-authority";

const navList = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Movies",
  },
  {
    id: 3,
    name: "Anime",
  },
];

const detailFilmList = [
  {
    id: 1,
    name: "Rating",
    ket: "8.9",
  },
  {
    id: 2,
    name: "Release year",
    ket: "2022",
  },
  {
    id: 3,
    name: "Genres",
    ket: "Adventure, Fantacy",
  },
  {
    id: 4,
    name: "Countries",
    ket: "Japan",
  },
  {
    id: 5,
    name: "Duration",
    ket: "2 hours +",
  },
];

const actionsList = [
  {
    id: 1,
    action: "Favorite",
    icon: "/assets/movies-io/star.svg",
  },
  {
    id: 2,
    action: "Watch Later",
    icon: "/assets/movies-io/bookmark.svg",
  },
  {
    id: 3,
    action: "Watched",
    icon: "/assets/movies-io/eye.svg",
  },
];

export default function Movies() {
  return (
    <div
      className={cx(
        "flex min-h-screen w-full flex-col items-center justify-start",
        "bg-gradient-to-br from-[#233458] to-[#111827]"
      )}
    >
      <nav
        className={cx(
          "sticky top-0 z-10 hidden w-full max-w-full items-center justify-center md:flex",
          "border-b border-b-[#535F77] bg-[#233458] p-4"
        )}
      >
        <div className="flex w-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center justify-center space-x-10">
            <span className="text-2xl font-bold">Movies.io</span>
            <ul className="flex space-x-8">
              {navList.map((item) => (
                <li key={item.id}>
                  <span
                    className={cx(
                      item.name === "Movies"
                        ? "underline decoration-[#1D4ED8] decoration-4 underline-offset-8"
                        : ""
                    )}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-10">
            <div className="relative flex w-fit items-center justify-start">
              <input
                type="text"
                placeholder="Search.."
                className={cx(
                  "relative rounded-full bg-[#192642]",
                  "py-2 pl-10 pr-4",
                  "outline-none transition-all",
                  "placeholder:text-base placeholder:font-medium",
                  "focus:ring focus:ring-blue-500"
                )}
              />
              <img className="absolute left-4" src="/assets/movies-io/search.svg" alt="search" />
            </div>
            <button className="text-[#1D4ED8]" type="button" aria-label="sign in">
              Sign In
            </button>
            <button
              className="rounded-md bg-[#1D4ED8] px-6 py-2"
              type="button"
              aria-label="sign up"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col items-start justify-between xl:flex-row xl:space-x-10">
          <div className="flex w-full flex-col xl:w-fit">
            <img
              className="h-96 w-full object-cover xl:h-[521.63px] xl:w-[397px]"
              src="/assets/movies-io/one-piece.png"
              alt="one piece"
            />
            <button
              className={cx(
                "mb-10 mt-7 flex items-center justify-center rounded-full",
                "bg-white/[0.06] py-2"
              )}
              type="button"
              aria-label="trailer"
            >
              <img src="/assets/movies-io/trailer.svg" alt="trailer" />
              <span className="text-xl font-bold text-[#1D4ED8]">Trailer</span>
            </button>
            <div className="flex items-center justify-evenly space-x-4">
              {actionsList.map((item) => (
                <div key={item.id} className="flex flex-col items-center justify-center">
                  <img src={item.icon} alt={item.action} />
                  <span className="mt-4 font-normal">{item.action}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 w-full xl:mt-0 xl:w-fit">
            <h2 className="text-center text-[40px] font-bold leading-9 xl:text-start">
              One Piece Film : Red
            </h2>
            <div>
              <div
                className={cx(
                  "my-10 flex w-full flex-col items-center justify-center space-y-4 xl:w-fit",
                  "md:flex-row md:space-x-4 md:space-y-0 xl:items-start xl:justify-start"
                )}
              >
                <button
                  className={cx(
                    "flex w-full items-center justify-center space-x-4 rounded-full md:w-fit",
                    "bg-gradient-to-b from-[#7D96DC] to-[#1D4ED8]",
                    "px-12 py-4"
                  )}
                  type="button"
                  aria-label="watch"
                >
                  <img src="/assets/movies-io/play.svg" alt="watch" />
                  <span className="text-2xl font-medium">Watch</span>
                </button>
                <button
                  className={cx(
                    "flex w-full items-center justify-center space-x-4 md:w-fit",
                    "rounded-full bg-white/[0.04]",
                    "px-12 py-4"
                  )}
                  type="button"
                  aria-label="download"
                >
                  <img src="/assets/movies-io/download.svg" alt="download" />
                  <span className="text-2xl font-medium">Download</span>
                </button>
              </div>
              <div
                className={cx(
                  "flex w-full items-center justify-center space-x-8 xl:w-fit",
                  "border-b-2 border-b-[#242E43] py-3"
                )}
              >
                <div className="flex flex-col">
                  <div className="flex flex-col justify-between md:flex-row">
                    <div>
                      <h5 className="text-base font-bold">STORYLINE</h5>
                      <p className="my-5 w-full md:w-[486px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet condimentum
                        nec porttitor felis enim aliquet nibh. Commodo fringilla accumsan, elit,
                        elementum ullamcorper. Tempus non, semper eget adipiscing aenean sit
                        pharetra ipsum cursus.
                      </p>
                    </div>
                    <div className="w-full sm:w-fit">
                      <h5 className="text-base font-bold">Written by</h5>
                      <div
                        className={cx(
                          "my-7 flex items-center justify-center space-x-5",
                          "rounded-2xl bg-[#D9D9D9]/[0.08] px-3 py-4"
                        )}
                      >
                        <img src="/assets/movies-io/oda.png" alt="Eiichiro Oda" />
                        <div>
                          <span className="text-base">Eiichiro Oda</span>
                          <p className="text-base text-[#878787]">
                            Official Creator & manga artist
                          </p>
                        </div>
                      </div>
                      <div className="flex items-end justify-end">
                        <span className="text-[#1D4ED8]">See All</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-16">
                    <div className="space-y-3">
                      {detailFilmList.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span className="text-[#606060]">{item.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {detailFilmList.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span
                            className={cx(
                              item.name === "Genres" ||
                                item.name === "Countries" ||
                                item.name === "Duration"
                                ? "italic"
                                : "font-medium"
                            )}
                          >
                            {item.ket}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-fit space-x-5 xl:ml-6">
                <button
                  className={cx(
                    "flex items-center justify-center space-x-3",
                    "rounded-full bg-[#D9D9D9]/[0.08] px-3 py-2.5"
                  )}
                  type="button"
                  aria-label="twitter"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <img src="/assets/movies-io/twitter.svg" alt="twitter" />
                    <img src="/assets/movies-io/love.svg" alt="love" />
                  </div>
                  <span>+1</span>
                </button>
                <button
                  className={cx(
                    "flex items-center justify-center space-x-3",
                    "rounded-full bg-[#D9D9D9]/[0.08] px-3 py-2.5"
                  )}
                  type="button"
                  aria-label="facebook"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <img src="/assets/movies-io/facebook.svg" alt="facebook" />
                    <img src="/assets/movies-io/thumb-up.svg" alt="thumb up" />
                  </div>
                  <span>+1.5k</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
