import "#/styles/index.css";

import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

import { twcx } from "#/shared/utils";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["vietnamese", "latin"],
  display: "block",
  preload: true,
});

const fontMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["vietnamese"],
  display: "block",
  weight: ["400", "700"],
  preload: true,
});

export const metadata = {
  title: "trungluc.dev",
  description: "Just a guy with a lot of dream",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="vi"
      className={twcx(fontSans.variable, fontMono.variable, "font-medium")}
    >
      <body className="min-h-screen bg-slate-200/70">
        <header className="flex items-center justify-between py-5 max-w-5xl mx-auto px-4">
          <div className="text-xl font-bold">unnoow</div>
          <div>menu</div>
        </header>

        <main className="max-w-5xl mx-auto px-4">{children}</main>

        <footer className="max-w-5xl mx-auto px-4">Footer</footer>
      </body>
    </html>
  );
}
