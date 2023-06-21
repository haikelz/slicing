import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const paragraph = cva("font-rubik mt-5 text-base tracking-wide", {
  variants: {
    intent: {
      gray: "text-gray-200",
    },
  },
  defaultVariants: {
    intent: "gray",
  },
});

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof paragraph> &
  object;

export function Paragraph({ intent, className, children, ...props }: ParagraphProps) {
  return (
    <p className={paragraph({ intent, className })} {...props}>
      {children}
    </p>
  );
}
