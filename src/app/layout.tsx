import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "devstore",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps): JSX.Element | null {
  return (
    <html lang="pt-BR">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
