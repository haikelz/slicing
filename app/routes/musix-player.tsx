import { cx } from "class-variance-authority";

import "../styles/musix-player.css";

const playlist = [
  {
    id: 1,
    song: "Hip Hop Sux!",
    band: "Mesin Tempur",
    duration: "2.33",
  },
  {
    id: 2,
    song: "Mari Membaca",
    band: "Mesin Tempur",
    duration: "1.21",
  },
  {
    id: 3,
    song: "Sopir Angkot Goblog",
    band: "Mesin Tempur",
    duration: "0.29",
  },
  {
    id: 4,
    song: "Aku Death Metal",
    band: "Mesin Tempur",
    duration: "1.16",
  },
];

export default function MusixPlayer() {
  return (
    <>
      <div className="flex items-center justify-center overflow-hidden">
        <div
          className={cx(
            "angular-gradient relative",
            "flex min-h-screen w-full scale-105 items-center justify-center",
            "opacity-90 blur-md"
          )}
        ></div>
        <main
          className={cx(
            "absolute z-10",
            "flex w-full max-w-[40rem] flex-col items-center justify-center",
            "text-white"
          )}
        >
          <section className="w-full rounded-t-lg shadow-lg">
            <div className="flex space-x-6 rounded-t-lg bg-[#1B1B1B]/90 px-8 py-10">
              <div>
                <img
                  src="/assets/musix-player/now-playing-cover-image.png"
                  alt="now playing cover"
                />
              </div>
              <div className="w-full">
                <div>
                  <span className="text-base font-semibold text-white/40">
                    Mesin Tempur Hip Hop Sux! (2021)
                  </span>
                  <h3 className="text-[32px] font-semibold leading-8">Sopir Angkot Goblog</h3>
                </div>
                <div className="mb-6 mt-10">
                  <div className="h-1 w-full bg-[#424242]">
                    <div className="flex h-1 w-7/12 items-center justify-end bg-[#71C6FF]">
                      <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="mt-2 flex w-full items-center justify-between">
                    <span className="text-white/40">0:18</span>
                    <span className="text-white/40">0:29</span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <button>
                    <img src="/assets/musix-player/bookmark.svg" alt="bookmark" />
                  </button>
                  <div className="flex items-center justify-center space-x-6">
                    <button>
                      <img src="/assets/musix-player/random.svg" alt="next" />
                    </button>
                    <button>
                      <img src="/assets/musix-player/previous.svg" alt="next" />
                    </button>
                    <button className="h-[50px] w-[50px] rounded-full bg-white p-3.5">
                      <img src="/assets/musix-player/play.svg" alt="play" />
                    </button>
                    <button>
                      <img src="/assets/musix-player/next.svg" alt="next" />
                    </button>
                    <button>
                      <img src="/assets/musix-player/repeat.svg" alt="next" />
                    </button>
                  </div>
                  <button>
                    <img src="/assets/musix-player/sound.svg" alt="sound" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full rounded-b-lg">
            <div className="rounded-b-lg bg-[#181818]/90 p-8">
              <p className="text-white/40">Playlist</p>
              <div className="mt-2">
                {playlist.map((item) => (
                  <div
                    key={item.id}
                    className={`flex py-5 ${item.id === 4 ? "" : "border-b"} w-full space-x-5 ${
                      item.id === 4 ? "" : "border-b-white/5"
                    }  items-center`}
                  >
                    <div>
                      <img
                        src="/assets/musix-player/playlist-cover-image.png"
                        alt="playlist cover"
                      />
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <div
                          className={
                            item.id === 3 ? "flex items-center justify-center space-x-2" : ""
                          }
                        >
                          <p className={`text-base ${item.id === 3 ? "text-[#71C6FF]" : ""}`}>
                            {item.song}
                          </p>
                          {item.id === 3 ? (
                            <img src="/assets/musix-player/frequency.svg" alt="frequency" />
                          ) : null}
                        </div>
                        <p className="text-[14px] text-white/40">{item.band}</p>
                      </div>
                      <span className="text-white/40">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
