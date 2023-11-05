import Image from "next/image";
import Link from "next/link";

function Home(): JSX.Element | null {
  return (
    <div className="grid flex-1 grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          alt=""
          priority
          width={830}
          height={830}
          quality={100}
          src="/moletom-never-stop-learning.png"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>

          <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          alt=""
          priority
          width={400}
          height={400}
          quality={100}
          src="/moletom-ai-side.png"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>

          <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          alt=""
          priority
          width={400}
          height={400}
          quality={100}
          src="/camiseta-dowhile-2022.png"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Camiseta DO WHILE 2022</span>

          <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Home;
