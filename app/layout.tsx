import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb"
import { VercelToolbar } from '@vercel/toolbar/next';
import { Banner } from "@/components/Banner";
import { getFlags } from '@/app/getFlags';

export const metadata: Metadata = {
  title: 'Home - To learn Next.js with Nexify.',
  description: 'To learn Next.js with Nexify. Nexify is specifically built to teach you about Next.js.',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const isDev = process.env.NODE_ENV === 'development';
  const { banner } = await getFlags()

  return (
    <html lang="en">
      <head>
        {!isDev && <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />}
      </head>
      <body>
        {banner === true ? <Banner /> : " "}
        <Header />
        <Breadcrumb />
        {children}
        {isDev && <VercelToolbar />}
      </body>
    </html>
  );
}
