// src/app/tests/page.tsx
'use client'

import Section from '@/components/Section'
import Container from '@/components/Container'
import { DreamAnalysis, AttachmentStyleQuiz } from '@/components/Tests'

export default function TestsPage() {
    return (
        <main>
            <Section className="bg-white">
                <Container className="space-y-12">
                    {/* Page Heading & Intro */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h1 className="text-4xl font-bold text-primary">Psychometric Tests</h1>
                        <p className="text-neutral-700">
                            Explore these self-guided quizzes and see instant interpretations you can share.
                        </p>
                    </div>

                    {/* Tests Components */}
                    <DreamAnalysis />
                    <AttachmentStyleQuiz />
                </Container>
            </Section>
        </main>
    )
}
