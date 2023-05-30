const testimonialList = [
  {
    id: 1,
    name: "Jane Smith",
    image: "/assets/testimonial/jane.png",
    role: "Freelance Designer",
    star: 5,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
  },
  {
    id: 2,
    name: "Tom Williams",
    image: "/assets/testimonial/william.png",
    role: "Freelance Designer",
    star: 3,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/assets/testimonial/michael.png",
    role: "Freelance Designer",
    star: 1,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "/assets/testimonial/sarah.png",
    role: "Freelance Designer",
    star: 5,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
  },
];

export default function Testimonial() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#1A1A1A]">
      <div className="max-w-7xl">
        <div>
          <h1 className="bg-gradient-to-br from-[#582FFB] via-[#FF4DCD] to-[#FC974E] bg-clip-text text-[84px] font-bold text-transparent">
            Testimonial
          </h1>
          <p className="w-[582px] text-xl text-white/60">
            Don't just take our word for it - see what actual users of our service have to say about
            their experience.
          </p>
          <div className="flex items-center justify-end space-x-3">
            <button className="rounded-sm bg-white/[.05]" type="button" aria-label="swipe left">
              <img src="/assets/testimonial/arrow-left.svg" className="p-2.5" />
            </button>
            <button className="rounded-sm bg-white/[.05]" type="button" aria-label="swipe right">
              <img src="/assets/testimonial/arrow-right.svg" className="p-2.5" />
            </button>
          </div>
        </div>
        <div className="w-full -translate-x-14 overflow-x-clip">
          <div className="mt-20 grid w-[1530px] grid-cols-4 grid-rows-1 gap-6">
            {testimonialList.map((item) => {
              const newStar = new Array(item.star).fill(null).map((value, index) => index + 1);
              const newUnstar = new Array(5 - item.star)
                .fill(null)
                .map((value, index) => index + 1);
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center rounded-md bg-white/[.03] py-8 text-center"
                >
                  <div className="w-[300px] px-6">
                    <p className="text-base leading-[34px]">{item.review}</p>
                  </div>
                  <div className="my-6 flex items-center justify-center space-x-2">
                    {newStar.map((star) => (
                      <img key={star} src="/assets/testimonial/star.svg" />
                    ))}
                    {newUnstar.map((unstar) => (
                      <img key={unstar} src="/assets/testimonial/unstar.svg" />
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img className="h-[50px] w-[50px] rounded-full" src={item.image} alt="" />
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span className="text-sm text-white/60">{item.role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
