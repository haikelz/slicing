import "../styles/authed.css";

export default function AuthedDaftar() {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="min-h-screen w-full p-6 md:w-1/2 md:px-28 md:py-20">
        <div className="w-fit rounded-md bg-[#EEF2FF] px-4 py-2.5">
          <span className="text-[28px] font-bold text-[#4F46E5]">G</span>
        </div>
        <div className="my-12">
          <div>
            <h2 className="text-[32px] font-semibold text-black">Bikin akun baru</h2>
            <p className="mt-2 text-base text-[#4B5563]">
              Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus langsung jadi deh!
            </p>
          </div>
          <div className="mt-8 w-full space-y-6 border-2">
            <div className="flex w-full flex-col">
              <label htmlFor="email" className="text-base font-semibold text-black">
                Name Lengkap
              </label>
              <div className="flex">
                <input
                  className="mt-2 rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                  type="text"
                  name="nama-awal"
                />
                <input
                  className="mt-2 w-fit rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                  type="text"
                  name="nama-akhir"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black" htmlFor="sandi">
                Email
              </label>
              <input
                className="mt-2 rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black" htmlFor="sandi">
                Password
              </label>
              <input
                className="mt-2 rounded-md bg-[#F3F4F6] px-4 py-3 text-black"
                type="password"
                name="password"
              />
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
