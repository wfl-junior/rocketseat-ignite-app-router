import data from "../data.json";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const product = data.products.find(product => product.slug === params.slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}
