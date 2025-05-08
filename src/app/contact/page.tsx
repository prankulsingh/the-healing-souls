// src/app/resources/page.tsx
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function ResourcesPage() {
    return (
        <main>
            <Section className="bg-white">
                <Container className="space-y-8">
                    {/* Page Heading */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h1 className="text-4xl font-bold text-primary">Free Resources & Downloads</h1>
                        <p>Download your complimentary self-help worksheets and guides below.</p>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Self-Esteem Journal */}
                        <Card>
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    Self-Esteem Journal Template
                                </h3>
                                <p className="text-neutral-700 flex-grow mb-4">
                                    Guided prompts to build self-confidence.
                                </p>
                                <Button
                                    href="/resources/self-esteem-journal.pdf"
                                    variant="primary"
                                    className="mt-auto"
                                >
                                    Download PDF
                                </Button>
                            </div>
                        </Card>

                        {/* CBT Thought Diary */}
                        <Card>
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    CBT Thought Diary
                                </h3>
                                <p className="text-neutral-700 flex-grow mb-4">
                                    Structured worksheet for tracking and reframing thoughts.
                                </p>
                                <Button
                                    href="/resources/cbt-thought-diary.pdf"
                                    variant="primary"
                                    className="mt-auto"
                                >
                                    Download PDF
                                </Button>
                            </div>
                        </Card>

                        {/* Emotional Regulation Toolkit */}
                        <Card>
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    Emotional Regulation Toolkit
                                </h3>
                                <p className="text-neutral-700 flex-grow mb-4">
                                    Quick exercises to calm your mind in stressful moments.
                                </p>
                                <Button
                                    href="/resources/emotional-regulation-toolkit.pdf"
                                    variant="primary"
                                    className="mt-auto"
                                >
                                    Download PDF
                                </Button>
                            </div>
                        </Card>

                        {/* Inner Child Reflection */}
                        <Card>
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    Inner Child Healing Reflection Sheet
                                </h3>
                                <p className="text-neutral-700 flex-grow mb-4">
                                    Journal prompts for inner-child work and self-compassion.
                                </p>
                                <Button
                                    href="/resources/inner-child-reflection.pdf"
                                    variant="primary"
                                    className="mt-auto"
                                >
                                    Download PDF
                                </Button>
                            </div>
                        </Card>

                        {/* Printed PDFs Coming Soon */}
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
                    px-4 py-2 bg-neutral-200 text-neutral-500
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
