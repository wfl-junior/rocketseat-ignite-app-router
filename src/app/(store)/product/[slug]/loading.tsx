import { Skeleton } from "~/components/Skeleton";

interface ProductLoadingProps {}

function ProductLoading({}: ProductLoadingProps): JSX.Element | null {
  return (
    <div className="relative grid grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Skeleton className="aspect-square w-[830px]" />
      </div>

      <div className="flex flex-col justify-center px-12">
        <Skeleton className="w-3/4 h-9" />

        <div className="mt-2 space-y-1">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-1/2 h-6" />
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Skeleton className="w-28 h-11 rounded-full" />
          <Skeleton className="flex-1 h-5" />
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
            <Skeleton className="h-9 w-14 rounded-full" />
          </div>
        </div>

        <Skeleton className="rounded-full h-12 mt-8" />
      </div>
    </div>
  );
}

export default ProductLoading;
