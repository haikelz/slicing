import clsx from "clsx";
import { Link } from "react-router-dom";
import "../styles/home.css";

const pagesList = [
  {
    id: 1,
    route: "/comment",
  },
  {
    id: 2,
    route: "/digidaw",
  },
  {
    id: 3,
    route: "/faceless",
  },
  {
    id: 4,
    route: "/grolin/register",
  },
  {
    id: 5,
    route: "/jobless",
  },
  {
    id: 6,
    route: "/kourse",
  },
  {
    id: 7,
    route: "/musix-player",
  },
  {
    id: 8,
    route: "/nowted-hero",
  },
  {
    id: 9,
    route: "/priced",
  },
  {
    id: 10,
    route: "/swiftship",
  },
  {
    id: 11,
    route: "/testimonial",
  },
  {
    id: 12,
    route: "/twitter-embed",
  },
  {
    id: 13,
    route: "/movies",
  },
  {
    id: 14,
    route: "/holadok",
  },
  {
    id: 15,
    route: "/enlighten",
  },
  {
    id: 16,
    route: "/grolin/login",
  },
];

export default function Home() {
  return (
    <div
      className={clsx(
        "flex min-h-screen w-full items-start justify-center",
        "bg-black p-4",
        "md:items-center"
      )}
    >
      <div className="w-full max-w-4xl">
        <div className="mb-5">
          <Link
            to="https://github.com/haikelz/slicing"
            target="_blank"
            className={clsx(
              "w-fit cursor-pointer",
              "flex items-center justify-center",
              "bg-gradient-to-br from-cyan-300 to-blue-700 bg-clip-text",
              "font-rubik text-4xl font-bold tracking-wide",
              "text-transparent underline-offset-4",
              "hover:underline hover:decoration-blue-500"
            )}
          >
            haikelz/slicing
          </Link>
          <p className="mt-5 font-rubik text-base tracking-wide text-gray-200">
            My result for 1 day 1 slicing. Design didapat dari{" "}
            <Link
              to="https://codedesign.dev"
              target="_blank"
              className={clsx(
                "rounded-md font-semibold",
                "hover:underline hover:underline-offset-4"
              )}
            >
              codedesign.dev
            </Link>{" "}
            . Mayoritas desain yang dislicing berbentuk component karena untuk ngejar waktu, tapi
            tidak dipungkiri bakal ngambil yang page juga. Berikut hasil slicingnya(pilih salah satu
            link):
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {pagesList.map((item) => (
            <Link className="w-fit cursor-pointer" to={item.route} key={item.id}>
              <button
                className={clsx(
                  "rounded-md font-semibold",
                  "hover:underline hover:underline-offset-4"
                )}
                type="button"
                aria-label={item.route.slice(1)}
              >
                {item.route}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
