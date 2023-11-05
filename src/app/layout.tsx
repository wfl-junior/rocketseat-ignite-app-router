import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import { classNames } from "~/utils/classNames";
import { env } from "~/utils/env";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    absolute: "devstore",
    template: "%s | devstore",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps): JSX.Element | null {
  return (
    <html lang="pt-BR" dir="ltr">
      <body
        className={classNames(
          GeistSans.className,
          "bg-zinc-950 text-zinc-50 antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
