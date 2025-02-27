
// import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'
import Image from 'next/image'
// import logoImg from '@/assets/img/SQXBondsColorLogo.webp'
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: "400",
  subsets: ['latin'],
});


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta name="google-site-verification" content="0G9hxICKjyYoQQ0JP89rJiHozJU2Wir4L_2OK808TKs" />
      </head>
      <body className="min-h-screen bg-gray-50" suppressHydrationWarning>
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blu px-2 lg:px-6">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src='/img/SQXBondsColorLogo.webp'
                width={120}
                height={48}
                alt="SQXbonds Logo"
                priority
                className="object-contain"
              />
            </Link>
            {/* <h1 className="text-2xl font-bold text-gray-900"></h1> */}
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                </li>
                <li>
                  <Link href="/market-analysis" className="text-gray-600 hover:text-gray-900">Market Analysis</Link>
                </li>
                <li>
                  <a href="https://sqxbonds.com/" target="_blank" className="btn text-gray-600 hover:text-gray-900 border border-gray-500 bg-white hover:bg-gray-50 px-4 py-2 rounded-md">Visit Website </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-4">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600">© 2025 SQX bonds. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
