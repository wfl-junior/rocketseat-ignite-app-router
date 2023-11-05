import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

export function Header({}: HeaderProps): JSX.Element | null {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-2 ring-zinc-700 focus-within:ring-violet-500">
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Carrinho (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>

          <Image
            alt=""
            width={24}
            height={24}
            src="https://github.com/wfl-junior.png"
            className="w-6 aspect-square rounded-full"
          />
        </Link>
      </div>
    </header>
  );
}
