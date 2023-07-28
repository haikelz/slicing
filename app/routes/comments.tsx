import "../styles/comments.css";

export default function Comments() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F1F8FF]">
      <div className="container mx-auto w-full max-w-2xl">
        <section className="w-full rounded-lg bg-white p-10 shadow-lg">
          <h3 className="font-sanspro text-3xl font-semibold text-black">Comments</h3>
          <div className="mt-6 space-y-10">
            <div className="rounded-lg border-2 border-[#0089FF] p-5 shadow-md">
              <div className="flex w-fit items-center justify-center space-x-2">
                <img src="/assets/comment/john-doe.svg" alt="john doe" />
                <span className="font-sanspro text-lg font-semibold text-black">John Doe</span>
              </div>
              <p className="border-b border-b-gray-300 py-4 font-sanspro text-base leading-[28px] text-black">
                I just tried this recipe and it was amazing! The instructions were clear and easy to
                follow, and the end result was delicious. I will definitely be making this again.
                Thanks for sharing!
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center justify-center space-x-3">
                  <img src="/assets/comment/bold.svg" alt="" />
                  <img src="/assets/comment/italic.svg" alt="" />
                  <img src="/assets/comment/link.svg" alt="" />
                </div>
                <button
                  className="rounded-lg bg-[#0089FF] px-5 py-3 text-base font-semibold text-white"
                  type="button"
                  aria-label="comment"
                >
                  Comment
                </button>
              </div>
            </div>
            <div className="py-5">
              <div className="flex w-fit items-center justify-center space-x-2">
                <img src="/assets/comment/jane-doe.svg" alt="jane doe" />
                <span className="font-sanspro text-lg font-semibold text-black">Jane Doe</span>
              </div>
              <p className="my-4 font-sanspro text-black/60">
                I really appreciate the insights and perspective shared in this article. It&#39;s
                definitely given me something to think about and has helped me see things from a
                different angle. Thank you for writing and sharing!
              </p>
              <div className="flex w-fit items-center justify-center space-x-4">
                <div className="flex items-center justify-center space-x-2">
                  <button className="rounded-md border border-[#E0E0E1] bg-[#F1F2F3] p-2">
                    <img src="/assets/comment/arrow-up.svg" alt="" />
                  </button>
                  <button className="rounded-md border border-[#E0E0E1] bg-[#F1F2F3] p-2">
                    <img src="/assets/comment/arrow-down.svg" alt="" />
                  </button>
                </div>
                <span className="text-sm font-semibold text-black/40">5 min ago</span>
              </div>
            </div>
          </div>
          <button
            className="mt-5 w-full rounded-md border border-[#E0E0E1] bg-[#F1F2F3] p-3 font-semibold text-black"
            type="button"
            aria-label="load more"
          >
            Load More
          </button>
        </section>
      </div>
    </div>
  );
}
