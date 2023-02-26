import "#/styles/index.css";

import { Fira_Code, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { twcx } from "#/shared/utils";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["vietnamese", "latin"],
  display: "block",
  preload: true,
});

const fontMono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
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
      <body className="min-h-screen bg-slate-100">
        <header className="flex items-center justify-between py-5 max-w-5xl mx-auto px-4">
          <Link className="text-xl font-bold" href="/">
            unnoow
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link className="hover:text-blue-700" href="/writings">
                  writings.
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-700" href="/daily-lessons">
                  today-i-learns.
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-4">{children}</main>

        <footer className="max-w-5xl mx-auto px-4">Footer</footer>
      </body>
    </html>
  );
}
