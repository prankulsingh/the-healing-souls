// src/app/resources/page.tsx
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function ResourcesPage() {
    const resources = [
        {
            title: 'Self-Esteem Journal Template',
            description: 'Guided prompts to build self-confidence.',
            href: '/resources/self-esteem-journal.pdf',
        },
        {
            title: 'CBT Thought Diary',
            description: 'Structured worksheet for tracking and reframing thoughts.',
            href: '/resources/cbt-thought-diary.pdf',
        },
        {
            title: 'Emotional Regulation Toolkit',
            description: 'Quick exercises to calm your mind in stressful moments.',
            href: '/resources/emotional-regulation-toolkit.pdf',
        },
        {
            title: 'Inner Child Healing Reflection Sheet',
            description: 'Journal prompts for inner-child work and self-compassion.',
            href: '/resources/inner-child-reflection.pdf',
        },
    ]

    return (
        <main>
            <Section className="bg-white">
                <Container className="space-y-8">
                    {/* Page Heading */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h1 className="text-4xl font-bold text-primary">
                            Free Resources & Downloads
                        </h1>
                        <p>
                            Download your complimentary self-help worksheets and guides below.
                        </p>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {resources.map((res) => (
                            <Card key={res.href}>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                        {res.title}
                                    </h3>
                                    <p className="text-neutral-700 flex-grow mb-4">
                                        {res.description}
                                    </p>
                                    <Button
                                        href={res.href}
                                        variant="primary"
                                        className="mt-auto"
                                    >
                                        Download PDF
                                    </Button>
                                </div>
                            </Card>
                        ))}

                        {/* Coming Soon Card */}
                        <Card className="opacity-60">
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    Custom Printed PDFs (Coming Soon)
                                </h3>
                                <p className="text-neutral-700 flex-grow mb-4">
                                    High-quality prints delivered to your doorstep.
                                </p>
                                <button
                                    disabled
                                    className="
                    mt-auto inline-block font-semibold rounded
                    px-4 py-2 bg-neutral-200 text-neutral-700
                    cursor-not-allowed focus:outline-none
                  "
                                >
                                    Coming Soon
                                </button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
