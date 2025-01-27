import type { Metadata } from "next"
import { notFound } from "next/navigation"

// This would typically come from an API or database
const getBlogPost = async (slug: string) => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const posts = [
    {
      slug: "best-electronics-2023",
      title: "Best Electronics of 2023",
      content: "This is the content of the blog post...",
    },
    {
      slug: "home-decor-tips",
      title: "Home Decor Tips for Every Room",
      content: "This is the content of the blog post...",
    },
  ]

  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  return post
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: `Read our blog post: ${post.title}`,
    openGraph: {
      title: post.title,
      description: `Read our blog post: ${post.title}`,
      type: "article",
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">{post.content}</div>
    </article>
  )
}

