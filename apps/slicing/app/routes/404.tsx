import { Paragraph } from "~/components/ui/typography";
import { AnchorLink } from "~/components/ui/typography/anchor-link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-200">404 😴</h1>
          <Paragraph intent="gray" className="mt-3 text-xl">
            Looks like the page that you want to visit is not found!{" "}
            <AnchorLink to="/" type="Link" intent="withoutGradient" className="text-xl">
              Back to Home
            </AnchorLink>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
