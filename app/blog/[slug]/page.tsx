import { Post } from '@/app/type';
import Link from 'next/link';

export default async function page({ params }: { params: { slug: string } }) {
  const data = await fetch(`https://dummyjson.com/posts/${params.slug}`, { cache: 'force-cache' })
  const post: Post = await data.json()
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/blog" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        Back
      </Link>
      <div className="mb-6 bg-gray-50 p-5">
        <span className="capitalize mb-2 font-bold px-2 py-3 inline-block"> {post.tags[0]} </span>
        <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:mb-10"> {post.title} </h2>
        <p className="mb-8 text-sm text-gray-500 sm:text-base lg:mb-24"> {post.body} </p>
      </div>
    </div>
  )
}

// <Link className="mb-8 w-28 text-center text-black inline-block rounded-sm bg-blue-950/60 px-4 py-2.5" href={"/blog"}>
