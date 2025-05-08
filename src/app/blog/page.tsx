// src/app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'

type Post = {
    slug: string
    title: string
    date: string
    author: string
}

export default function BlogPage() {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

    const posts: Post[] = files
        .map((file) => {
            const slug = file.replace(/\.mdx$/, '')
            const fullPath = path.join(blogDir, file)
            const source = fs.readFileSync(fullPath, 'utf8')
            const { data } = matter(source)
            return {
                slug,
                title: data.title as string,
                date: data.date as string,
                author: data.author as string,
            }
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))

    return (
        <main>
            <Section className="bg-neutral-100">
                <Container className="space-y-8">
                    <h1 className="text-4xl font-bold text-primary">Healing Library</h1>
                    <ul className="grid gap-6 md:grid-cols-2">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Card>
                                    <div className="p-6">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-2xl font-semibold text-primary hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                        <p className="text-sm text-neutral-600 mt-2">
                                            {post.date} · {post.author}
                                        </p>
                                    </div>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
        </main>
    )
}
