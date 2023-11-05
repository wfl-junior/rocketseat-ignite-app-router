interface SizeButtonProps {
  size: string;
}

export function SizeButton({ size }: SizeButtonProps): JSX.Element | null {
  return (
    <button
      type="button"
      className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 transition-colors"
    >
      {size}
    </button>
  );
}
