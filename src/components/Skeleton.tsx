import { classNames } from "~/utils/classNames";

interface SkeletonProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {}

export function Skeleton({
  className,
  ...props
}: SkeletonProps): JSX.Element | null {
  return (
    <div
      {...props}
      role="alert"
      aria-busy="true"
      aria-live="polite"
      className={classNames(
        "bg-zinc-50/10 animate-pulse rounded-md",
        className,
      )}
    >
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
