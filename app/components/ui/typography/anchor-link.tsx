import { Link, LinkProps } from "@remix-run/react";
import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";

const anchorLink = cva(
  "cursor-pointer w-fit tracking-wide font-rubik hover:underline-offset-4 hover:underline",
  {
    variants: {
      intent: {
        withGradient: [
          "flex items-center justify-center",
          "bg-gradient-to-br from-cyan-300 to-blue-700",
          "bg-clip-text text-transparent",
          "font-extrabold",
          "hover:decoration-blue-500",
        ],
        withoutGradient: ["text-gray-200 font-semibold"],
      },
      size: {
        normal: "text-base",
        "extra-large": "text-4xl",
      },
    },
    defaultVariants: {
      intent: "withGradient",
      size: "normal",
    },
  }
);

type AnchorLinkProps = AnchorHTMLAttributes<HTMLAnchorElement | LinkProps> &
  VariantProps<typeof anchorLink> & {
    to: string;
    type: "a" | "Link";
  };

export function AnchorLink({
  intent,
  size,
  className,
  children,
  to,
  type,
  ...props
}: AnchorLinkProps) {
  if (type === "a")
    return (
      <a href={to} className={anchorLink({ intent, size, className })} {...props}>
        {children}
      </a>
    );

  return (
    <Link to={to} className={anchorLink({ intent, size, className })}>
      {children}
    </Link>
  );
}
