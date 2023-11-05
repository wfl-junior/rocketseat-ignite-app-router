import type { Metadata } from "next";
import Image from "next/image";
import { SizeButton } from "~/components/SizeButton";

export const metadata: Metadata = {
  title: "Product",
};

interface ProductProps {}

function Product({}: ProductProps): JSX.Element | null {
  return (
    <div className="relative grid grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          alt=""
          priority
          width={830}
          height={830}
          quality={100}
          src="/moletom-never-stop-learning.png"
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500 font-semibold">
            R$ 129,00
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x sem juros de R$ 10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <SizeButton size="P" />
            <SizeButton size="M" />
            <SizeButton size="G" />
            <SizeButton size="GG" />
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default Product;
