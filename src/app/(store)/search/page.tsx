import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Busca",
};

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function Search({}: SearchProps): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
        >
          <Image
            alt=""
            priority
            width={480}
            height={480}
            quality={100}
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <strong className="text-sm truncate font-medium">
              Moletom Never Stop Learning
            </strong>

            <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
              R$ 129,00
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Search;
