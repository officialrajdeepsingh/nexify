'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

export function Breadcrumb() {
  const segments = useSelectedLayoutSegments()
  return (
    <nav aria-label="breadcrumb" className="pl-5 block mx-auto w-full max-w-7xl">
      <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
        {segments.map((segment, index) => (<li key={index} className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <h4 className="opacity-60">
            {segment}
          </h4>
          <span
            className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
            /
          </span>
        </li>))
        }
      </ol>
    </nav>
  )
}
