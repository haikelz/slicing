import "../styles/grolin.css";

const socialMediaList = [
  {
    id: 1,
    logo: "/assets/grolin/twitter.svg",
    name: "Twitter Account",
    description: "Tweet, reply to tweet, manage DMs, and more in a single dashboard.",
  },
  {
    id: 2,
    logo: "/assets/grolin/twitter.svg",
    name: "Twitter Account",
    description: "Tweet, reply to tweet, manage DMs, and more in a single dashboard.",
  },
  {
    id: 3,
    logo: "/assets/grolin/instagram.svg",
    name: "Instagram Account",
    description: "Post a story, manage DMs, and more in a single dashboard.",
  },
];

export default function GrolinLogin() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#202433] text-white">
      <div className="flex w-full max-w-[85rem] items-center justify-center p-4 md:justify-between md:space-x-10">
        <div className="hidden h-[925px] w-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#F4C395] to-[#F27F94] px-14 pb-10 pt-16 md:flex">
          <div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#202433] p-5">
              A
            </div>
            <div className="mt-8 w-[444px] text-[#202433]">
              <span className="text-[15px] font-semibold">ACCAUNT.IO</span>
              <h2 className="text-[40px] font-medium">Manage multiple accounts in one place!</h2>
            </div>
            <div className="my-12 flex w-full items-center justify-center space-x-8 text-[#202433]">
              {socialMediaList.map((item) => (
                <div
                  key={item.id}
                  className="w-[287px] rounded-lg bg-[#FFE3CA] px-8 pb-12 pt-8 shadow-accordion shadow-[#202433]/10"
                >
                  <div className="w-[211px]">
                    <img src={item.logo} alt="twitter" />
                    <h5 className="mb-2 mt-5 text-base font-semibold text-black">{item.name}</h5>
                    <p className="text-xs font-medium text-black">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="h-[12px] w-[30px] rounded-full bg-[#FFE3CA]"></div>
              <div className="h-3 w-3 rounded-full bg-[#FFE3CA]/50"></div>
              <div className="h-3 w-3 rounded-full bg-[#FFE3CA]/50"></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-start space-x-3 text-xs font-semibold">
            <span className="text-[#202433]">PRIVACY POLICY</span>
            <div className="h-1 w-1 rounded-full bg-[#202433]"></div>
            <span className="text-[#202433]">TERMS OF SERVICE</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:p-10">
          <div className="flex w-full flex-col items-start justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-bold md:hidden">
              A
            </div>
            <div className="mt-5 w-full md:mt-0">
              <span className="text-[32px] font-semibold">Login</span>
              <p className="mb-6 mt-[10px] text-white/60">
                You can login with your registered account or quick login with your Google account.
              </p>
              <button className="flex w-full items-center justify-center space-x-2 rounded-md bg-white px-4 py-4">
                <img src="/assets/grolin/google.svg" alt="google" />
                <span className="font-semibold text-[#202433]">Login with Google</span>
              </button>
            </div>
            <div className="my-8 flex w-full items-center justify-center space-x-3">
              <div className="h-[2px] w-full bg-[#33394F]"></div>
              <span className="text-base font-semibold">or</span>
              <div className="h-[2px] w-full bg-[#33394F]"></div>
            </div>
            <div className="w-full space-y-5">
              <div className="flex flex-col">
                <label className="mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input className="rounded-md bg-[#33394F] px-8 py-4" type="email" name="email" />
              </div>
              <div className="flex flex-col">
                <div className="mb-2 flex items-center justify-between">
                  <label className="font-semibold" htmlFor="password">
                    Password
                  </label>
                  <span className="font-semibold text-[#FC728B]">Forgot Password?</span>
                </div>
                <input
                  className="rounded-md bg-[#33394F] px-8 py-4"
                  type="password"
                  name="password"
                />
              </div>
              <div className="flex w-fit items-center justify-center space-x-2">
                <input className="h-4 w-4 bg-[#33394F]" type="checkbox" name="checkbox" />
                <label htmlFor="remember me" className="text-base font-semibold">
                  Remember Me
                </label>
              </div>
              <button className="w-full rounded-md bg-[#FC728B] py-4 font-semibold text-[#202433]">
                Login
              </button>
            </div>
            <span className="mt-10 font-semibold text-white/60">
              Don’t have an account? <span className="text-[#FC728B]">Create one!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
