'use client'

import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function HomePage() {
  return (
      <main>
        <Section id="hero" className="bg-white">
          <Container className="flex flex-col md:flex-row items-center justify-between">
            {/* Text block */}
            <div className="max-w-lg text-center md:text-left space-y-6">
              <h1 className="text-5xl font-bold text-primary">
                Heal, Grow & Discover Yourself
              </h1>
              <p className="text-lg text-neutral-700">
                Compassionate, science-backed guidance from counselling psychologist
                Vishakha Singh.
              </p>
              <Button
                  href="https://instagram.com/_the_healing_souls/"
                  variant="primary"
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Portrait */}
            <div className="mt-8 md:mt-0">
              <Image
                  src="/portrait.png"
                  alt="Portrait of Vishakha Singh"
                  width={400}
                  height={400}
                  className="rounded-full shadow-xl"
              />
            </div>
          </Container>
        </Section>
      </main>
  )
}
