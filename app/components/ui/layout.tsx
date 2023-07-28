import { cx } from "class-variance-authority";
import { ChildrenProps } from "~/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <div
      className={cx(
        "flex min-h-screen w-full items-start justify-center",
        "bg-black p-4",
        "md:items-center"
      )}
    >
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}
