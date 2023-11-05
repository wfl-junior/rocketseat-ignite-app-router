"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchFormProps {}

export function SearchForm({}: SearchFormProps): JSX.Element | null {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("q");
    if (!query) return;
    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-2 ring-zinc-700 focus-within:ring-violet-500"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        required
        type="text"
        placeholder="Buscar produtos..."
        defaultValue={searchParams.get("q") ?? undefined}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  );
}
