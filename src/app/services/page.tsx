// src/app/services/page.tsx
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function ServicesPage() {
    return (
        <main>
            <Section className="bg-white">
                <Container className="space-y-12">
                    {/* Overview */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h1 className="text-4xl font-bold text-primary">Therapy Services</h1>
                        <p className="text-lg text-neutral-700">
                            Individual online therapy sessions tailored for young adults, students, and anyone feeling emotionally overwhelmed.
                        </p>
                    </div>

                    {/* Session Details & Pricing */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">Session Details & Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                        First Consultation
                                    </h3>
                                    <p className="text-neutral-700 mb-4">Free 20-minute session</p>
                                    <Button
                                        href="https://instagram.com/_the_healing_souls/"
                                        variant="primary"
                                        className="mt-auto"
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </Card>
                            <Card>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                        Standard Session
                                    </h3>
                                    <p className="text-neutral-700 mb-4">₹ 999 / 50 minutes</p>
                                    <Button
                                        href="https://instagram.com/_the_healing_souls/"
                                        variant="primary"
                                        className="mt-auto"
                                    >
                                        DM to Book
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Modalities Used */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">Modalities Used</h2>
                        <ul>
                            <li>Client-Centered Therapy</li>
                            <li>Cognitive Behavioural Therapy (CBT)</li>
                            <li>Rational Emotive Behaviour Therapy (REBT)</li>
                            <li>Mindfulness-Based Techniques</li>
                            <li>Eclectic Approach</li>
                        </ul>
                    </div>

                    {/* How It Works */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">How It Works</h2>
                        <ol>
                            <li>
                                <strong>Reach Out:</strong> Send a DM on Instagram to schedule your session.
                            </li>
                            <li>
                                <strong>Confirm:</strong> We’ll agree on a time that works for you.
                            </li>
                            <li>
                                <strong>Connect:</strong> Join me on Zoom for your session.
                            </li>
                        </ol>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
