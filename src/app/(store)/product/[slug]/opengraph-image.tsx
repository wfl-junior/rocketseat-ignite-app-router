import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";
import { env } from "~/utils/env";
import { getProduct } from "./page";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function ProductOGImage({ params }: ProductProps) {
  const product = await getProduct(params.slug);
  const productImageUrl = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.zinc[950],
        }}
      >
        <img alt="" src={productImageUrl} style={{ width: "100%" }} />
      </div>
    ),
    size,
  );
}

export default ProductOGImage;
