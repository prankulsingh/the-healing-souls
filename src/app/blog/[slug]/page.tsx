// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import Container from '@/components/Container'
import Section from '@/components/Section'

export async function generateStaticParams() {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    const files = fs
        .readdirSync(blogDir)
        .filter((file) => file.endsWith('.mdx'))
    return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }))
}

// 1. Make params a Promise
type Props = {
    params: Promise<{ slug: string }>
}

export default async function BlogPostPage(props: Props) {
    // 2. Await the async params API
    const { slug } = await props.params

    const blogDir = path.join(process.cwd(), 'content', 'blog')
    const filePath = path.join(blogDir, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        return notFound()
    }

    const source = fs.readFileSync(filePath, 'utf8')
    const { content, frontmatter } = await compileMDX({
        source,
        options: { parseFrontmatter: true },
    })

    const { title, date, author } = frontmatter as {
        title: string
        date: string
        author: string
    }

    return (
        <main>
            <Section className="bg-neutral-100">
                <Container className="prose prose-lg prose-neutral dark:prose-invert mx-auto">
                    <h1 className="text-4xl font-bold text-primary mb-2">{title}</h1>
                    <p className="text-sm text-neutral-600 mb-8">
                        {date} · {author}
                    </p>
                    {content}
                </Container>
            </Section>
        </main>
    )
}
