import { BASE_URL } from '@/lib/constants'
import type { MetadataRoute } from 'next'
import { TypePost } from './type'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const data = await fetch('https://dummyjson.com/posts?limit=10', { cache: 'force-cache' })
  const AllPosts: TypePost = await data.json()

  return [
    ...AllPosts.posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified: new Date(),
    })),
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
