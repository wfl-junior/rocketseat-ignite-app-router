import type { Metadata } from "next";
import Image from "next/image";
import { AddToCartButton } from "~/components/AddToCartButton";
import { SizeButton } from "~/components/SizeButton";
import { api } from "~/data/api";
import type { Product } from "~/types/Product";
import { formatPrice } from "~/utils/formatPrice";

export async function generateStaticParams() {
  const response = await api("/products/featured");
  const featuredProducts = (await response.json()) as Product[];
  return featuredProducts.map(product => ({ slug: product.slug }));
}

export async function getProduct(slug: string) {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  return response.json() as Promise<Product>;
}

interface ProductProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product.title,
    description: product.description,
  };
}

async function Product({ params }: ProductProps): Promise<JSX.Element | null> {
  const product = await getProduct(params.slug);

  return (
    <div className="relative grid grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          alt=""
          priority
          width={830}
          height={830}
          quality={100}
          src={product.image}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500 font-semibold">
            {formatPrice(product.price)}
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x sem juros de {formatPrice(product.price / 12)}
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

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}

export default Product;
