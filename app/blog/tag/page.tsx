import Link from "next/link";
export default async function Page() {

  const data = await fetch('https://dummyjson.com/posts/tag-list', { cache: 'force-cache' })
  const AllTagList: string[] = await data.json()

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-8">
      <h2 className="text-3xl font-bold md:text-5xl">
       The available tags list
       </h2>

      <div className="my-10 md:my-20 flex flex-col md:flex-row flex-wrap justify-center gap-3">
        {
          AllTagList.map(tag => <Link key={tag} href={`/blog/tag/${tag}`} className={"px-4 py-2 hover:bg-gray-600 font-semibold rounded-full capitalize bg-black text-white"}> {tag} </Link>
          )
        }
      </div>
    </div>
  )
}
