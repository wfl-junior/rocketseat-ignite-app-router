import { Header } from "~/components/Header";

interface StoreLayoutProps {
  children: React.ReactNode;
}

function StoreLayout({ children }: StoreLayoutProps): JSX.Element | null {
  return (
    <div className="grid min-h-screen w-full max-w-[1600px] mx-auto grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}

export default StoreLayout;
