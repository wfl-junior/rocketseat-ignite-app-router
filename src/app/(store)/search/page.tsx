import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { api } from "~/data/api";
import type { Product } from "~/types/Product";
import { formatPrice } from "~/utils/formatPrice";

async function getSearchProducts(query: string) {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  return response.json() as Promise<Product[]>;
}

interface SearchProps {
  searchParams: {
    q?: string;
  };
}

export function generateMetadata({ searchParams }: SearchProps): Metadata {
  const { q: query } = searchParams;

  if (!query) {
    return redirect("/");
  }

  return {
    title: `${query} | Busca`,
  };
}

async function Search({
  searchParams,
}: SearchProps): Promise<JSX.Element | null> {
  const { q: query } = searchParams;

  if (!query) {
    return redirect("/");
  }

  const products = await getSearchProducts(query);

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
            >
              <Image
                alt=""
                priority
                width={480}
                height={480}
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
      ) : (
        <p className="text-center text-zinc-400">Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default Search;
