import type {Metadata} from 'next'
import './globals.css'
import {ReactNode} from 'react'
import Nav from '@/components/Nav'
import Container from '@/components/Container'

export const metadata: Metadata = {
    title: 'Healing Souls',
    description: 'Compassionate, science-backed guidance from counselling psychologist Vishakha Singh.',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body
            className="
          flex flex-col min-h-screen font-sans antialiased
          bg-neutral-100 text-neutral-900
          dark:bg-neutral-900 dark:text-neutral-100
        "
        >
        {/* Navigation (already sticky/backdrop in the Nav component) */}
        <Nav/>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-neutral-200 text-neutral-700">
            <Container className="py-6 text-center text-sm">
                © {new Date().getFullYear()} Healing Souls. All rights reserved.
            </Container>
        </footer>
        </body>
        </html>
    )
}
