'use client'

import { useState } from 'react'
import Card from './Card'
import Section from './Section'
import Button from './Button'

export function DreamAnalysis() {
    const [dream, setDream] = useState('')
    const [result, setResult] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const interpretation = `Your dream about "${dream}" may reflect your subconscious feelings—try journaling what stands out most.`
        setResult(interpretation)
    }

    return (
        <Card className="mb-8">
            <Section className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Dream Analysis</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="sr-only" htmlFor="dream-input">
                        Describe your dream
                    </label>
                    <input
                        id="dream-input"
                        type="text"
                        placeholder="Describe your dream..."
                        value={dream}
                        onChange={(e) => setDream(e.target.value)}
                        className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button variant="secondary">
                        Analyze Dream
                    </Button>
                </form>
                {result && (
                    <div className="mt-6 p-4 border-l-4 border-secondary bg-secondary/10 text-neutral-900">
                        <p>{result}</p>
                    </div>
                )}
            </Section>
        </Card>
    )
}

export function AttachmentStyleQuiz() {
    const [answers, setAnswers] = useState({ a: '', b: '' })
    const [result, setResult] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAnswers((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let style = 'Secure Attachment'
        if (answers.a === 'avoidant' || answers.b === 'anxious') {
            style = 'Insecure Attachment'
        }
        setResult(`Your attachment style: ${style}`)
    }

    return (
        <Card className="mb-8">
            <Section className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                    What’s Your Attachment Style?
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="q1" className="block mb-2 text-neutral-800">
                            I feel comfortable depending on others:
                        </label>
                        <select
                            id="q1"
                            name="a"
                            value={answers.a}
                            onChange={handleChange}
                            className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select an option</option>
                            <option value="secure">Mostly true</option>
                            <option value="avoidant">Somewhat true</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="q2" className="block mb-2 text-neutral-800">
                            I worry about being abandoned:
                        </label>
                        <select
                            id="q2"
                            name="b"
                            value={answers.b}
                            onChange={handleChange}
                            className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select an option</option>
                            <option value="secure">Mostly false</option>
                            <option value="anxious">Somewhat true</option>
                        </select>
                    </div>

                    <Button variant="secondary">
                        See Result
                    </Button>
                </form>

                {result && (
                    <div className="mt-6 p-4 border-l-4 border-secondary bg-secondary/10 text-neutral-900">
                        <p>{result}</p>
                    </div>
                )}
            </Section>
        </Card>
    )
}
