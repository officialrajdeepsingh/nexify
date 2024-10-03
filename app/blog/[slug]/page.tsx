import { Post } from '@/app/type';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // get the slug 
  const slug = params.slug
  // fetch post
  const data = await fetch(`https://dummyjson.com/posts/${slug}`, { cache: 'force-cache' })
  const post: Post = await data.json()

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      images: ["https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"], // images : [...post.images] Dummy JSON API doesn't provide a thumbnail image, so we use Pixabay image for this example.
    },

    twitter: {
      creator: "Official_R_deep",
      title: post.title,
      description: post.body,
      images: ["https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"] // images : [...post.images] Dummy JSON API doesn't provide a thumbnail image, so we use Pixabay image for this example.
    }
  }
}

export default async function page({ params }: { params: { slug: string } }) {

  const data = await fetch(`https://dummyjson.com/posts/${params.slug}`, { cache: 'force-cache' })
  const post: Post = await data.json()
  const commentsData = await fetch('https://dummyjson.com/comments?limit=5', { cache: 'force-cache' })
  const { comments } = await commentsData.json()

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-8">
        <Link className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#050708] text-white hover:underline hover:underline-offset-4" href="/blog" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Back
        </Link>
        <div className="mb-6 bg-gray-50 p-5 mt-5">
          <Link href={`tag/${post.tags[0]}`} className="capitalize mb-2 font-bold px-2 py-3 inline-block"> {post.tags[0]} </Link>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:mb-10"> {post.title} </h2>
          <p className="mb-8 text-sm text-gray-500 sm:text-base lg:mb-24"> {post.body} </p>
        </div>
      </div>


      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>
          {
            comments.map(comment => <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    {comment.user.fullName}
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {comment.body}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <Link href={`${params.slug}/comment/${comment.id}`}
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </Link>
              </div>
            </article>)
          }
        </div>
      </section>
    </>
  )
}

// <Link className="mb-8 w-28 text-center text-black inline-block rounded-sm bg-blue-950/60 px-4 py-2.5" href={"/blog"}>
