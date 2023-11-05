import { Skeleton } from "~/components/Skeleton";

interface HomeLoadingProps {}

function HomeLoading({}: HomeLoadingProps): JSX.Element | null {
  return (
    <div className="grid flex-1 grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[830px]" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  );
}

export default HomeLoading;
