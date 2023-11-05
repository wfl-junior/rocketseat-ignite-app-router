import type { Metadata } from "next";
import { Header } from "~/components/Header";

export const metadata: Metadata = {
  title: "devstore",
};

interface StoreLayoutProps {
  children: React.ReactNode;
}

function StoreLayout({ children }: StoreLayoutProps): JSX.Element | null {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default StoreLayout;
