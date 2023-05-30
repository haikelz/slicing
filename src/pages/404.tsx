import clsx from "clsx";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-200">404 😴</h1>
          <p className="mt-3 text-xl font-medium text-gray-200">
            Looks like the page that you want to visit is not found!{" "}
            <Link
              className={clsx(
                "font-semibold text-white",
                "hover:underline hover:underline-offset-4"
              )}
              to="/"
              target="_blank"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
