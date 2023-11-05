import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/data/api";
import type { Product } from "~/types/Product";
import { formatPrice } from "~/utils/formatPrice";

export const metadata: Metadata = {
  title: "Home",
};

async function getFeaturedProducts() {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  return response.json() as Promise<Product[]>;
}

async function Home(): Promise<JSX.Element | null> {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  if (!highlightedProduct) {
    return (
      <p className="text-lg font-medium text-center">
        Não há produtos disponíveis
      </p>
    );
  }

  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          alt=""
          priority
          width={830}
          height={830}
          quality={100}
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <strong className="text-sm truncate font-medium">
            {highlightedProduct.title}
          </strong>

          <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            {formatPrice(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
        >
          <Image
            alt=""
            priority
            width={400}
            height={400}
            quality={100}
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <strong className="text-sm truncate font-medium">
              {product.title}
            </strong>

            <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
              {formatPrice(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
