"use client";

import { useSearchParams } from "next/navigation";

interface CurrentSearchProps {}

export function CurrentSearch({}: CurrentSearchProps): JSX.Element | null {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  );
}
