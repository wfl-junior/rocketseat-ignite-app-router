import { Suspense } from "react";
import { Skeleton } from "~/components/Skeleton";
import { CurrentSearch } from "./current-search";

interface SearchLoadingProps {}

function SearchLoading({}: SearchLoadingProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-[418px]" />
        ))}
      </div>
    </div>
  );
}

export default SearchLoading;
