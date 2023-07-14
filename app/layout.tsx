import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Renault Scenic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigation">
          <Link className="navigation-logo" href="/">
            LOGO/HOME
          </Link>

          <Link className="navigation-link" href="/about">
            ABOUT
          </Link>
          <Link className="navigation-link" href="/contact">
            CONTACT
          </Link>
        </nav>
        <main className="main-container">{children}</main>
        <footer>Изработено от Стоян Зланков</footer>
      </body>
    </html>
  );
}
