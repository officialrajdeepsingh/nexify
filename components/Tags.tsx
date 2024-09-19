"use client"

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';


const tags: string[] = ["history", "american", "crime", "french", "fiction"]

export default function Tags() {

  const segment = useSelectedLayoutSegment();

  return (
    <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
      {
        tags.map(tag => <Link key={tag} href={`/blog/tag/${tag}`} className={cn(
          "px-4 py-2 bg-gray-100 font-semibold rounded-full capitalize", segment === tag && "bg-black text-white")}> {tag} </Link>
        )
      }
    </div>
  )
}
