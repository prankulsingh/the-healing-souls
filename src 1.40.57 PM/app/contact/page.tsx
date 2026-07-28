// src/app/contact/page.tsx
'use client'

import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function ContactPage() {
    return (
        <main>
            <Section className="bg-white">
                <Container className="space-y-8">
                    {/* Heading & Intro */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
                        <p>
                            Have questions or want to schedule a session? Reach out via one of
                            the following methods:
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        {/* Instagram DM */}
                        <Button
                            href="https://instagram.com/_the_healing_souls/"
                            variant="primary"
                            className="w-full sm:w-auto text-center"
                        >
                            Send Instagram DM
                        </Button>

                        {/* Email (overriding secondary for neutral tone) */}
                        <Button
                            href="mailto:hello@healingsouls.com"
                            variant="secondary"
                            className="
                bg-neutral-200 hover:bg-neutral-300 text-neutral-900
                focus:ring-neutral-300 w-full sm:w-auto text-center
              "
                        >
                            Send Email
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
