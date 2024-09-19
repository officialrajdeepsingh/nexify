import Link from "next/link";
import { TypePost } from "../type";
import Tags from "@/components/Tags";

export default async function Page() {

  const data = await fetch('https://dummyjson.com/posts?limit=10', { cache: 'force-cache' })
  const AllPosts: TypePost = await data.json()

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-8">
      <h2 className="text-3xl font-bold md:text-5xl">
        The latest and greatest news
      </h2>
      <p className="mb-8 mt-4 text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
        Lorem ipsum dolor sit amet elit ut aliquam
      </p>
      <Tags  />
      <div className="mb-8 grid gap-0 sm:justify-items-stretch md:mb-12 md:grid-cols-2 md:gap-4 lg:mb-16 lg:gap-8">
        {
          AllPosts.posts.map(post => (<Link href={`/blog/${post.id.toString()}`} key={post.id} className="flex items-center gap-4 rounded-md p-4 border hover:bg-blue-950/40 border-solid border-gray-300 shadow-lg">
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-black capitalize">{post.tags[0]}</p>
              </div>
              <h1 className="mb-4 text-xl font-bold">{post.title}</h1>
              <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
                <p>Laila Bahar</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </Link>))
        }
      </div>
    </div>
  )
}
