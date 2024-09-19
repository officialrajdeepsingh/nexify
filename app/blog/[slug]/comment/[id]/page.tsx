import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const commentsData = await fetch(`https://dummyjson.com/comments/${params.id}`, { cache: 'force-cache' })
  const comment = await commentsData.json();
  return {
    title: comment.user.fullName,
    description: comment.body,
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const commentsData = await fetch(`https://dummyjson.com/comments/${params.id}`, { cache: 'force-cache' })
  const comment = await commentsData.json()

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-8">
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/blog" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        Back
      </Link>
      <div className="mb-6 bg-gray-50 p-5">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:mb-10"> {comment.user.fullName} </h2>
        <p className="mb-8 text-sm text-gray-500 sm:text-base lg:mb-24"> {comment.body} </p>
      </div>
    </div>
  )
}

