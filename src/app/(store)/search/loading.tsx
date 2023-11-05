"use client";

import { useSearchParams } from "next/navigation";
import { Skeleton } from "~/components/Skeleton";

interface SearchLoadingProps {}

function SearchLoading({}: SearchLoadingProps): JSX.Element | null {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-[418px]" />
        ))}
      </div>
    </div>
  );
}

export default SearchLoading;
