// src/app/about/page.tsx
import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function AboutPage() {
    return (
        <main>
            {/* Hero Intro */}
            <Section id="about-hero" className="bg-white">
                <Container className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3">
                        <Image
                            src="/portrait.jpg"
                            alt="Portrait of Vishakha Singh"
                            width={300}
                            height={300}
                            className="rounded-full shadow-lg mx-auto"
                        />
                    </div>
                    <div className="md:w-2/3 mt-6 md:mt-0 md:pl-10 prose prose-neutral dark:prose-invert">
                        <h1 className="text-4xl font-bold text-primary mb-2">
                            Hi, I’m Vishakha Singh
                        </h1>
                        <p className="text-lg text-neutral-700">
                            I’m a counselling psychologist based in Delhi, dedicated to helping
                            individuals heal and grow through a client-centered, empathetic approach.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Details Sections */}
            <Section className="bg-white">
                <Container className="space-y-12">
                    {/* Education & Certifications */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Education & Certifications
                        </h2>
                        <ul>
                            <li>B.A. (Hons) in Psychology, Delhi University</li>
                            <li>Master’s in Applied Psychology, Amity University</li>
                            <li>Certified in CBT & REBT</li>
                            <li>Diploma in Guidance & Counselling (in progress), Jamia Millia Islamia</li>
                        </ul>
                    </div>

                    {/* Professional Journey */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Professional Journey
                        </h2>
                        <ul>
                            <li>Started as a school teacher (Diploma in Elementary Education)</li>
                            <li>Transitioned into counselling psychology with evidence-based methods</li>
                            <li>Now blending science-backed therapies with genuine care</li>
                        </ul>
                    </div>

                    {/* Philosophy */}
                    <div className="prose prose-neutral dark:prose-invert mx-auto">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            My Philosophy
                        </h2>
                        <blockquote className="border-l-4 border-accent pl-4 italic font-serif text-neutral-700 dark:text-neutral-200">
                            “Healing begins when you’re heard without judgment.”
                        </blockquote>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Button
                            href="https://instagram.com/_the_healing_souls/"
                            variant="primary"
                        >
                            Book Free Consultation
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
