import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Nexify is a project specifically designed to teach you Next.js.',
  description: 'To learn Next.js with Nexify. Nexify is specifically built to teach you about Next.js.',
}

export default async function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <div className="mb-6 bg-blue-400 text-center p-5 rounded shadow">
        <h2 className="mb-6 text-4xl font-bold md:text-8xl lg:mb-10"> Build, Test and Deploy </h2>
        <p className="mb-8 text-sm text-gray-800 sm:text-xl lg:mb-24"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
    </main>
  );
}
