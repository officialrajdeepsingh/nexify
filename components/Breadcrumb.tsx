'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export function Breadcrumb() {
  const segments = useSelectedLayoutSegments()
  let segmentURL = ""
  if (segments.length !== 0) {
    return (
      <nav aria-label="breadcrumb" className="pl-5 block mx-auto w-full max-w-7xl">
        <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-500 bg-opacity-10">
          {segments.map((segment, index) => {
            segmentURL = segmentURL + "/" + segment
            return (<li key={index} className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer">
              <Link href={segmentURL} className="capitalize hover:underline hover:underline-offset-4">
                {segment}
              </Link>
              <span
                className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>)
          })
          }
        </ol>
      </nav>
    )
  }
}
