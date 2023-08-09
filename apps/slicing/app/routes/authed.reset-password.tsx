import "../styles/authed.css";

export default function AuthedResetPassword() {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="min-h-screen w-full p-6 md:w-1/2 md:px-28 md:py-20">
        <div className="w-fit rounded-md bg-[#EEF2FF] px-4 py-2.5">
          <span className="text-[28px] font-bold text-[#4F46E5]">G</span>
        </div>
        <div className="my-12">
          <div>
            <h2 className="text-[32px] font-semibold text-black">Masuk ke akun kamu</h2>
            <p className="mt-2 text-base text-[#4B5563]">
              Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu cita-citata sejak
              dalam embrio!
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-base font-semibold text-black">
                Email
              </label>
              <input
                className="mt-2 rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-black" htmlFor="sandi">
                  Kata Sandi
                </label>
                <p className="font-semibold text-[#4F46E5]">Lupa kata sandi?</p>
              </div>
              <input
                className="mt-2 rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                type="password"
                name="password"
              />
            </div>
            <div className="flex w-full items-center justify-start">
              <div className="flex items-center justify-start space-x-2">
                <input
                  className="rounded-md bg-[#F3F4F6] text-black"
                  type="checkbox"
                  name="ingat"
                />
                <label htmlFor="ingat" className="font-semibold text-black">
                  Ingat saya
                </label>
              </div>
            </div>
            <button className="w-full rounded-md bg-[#4F46E5] px-3 py-4 font-semibold text-white shadow-[#4F46E5] drop-shadow-md">
              Masuk
            </button>
          </div>
        </div>
        <p className="text-center text-base font-semibold text-black">
          Belum punya akun?{" "}
          <span className="font-semibold text-[#4F46E5]">Daftar sekarang, gratis!</span>
        </p>
      </div>

      <div className="right-side flex w-full flex-col items-center justify-center px-4 md:w-1/2 md:py-24">
        <div className="h-full w-full bg-[url('/assets/authed/login.png')] bg-cover"></div>
        <div className="mt-10">
          <span className="text-white/60">NAMANYAJUGABELAJAR.IO</span>
          <p className="text-[28px] md:w-[537px]">
            Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari Kemendikbud
            hehe~
          </p>
        </div>
      </div>
    </div>
  );
}
